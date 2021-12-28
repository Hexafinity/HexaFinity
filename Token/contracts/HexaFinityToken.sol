// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./interfaces/IUniswapV2.sol";


contract HexaFinityToken is Context, IERC20, Ownable {
    using Address for address;

    struct RValuesStruct {
        uint256 rAmount;
        uint256 rTransferAmount;
        uint256 rFee;
        uint256 rBurn;
        uint256 rSwapping;
        uint256 rStaking;
        uint256 rUnstaking;
        uint256 rLiquidity;
    }

    struct TValuesStruct {
        uint256 tTransferAmount;
        uint256 tFee;
        uint256 tBurn;
        uint256 tSwapping;
        uint256 tStaking;
        uint256 tUnstaking;
        uint256 tLiquidity;
    }

    struct ValuesStruct {
        uint256 rAmount;
        uint256 rTransferAmount;
        uint256 rFee;
        uint256 rBurn;
        uint256 rSwapping;
        uint256 rStaking;
        uint256 rUnstaking;
        uint256 rLiquidity;
        uint256 tTransferAmount;
        uint256 tFee;
        uint256 tBurn;
        uint256 tSwapping;
        uint256 tStaking;
        uint256 tUnstaking;
        uint256 tLiquidity;
    }

    mapping(address => uint256) private _rOwned;
    mapping(address => uint256) private _tOwned;
    mapping(address => mapping(address => uint256)) private _allowances;

    mapping(address => bool) private _isExcludedFromFee;

    mapping(address => bool) private _isExcluded;
    address[] private _excluded;
    
    string private _name = "HexaFinity";
    string private _symbol = "HEXA";
    uint8 private _decimals = 18;
    uint256 private constant MAX = ~uint256(0);
    uint256 private _tTotal = 6 * 10 ** 11 * 10 ** uint256(_decimals);
    uint256 private _rTotal = (MAX - (MAX % _tTotal));
    uint256 private _tFeeTotal;
    uint256 private _tBurnTotal;

    uint256 public _taxFee = 120;
    uint256 private _previousTaxFee = _taxFee;

    uint256 public _burnFee = 10;
    uint256 private _previousBurnFee = _burnFee;

    uint256 public _swappingFee = 20;
    uint256 private _previousSwappingFee = _swappingFee;

    uint256 public _stakingFee = 5;
    uint256 private _previousStakingFee = _stakingFee;

    uint256 public _unstakingFee = 20;
    uint256 private _previousUnstakingFee = _unstakingFee;

    uint256 public _liquidityFee = 200;
    uint256 private _previousLiquidityFee = _liquidityFee;

    uint256 public constant DENOMINATOR = 10000;

    address public taxReceiveAddress = 0xae938974e7cee661c83c2e1c58de0243a17a587c;

    IUniswapV2Router02 public immutable uniswapV2Router;
    address public immutable uniswapV2Pair;

    bool inSwapAndLiquify;
    bool public swapAndLiquifyEnabled = false;

    uint256 public _maxTxAmount = 40 * 10 ** 6 * 10 ** uint256(_decimals);
    uint256 public _numTokensSellToAddToLiquidity = 40 * 10 ** 6 * 10 ** uint256(_decimals);

    modifier lockTheSwap {
        inSwapAndLiquify = true;
        _;
        inSwapAndLiquify = false;
    }

    constructor(address _routerAddress) {
        _rOwned[_msgSender()] = _rTotal;

        IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(_routerAddress); // PCS V2
        // Create a uniswap pair for this new token
        uniswapV2Pair = IUniswapV2Factory(_uniswapV2Router.factory()).createPair(address(this), _uniswapV2Router.WETH());

        // set the rest of the contract variables
        uniswapV2Router = _uniswapV2Router;

        //exclude owner and this contract from fee
        _isExcludedFromFee[owner()] = true;
        _isExcludedFromFee[address(this)] = true;
        _isExcludedFromFee[_routerAddress] = true;

        emit Transfer(address(0), _msgSender(), _tTotal);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view override returns (uint256) {
        return _tTotal;
    }

    function balanceOf(address account) public view override returns (uint256) {
        if (_isExcluded[account]) return _tOwned[account];
        return tokenFromReflection(_rOwned[account]);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()] - amount);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] - subtractedValue);
        return true;
    }

    function isExcludedFromReward(address account) public view returns (bool) {
        return _isExcluded[account];
    }

    function totalFees() public view returns (uint256) {
        return _tFeeTotal;
    }

    function totalBurn() public view returns (uint256) {
        return _tBurnTotal;
    }

    function deliver(uint256 tAmount) public {
        address sender = _msgSender();
        require(!_isExcluded[sender], "Excluded addresses cannot call this function");
        uint256 rAmount = tAmount * _getRate();
        _rOwned[sender] -= rAmount;
        _rTotal -= rAmount;
        _tFeeTotal += tAmount;
    }

    function reflectionFromToken(uint256 tAmount, bool deductTransferFee) public view returns (uint256) {
        require(tAmount <= _tTotal, "Amount must be less than supply");
        if (!deductTransferFee) {
            uint256 rAmount = tAmount * _getRate();
            return rAmount;
        } else {
            uint256 rTransferAmount = _getValues(tAmount).rTransferAmount;
            return rTransferAmount;
        }
    }

    function tokenFromReflection(uint256 rAmount) public view returns (uint256) {
        require(rAmount <= _rTotal, "Amount must be less than total reflections");
        uint256 currentRate = _getRate();
        return rAmount / currentRate;
    }

    function excludeFromReward(address account) public onlyOwner() {
        require(account != 0x10ED43C718714eb63d5aA57B78B54704E256024E, 'We can not exclude Pancake router.');
        require(!_isExcluded[account], "Account is already excluded");
        require(_excluded.length < 50, "Excluded list is too long");
        if (_rOwned[account] > 0) {
            _tOwned[account] = tokenFromReflection(_rOwned[account]);
        }
        _isExcluded[account] = true;
        _excluded.push(account);
    }

    function includeInReward(address account) external onlyOwner() {
        require(_isExcluded[account], "Account is already excluded");
        for (uint256 i = 0; i < _excluded.length; i++) {
            if (_excluded[i] == account) {
                _excluded[i] = _excluded[_excluded.length - 1];
                _tOwned[account] = 0;
                _isExcluded[account] = false;
                _excluded.pop();
                break;
            }
        }
    }

    //to recieve ETH from uniswapV2Router when swaping
    receive() external payable {}

    function _distributeFee(uint256 rFee, uint256 rBurn, uint256 tFee, uint256 tBurn) private {
        _rTotal -= (rFee + rBurn);
        _tFeeTotal += tFee;
        _tTotal -= tBurn;
        _tBurnTotal += tBurn;

        _rOwned[taxReceiveAddress] += rFee;
        if (_isExcluded[taxReceiveAddress]) {
            _tOwned[taxReceiveAddress] += tFee;
        }
    }

    function _getValues(uint256 tAmount) private view returns (ValuesStruct memory) {
        TValuesStruct memory tvs = _getTValues(tAmount);
        RValuesStruct memory rvs = _getRValues(tAmount, tvs.tFee, tvs.tBurn, tvs.tSwapping, tvs.tStaking, tvs.tUnstaking, tvs.tLiquidity, _getRate());

        return ValuesStruct(
            rvs.rAmount,
            rvs.rTransferAmount,
            rvs.rFee,
            rvs.rBurn,
            rvs.rSwapping,
            rvs.rStaking,
            rvs.rUnstaking,
            rvs.rLiquidity,
            tvs.tTransferAmount,
            tvs.tFee,
            tvs.tBurn,
            tvs.tSwapping,
            tvs.tStaking,
            tvs.tUnstaking,
            tvs.tLiquidity
        );
    }

    function _getTValues(uint256 tAmount) private view returns (TValuesStruct memory) {
        uint256 tFee = calculateTaxFee(tAmount);
        uint256 tBurn = calculateBurnFee(tAmount);
        uint256 tSwapping = calculateSwappingFee(tAmount);
        uint256 tStaking = calculateStakingFee(tAmount);
        uint256 tUnstaking = calculateUnstakingFee(tAmount);
        uint256 tLiquidity = calculateLiquidityFee(tAmount);
        uint256 tTransferAmount = tAmount - tFee - tBurn - tSwapping - tStaking - tUnstaking - tLiquidity;
        return TValuesStruct(tTransferAmount, tFee, tBurn, tSwapping, tStaking, tUnstaking, tLiquidity);
    }

    function _getRValues(uint256 _tAmount, uint256 _tFee, uint256 _tBurn, uint256 _tSwapping, uint256 _tStaking, uint256 _tUnstaking, uint256 _tLiquidity, uint256 _currentRate) private view returns (RValuesStruct memory) {
        uint256 _rAmount = _tAmount * _currentRate;
        uint256 _rFee = _tFee * _currentRate;
        uint256 _rBurn = _tBurn * _currentRate;
        uint256 _rSwapping = _tSwapping * _currentRate;
        uint256 _rStaking = _tStaking * _currentRate;
        uint256 _rUnstaking = _tUnstaking * _currentRate;
        uint256 _rLiquidity = _tLiquidity * _currentRate;
        uint256 _rTransferAmount = _rAmount - _rFee - _rLiquidity - _rBurn - _rSwapping - _rStaking - _rUnstaking;
        return RValuesStruct(_rAmount, _rTransferAmount, _rFee, _rBurn, _rSwapping, _rStaking, _rUnstaking, _rLiquidity);
    }

    function _getRate() private view returns (uint256) {
        (uint256 rSupply, uint256 tSupply) = _getCurrentSupply();
        return rSupply / tSupply;
    }

    function _getCurrentSupply() private view returns (uint256, uint256) {
        uint256 rSupply = _rTotal;
        uint256 tSupply = _tTotal;
        for (uint256 i = 0; i < _excluded.length; i++) {
            if (_rOwned[_excluded[i]] > rSupply || _tOwned[_excluded[i]] > tSupply) return (_rTotal, _tTotal);
            rSupply = rSupply - _rOwned[_excluded[i]];
            tSupply = tSupply - _tOwned[_excluded[i]];
        }
        if (rSupply < _rTotal / _tTotal) return (_rTotal, _tTotal);
        return (rSupply, tSupply);
    }

    function _takeLiquidity(uint256 rLiquidity, uint256 tLiquidity) private {
        _rOwned[address(this)] += rLiquidity;
        if (_isExcluded[address(this)])
            _tOwned[address(this)] += tLiquidity;
    }

    function calculateTaxFee(uint256 _amount) private view returns (uint256) {
        return _amount * _taxFee / DENOMINATOR;
    }

    function calculateBurnFee(uint256 _amount) private view returns (uint256) {
        return _amount * _burnFee / DENOMINATOR;
    }

    function calculateSwappingFee(uint256 _amount) private view returns (uint256) {
        return _amount * _swappingFee / DENOMINATOR;
    }
    
    function calculateStakingFee(uint256 _amount) private view returns (uint256) {
        return _amount * _stakingFee / DENOMINATOR;
    }

    function calculateUnstakingFee(uint256 _amount) private view returns (uint256) {
        return _amount * _unstakingFee / DENOMINATOR;
    }

    function calculateLiquidityFee(uint256 _amount) private view returns (uint256) {
        return _amount * _liquidityFee / DENOMINATOR;
    }

    function removeAllFee() private {
        _previousTaxFee = _taxFee;
        _previousBurnFee = _burnFee;
        _previousLiquidityFee = _liquidityFee;
        _previousSwappingFee = _swappingFee;
        _previousStakingFee = _stakingFee;
        _previousUnstakingFee = _unstakingFee;
        _taxFee = 0;
        _liquidityFee = 0;
        _burnFee = 0;
        _swappingFee = 0;
        _stakingFee = 0;
        _unstakingFee = 0;
    }

    function restoreAllFee() private {
        _taxFee = _previousTaxFee;
        _liquidityFee = _previousLiquidityFee;
        _burnFee = _previousBurnFee;
        _swappingFee = _previousSwappingFee;
        _stakingFee = _previousStakingFee;
        _unstakingFee = _previousUnstakingFee;

    }

    function isExcludedFromFee(address account) public view returns (bool) {
        return _isExcludedFromFee[account];
    }

    function _approve(address owner, address spender, uint256 amount) private {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) private {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        require(amount > 0, "Transfer amount must be greater than zero");

        // is the token balance of this contract address over the min number of
        // tokens that we need to initiate a swap + liquidity lock?
        // also, don't get caught in a circular liquidity event.
        // also, don't swap & liquify if sender is uniswap pair.
        uint256 contractTokenBalance = balanceOf(address(this));
        bool overMinTokenBalance = contractTokenBalance >= _numTokensSellToAddToLiquidity;
        if (
            overMinTokenBalance &&
            !inSwapAndLiquify &&
            from != uniswapV2Pair &&
            swapAndLiquifyEnabled
        ) {
            contractTokenBalance = _numTokensSellToAddToLiquidity;
            //add liquidity
            swapAndLiquify(contractTokenBalance);
        }

        //transfer amount, it will take tax, burn, liquidity fee
        _tokenTransfer(from, to, amount);
    }

    function swapAndLiquify(uint256 contractTokenBalance) private lockTheSwap {
        // split the contract balance into halves
        uint256 half = contractTokenBalance / 2;
        uint256 otherHalf = contractTokenBalance - half;

        // capture the contract's current ETH balance.
        // this is so that we can capture exactly the amount of ETH that the
        // swap creates, and not make the liquidity event include any ETH that
        // has been manually sent to the contract
        uint256 initialBalance = address(this).balance;

        // swap tokens for ETH
        swapTokensForEth(half);
        // <- this breaks the ETH -> HATE swap when swap+liquify is triggered

        // how much ETH did we just swap into?
        uint256 newBalance = address(this).balance - initialBalance;

        // add liquidity to uniswap
        addLiquidity(otherHalf, newBalance);

        emit SwapAndLiquify(half, newBalance, otherHalf);
    }

    function swapTokensForEth(uint256 tokenAmount) private {
        // generate the uniswap pair path of token -> weth
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = uniswapV2Router.WETH();

        _approve(address(this), address(uniswapV2Router), tokenAmount);

        // make the swap
        uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0, // accept any amount of ETH
            path,
            address(this),
            block.timestamp
        );
    }

    function addLiquidity(uint256 tokenAmount, uint256 ethAmount) private {
        // approve token transfer to cover all possible scenarios
        _approve(address(this), address(uniswapV2Router), tokenAmount);

        // add the liquidity
        uniswapV2Router.addLiquidityETH{value : ethAmount}(
            address(this),
            tokenAmount,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            owner(),
            block.timestamp
        );
    }

    //this method is responsible for taking all fee, if takeFee is true
    function _tokenTransfer(address sender, address recipient, uint256 amount) private {
        if (_isExcludedFromFee[sender] || _isExcludedFromFee[recipient]) {
            removeAllFee();
        }
        else {
            require(amount <= _maxTxAmount, "Transfer amount exceeds the maxTxAmount.");
        }

        ValuesStruct memory vs = _getValues(amount);
        _takeLiquidity(vs.rLiquidity, vs.tLiquidity);
        _distributeFee(vs.rFee, vs.rBurn, vs.tFee, vs.tBurn);

        if (_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferFromExcluded(sender, recipient, amount, vs);
        } else if (!_isExcluded[sender] && _isExcluded[recipient]) {
            _transferToExcluded(sender, recipient, vs);
        } else if (!_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferStandard(sender, recipient, vs);
        } else if (_isExcluded[sender] && _isExcluded[recipient]) {
            _transferBothExcluded(sender, recipient, amount, vs);
        }

        if (_isExcludedFromFee[sender] || _isExcludedFromFee[recipient])
            restoreAllFee();
    }

    function _transferStandard(address sender, address recipient, ValuesStruct memory vs) private {
        _rOwned[sender] -= vs.rAmount;
        _rOwned[recipient] += vs.rTransferAmount;
        emit Transfer(sender, recipient, vs.tTransferAmount);
    }

    function _transferToExcluded(address sender, address recipient, ValuesStruct memory vs) private {
        _rOwned[sender] -= vs.rAmount;
        _tOwned[recipient] += vs.tTransferAmount;
        _rOwned[recipient] += vs.rTransferAmount;
        emit Transfer(sender, recipient, vs.tTransferAmount);
    }

    function _transferFromExcluded(address sender, address recipient, uint256 tAmount, ValuesStruct memory vs) private {
        _tOwned[sender] -= tAmount;
        _rOwned[sender] -= vs.rAmount;
        _rOwned[recipient] += vs.rTransferAmount;
        emit Transfer(sender, recipient, vs.tTransferAmount);
    }

    function _transferBothExcluded(address sender, address recipient, uint256 tAmount, ValuesStruct memory vs) private {
        _tOwned[sender] -= tAmount;
        _rOwned[sender] -= vs.rAmount;
        _tOwned[recipient] += vs.tTransferAmount;
        _rOwned[recipient] += vs.rTransferAmount;
        emit Transfer(sender, recipient, vs.tTransferAmount);
    }

    function excludeFromFee(address account) public onlyOwner {
        _isExcludedFromFee[account] = true;
    }

    function includeInFee(address account) public onlyOwner {
        _isExcludedFromFee[account] = false;
    }

    //Call this function after finalizing the presale
    function enableAllFees() external onlyOwner() {
        restoreAllFee();
        _previousTaxFee = _taxFee;
        _previousBurnFee = _taxFee;
        _previousSwappingFee = _swappingFee;
        _previousStakingFee = _stakingFee;
        _previousUnstakingFee = _unstakingFee;
        _previousLiquidityFee = _liquidityFee;
        setSwapAndLiquifyEnabled(true);
    }

    function disableAllFees() external onlyOwner() {
        removeAllFee();
        setSwapAndLiquifyEnabled(false);
    }

    function setTaxReceiveAddress(address newWallet) external onlyOwner {
        taxReceiveAddress = newWallet;
    }

    function setMaxTxPercent(uint256 maxTxAmount) external onlyOwner {
        _maxTxAmount = maxTxAmount * 10 ** 18;
    }

    function setNumTokensSellToAddToLiquidity(uint256 numTokensSellToAddToLiquidity) external onlyOwner {
        _numTokensSellToAddToLiquidity = numTokensSellToAddToLiquidity * 10 ** 18;
    }

    function setSwapAndLiquifyEnabled(bool _enabled) public onlyOwner {
        swapAndLiquifyEnabled = _enabled;
        emit SwapAndLiquifyEnabledUpdated(_enabled);
    }

    function setTaxFee(uint256 taxFee) external onlyOwner {
        _taxFee = taxFee;
    }

    function setBurnFee(uint256 burnFee) external onlyOwner {
        _burnFee = burnFee;
    }

    function setSwappingFee(uint256 swappingFee) external onlyOwner {
        _swappingFee = swappingFee;
    }

    function setStakingFee(uint256 stakingFee) external onlyOwner {
        _stakingFee = stakingFee;
    }

    function setUnstakingFee(uint256 unstakingFee) external onlyOwner {
        _unstakingFee = unstakingFee;
    }

    function setLiquidityFee(uint256 liquidityFee) external onlyOwner {
        _liquidityFee = liquidityFee;
    }


    event MinTokensBeforeSwapUpdated(uint256 minTokensBeforeSwap);
    event SwapAndLiquifyEnabledUpdated(bool enabled);
    event SwapAndLiquify(
        uint256 tokensSwapped,
        uint256 ethReceived,
        uint256 tokensIntoLiqudity
    );
    event UpdateSellFeeMultiplier(uint256 oldSellFeeMultiplier, uint256 newSellFeeMultiplier);
}