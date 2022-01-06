function CardWrapper (props) {
    const { cards } = props;

    function detailHandler(e) {
        e.preventDefault();
        e.target.closest('.pool-card__footer').classList.toggle('show');
    }
    
    return (
        <div className="cards-wrapper">
            {
                cards.map((product, index) => {
                    return (
                        <div className="pool-card" key={`card-${index}}`}>
                            <div className="pool-card-head">
                                {
                                    product.max !== 'unlimited' ?
                                    <img src={"/images/poolBadge/BSW.png"} alt="" /> : ''
                                }
                                <div className="pool-card-head__pair">
                                    <img src={product.img[0]} alt="BSW" className="pool-card-head__pair__logo"/>
                                    <img src={product.img[1]} alt="BSW" className="pool-card-head__pair__logo-pair" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="pool-card-head__label">{product.name}</span>
                                    {
                                        product.isNotiOne ?
                                            <div className="d-flex align-items-center notification position-relative">
                                                <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-primary" style={{marginLeft: "5px"}}>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                </svg>
                                                <div className="card-notification">
                                                    <div>Any BSW tokens you stake in this pool will be automatically harvested and compounded for you every 5 minutes.</div>
                                                </div>
                                            </div> : ''
                                    }
                                    {
                                        product.max !== 'unlimited' ? <div className="pool-card-head__label2">Max {product.max}</div> : ''
                                    }
                                </div>
                                <span className="pool-card-head__description">{product.category}</span>
                                <div className="d-flex align-items-center">
                                    <div className="position-relative notification-two">
                                        <span className="pool-card-head__apr">{product.apr ? "APY" : "APY"}</span>
                                        {
                                            product.isNotiTwo ?
                                                <div className="card-notification-two">
                                                    <div>This BSW pool is compounded automatically, so we show APY.</div>
                                                </div> : ''
                                        }
                                    </div>
                                    <div style={{marginLeft: "8px"}} className="card-percentage">
                                        <span>{product.percentage}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pool-card__body">
                                <button>Unlock Wallet</button>
                            </div>
                            <div className="pool-card__footer">
                                <div className="d-flex align-items-center justify-content-center">
                                    <button onClick={(e)=> {detailHandler(e)}} className="hide">
                                        Hide <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </button>
                                    <button onClick={(e)=> {detailHandler(e)}} className="detail">
                                        Details <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </button>
                                </div>
                                <div className="pool-card__details">
                                    <div className="pool-card-details" style={{paddingLeft: "24px", paddingRight: "24px"}}>
                                        <div className="pool-card-details__row">
                                            <span className="pool-card-details__label">Total stake</span>
                                            <span className="pool-card-details__dots"></span>
                                            <span className="pool-card-details__value">
                                                <span color="text">{product.totalStake}</span>
                                            </span>
                                        </div>
                                        {
                                            product.performanceFee ?
                                                <div className="pool-card-details__row">
                                                    <div className="pool-card-performance-fee d-flex align-items-center">
                                                        <span className="pool-card-details__label">Performance Fee</span>
                                                        <div className="notification-three position-relative">
                                                            <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-primary" style={{marginLeft: "5px"}}>
                                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                            </svg>
                                                            <div className="card-notification-three">
                                                                <div>Subtracted automatically from each yield harvest and burned once a week.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="pool-card-details__dots"></span>
                                                    <span className="pool-card-details__value">{product.performanceFee}%</span>
                                                </div> : ''
                                        }
                                        {
                                            product.endsOn ?
                                                <div className="pool-card-details__row">
                                                    <div className="pool-card-performance-fee d-flex align-items-center">
                                                        <span className="pool-card-details__label">Ends on</span>
                                                    </div>
                                                    <span className="pool-card-details__dots"></span>
                                                    <span className="pool-card-details__value">{product.endsOn} block</span>
                                                </div> : ''
                                        }
                                    </div>
                                    <div className="pool-card-contract">
                                        {
                                            product.isProjectSite ? 
                                                <a target="_blank" rel="noreferrer noopener" href="https://www.airnfts.com/" color="primary">
                                                    View project site<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL iGFfTp">
                                                        <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                                                    </svg>
                                                </a> : ''
                                        }

                                        <div className="d-flex align-items-center">
                                            <a target="_blank" rel="noreferrer noopener" href="https://bscscan.com/address/0x97A16ff6Fd63A46bf973671762a39f3780Cda73D" color="primary">
                                                View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL iGFfTp">
                                                    <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                                                </svg>
                                            </a>
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

export default CardWrapper;