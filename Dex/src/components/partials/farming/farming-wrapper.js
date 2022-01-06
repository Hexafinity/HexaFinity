function FarmingWrapper (props) {
    const { farms } = props;

    function detailHandler(e) {
        e.preventDefault();
        e.target.closest('.farm-card').nextSibling.classList.toggle('show');
        e.target.closest('.farm-card').querySelector('.details').classList.toggle('show');
    }
    
    return (
        <div className="farms-wrapper position-relative overflow-visible">
            {
                farms.map((farm, index) => {
                    return (
                        <div key={index}>
                            <div className="farm-card" onClick={(e)=>{detailHandler(e)}} key={'farm-card-' + index}>
                                <div className="badge-wrap d-flex align-items-center">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className={`badge badge-${farm.badge.toLowerCase()}`}>
                                            <span>{farm.badge}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="farm d-flex align-items-center">
                                    <div className="farm-icon">
                                        <div>
                                            <img src={farm.img[0]} width="24" height="24" alt="icon" />
                                        </div>
                                        <div>
                                            <img src={farm.img[1]}  width="24" height="24" alt="icon" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="farm-title">{farm.name}</span>
                                    </div>
                                </div>
                                <div className="apy">
                                    <div>APY</div>
                                    <div className="d-flex align-items-center">
                                        <span>{farm.apy}%</span>
                                        <div className="position-relative trigger mb-0">
                                            <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                            </svg>
                                            <div className="apy-popup">APY is based on your one-year income if Harvest and Compound are made once a day. Provided APY calculations depend on current APR rates.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="apr">
                                    <div>APR</div>
                                    <div className="d-flex align-items-center">
                                        <span>{farm.apr}%</span>
                                        <button className="position-relative">
                                            <svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL gOLtqz">
                                                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                                <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                                <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                                <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                                <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                                <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="liquidity">
                                    <div>Liquidity</div>
                                    <div className="d-flex align-items-center">
                                        <span>${farm.liquidity}</span>
                                        <div className="position-relative trigger mb-0">
                                            <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL hwtrnV">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                            </svg>
                                            <div className="liquidity-popup">The total value of the funds in this farm’s liquidity pool</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="earned">
                                    <div>Earned</div>
                                    {farm.earned ? <span>{farm.earned}</span> : <div className="d-flex align-items-center">
                                        <div></div>
                                    </div>}
                                    
                                </div>
                                <div className="details d-flex align-items-center">
                                    <span className="label">Details</span>
                                    <svg viewBox="0 0 24 24" className="fill-secondary detail" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path
                                    ></svg>
                                </div>
                                <div className="info position-relative d-flex">
                                    <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path>
                                    </svg>
                                    <div className="info-popup">
                                        <div>
                                            <span>Multiplier</span>
                                            <span>7.1X</span>
                                        </div>
                                        <a href="https://bscscan.com/address/0x2b30c317cedfb554ec525f85e79538d59970beb0" target="_blank">
                                            <span>View Contract</span>
                                            <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-secondary">
                                                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="farm-card-show" key={'farm-card-show-' + index}>
                                <div className="apr">
                                    <div>APR</div>
                                    <div className="d-flex align-items-center">
                                        <span>{farm.apr}%</span>
                                        <button className="position-relative">
                                            <svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL gOLtqz">
                                                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                                <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                                <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                                <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                                <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                                <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="liquidity">
                                    <div>Liquidity</div>
                                    <div className="d-flex align-items-center">
                                        <span className="sc-giYglK cbnRTE">${farm.liquidity}</span>
                                        <div className="position-relative trigger mb-0">
                                            <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL hwtrnV">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                            </svg>
                                            <div className="liquidity-popup">The total value of the funds in this farm’s liquidity pool</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange">
                                    <div className="exchange-left">
                                        <a href="https://exchange.tally.org/#/add/0x965F527D9159dCe6288a2219DB51fc6Eef120dD1/0x55d398326f99059ff775485246999027b3197955" scale="md">Get LP</a>
                                        <div>
                                            <span>Available LP</span>
                                            <span>{farm.lp} LP</span>
                                            <span>${farm.lpPrice.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</span>
                                        </div>
                                        <picture className="icon-arrow">
                                            <img src={"/images/arrow-right.svg"} alt="icon-arrow" />
                                            <img src={"/images/arrow-down.svg" }alt="icon-arrow" />
                                        </picture>
                                    </div>
                                    <div className="exchange-center">
                                        <div>
                                            <button style={{width: "100%"}}>Unlock Wallet</button>
                                        </div>
                                        <picture className="icon-arrow">
                                            <img src={"/images/arrow-right.svg"} alt="icon-arrow" />
                                            <img src={"/images/arrow-down.svg" }alt="icon-arrow" />
                                        </picture>
                                    </div>
                                    <div className="exchange-right harvest">
                                        <button className="tally-button--disabled" disabled="" scale="md">Harvest</button>
                                        <div className="sc-gtPNqn bdnEiC">
                                            <span className="sc-giYglK bVriCp">Earned</span>
                                            <div>{0} BSW</div>
                                            <div>${farm.lpPrice.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    )
}

export default FarmingWrapper;