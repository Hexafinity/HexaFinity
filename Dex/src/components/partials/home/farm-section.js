import OwlCarousel from '../../../features/owl-carousel';
import { mediaSlider } from '../../../data/slider';

function FarmSection (props) {
    const { farms, pools, info } = props;

    return (
        <>
            <div className="container">
                <div className="farm-section d-flex justify-content-between flex-md-column">
                    <div className="farm-column">
                        <div className="farm-header d-flex align-items-center justify-content-between">
                            <span className="farm-title">Earn BSW + Fees in Farms</span>
                            <a className="farm-link" href="/farms">
                                <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                                </svg>
                            </a>
                        </div>
                        
                        <div className="farm-body">
                            {
                                farms.slice(0, 3).map((item, index) => {
                                    return (
                                        <div className="farm-item" key={'farm-card' + index}>
                                            <div className="farm-item-image">
                                                <img className="first" src={item.first} alt="farm-svg"/>
                                                <img className="last" src={item.last} alt="farm-svg"/>
                                            </div>
                                            <span className="farm-item-title">{item.name}</span>
                                            <div className="farm-item-info">
                                                <div className="d-flex align-items-center">
                                                    <span className="farm-item-tip">APY</span>
                                                    <button className="farm-item-icon" scale="sm" style={{height: "20px", margin: "0"}}>
                                                        <svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
                                                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                                            <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                                            <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                                            <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                                            <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                                            <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="farm-item-bottom">
                                                    <span className="farm-item-price">{item.price}%</span>
                                                    <div className="position-relative">
                                                        <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                                        </svg>
                                                        <div className="farm-item-tooltip">APY is based on your one-year income if Harvest and Compound are made once a day. Provided APY calculations depend on current APR rates.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="farm-item-link" href="/farms">
                                                <button target="_blank" rel="noreferrer noopener" scale="sm">Start Farm</button>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="farm-column">
                        <div className="farm-header d-flex align-items-center justify-content-between">
                            <span className="farm-title">Launchpools</span>
                            <a className="farm-link" href="/pools">
                                <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pool-body">
                            {
                                pools.slice(0, 2).map((item, index) => {
                                    return (
                                        <div className="pool-item" key={'pool-item' + index}>
                                            <div className="pool-item-image">
                                                <img src={item.first} className="first" alt="launch-svg"/>
                                                <img src={item.last} className="last" alt="launch-svg"/>
                                            </div>
                                            <div className="pool-item-header">
                                                <span className="pool-item-name">{item.name}</span>
                                                <span className="pool-item-surname">{item.surname}</span>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="farm-item-info">
                                                <div className="d-flex align-items-center">
                                                    <span className="farm-item-tip">APY</span>
                                                    <button className="farm-item-icon" scale="sm" style={{ height: "20px", margin: "0px" }}>
                                                        <svg viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
                                                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                                            <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                                            <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                                            <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                                            <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                                            <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <span className="farm-item-price">{item.price}%</span>
                                            </div>
                                            <a className="farm-item-link" href="/pools">
                                                <button scale="sm">Stake BSW</button>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="benefit-section">
                    <span className="title">Our Benefits</span>
                    <OwlCarousel adClass='owl-theme off-carousel carousel-equal-height' options={ mediaSlider }>
                        <div className="benefit-item">
                            <img src={"/images/media/rupor.33e79261.png"} alt="media" />
                            <span className="title">3-type Referral System</span>
                            <span className="subtitle">Invite your friends and earn a certain commission reward every time they make a swap on Hexa and 5% from their income in Farms &amp; Launchpools.</span>
                        </div>
                        <div className="benefit-item">
                            <img src={"/images/media/percent.b6cf026c.png"} alt="media" />
                            <span className="title">The Lowest Exchange Fee</span>
                            <span className="subtitle">Safely buy and sell your cryptocurrency with the lowest exchange fee in the DeFi space.</span>
                        </div>
                        <div className="benefit-item">
                            <img src={"/images/media/percent-arrow.dde07d73.png"} alt="media" />
                            <span className="title">Trade Fee Reimbursement</span>
                            <span className="subtitle">Make a swap on Hexa at no cost. Up to 100% of the trading fee returned in BSW tokens.</span>
                        </div>
                        <div className="benefit-item">
                            <img src={"/images/media/cup.0726f607.png"} alt="media" />
                            <span className="title">Competitions</span>
                            <span className="subtitle">Participate in the regular Hexa trading competitions and win exclusive prizes.</span>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="info-section">
                    <div className="info-item">
                        <img src={"/images/category/1.png"} alt="category"/>
                        <div className="d-flex info-title">
                            <p color="textSubtle" className="text-dark">Total Volume</p>
                        </div>
                        <p className="info-price">${info[0]}B</p>
                    </div>

                    <div className="info-item">
                        <img src={"/images/category/2.png"} alt="category"/>
                        <div className="d-flex info-title">
                            <p color="textSubtle" className="text-dark">Total Volume</p>
                        </div>
                        <p className="info-price">${info[1]}M</p>
                    </div>

                    <div className="info-item">
                        <img src={"/images/category/3.png"} alt="category"/>
                        <div className="d-flex info-title">
                            <p color="textSubtle" className="text-dark">Active users</p>
                        </div>
                        <p className="info-price">{info[2]}K</p>
                    </div>

                    <div className="info-item">
                        <img src={"/images/category/4.png"} alt="category"/>
                        <div className="d-flex info-title">
                            <p color="textSubtle" className="text-dark">Trade Fee Saved</p>
                        </div>
                        <p className="info-price">${info[3]}M</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FarmSection;