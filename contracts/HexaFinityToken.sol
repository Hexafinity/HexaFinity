// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HexaFinityToken is ERC20 {
    address private owner;

    // Initialises smart contract with supply of tokens going to the address that
    // deployed the contract.
    constructor() ERC20("HexaFinity", "HEXA") {
        _mint(msg.sender, 600000000000 * 10 ** 18);
        owner = msg.sender;
    }

    function mint(address to, uint amount) external {
        require(msg.sender == owner, "only admin");
        _mint(to, amount);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}
