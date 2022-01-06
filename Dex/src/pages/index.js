import BannerSection from '../components/partials/home/banner-section';
import RotateSection from '../components/partials/home/rotate-section';
import FarmSection from '../components/partials/home/farm-section';
import ReviewSection from '../components/partials/home/review-section';
import Footer from '../components/common/footer';

import data from '../data/data.json';

function Index () {
    var currencyFormatter = require('currency-formatter');
    return (
        <div className="page-content">
            <div className="intro-section">
                <div className="container">
                    <div className="intro-top">
                        <div className="intro-top-content text-center">
                            <h2 color="text" className="title"><img src={'/images/logo/logo2.png'} alt="icon" className="logo" />Hexa <span>Exchange</span></h2>
                            <span color="textSubtle" className="subtitle">A decentralised platfrom for token swaps, staking, yield farming and auto compounding.</span>
                            <span className="subtitle">We aim to provide <b>competitive</b> fees.</span>
                        </div>
                    </div>

                    <div className="intro-middle">
                        <div className="intro-middle-left">
                            <div className="featured-item">
                                <img src={'/images/arrow1.svg'} alt="icon" className="featured-image" />
                                <div>
                                    <span className="featured-title">
                                        The Lowest Trade Fee in the DeFi Space
                                    </span>
                                    <span className="featured-subtitle">0.1%</span>
                                </div>
                            </div>
                            <div className="featured-item">
                                <img src={'/images/arrow2.svg'} alt="icon" className="featured-image" />
                                <div>
                                    <span className="featured-title">
                                        Exchange Fee Reimbursement
                                    </span>
                                    <span className="featured-subtitle">up to 100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="intro-middle-right">
                            <div className="d-flex align-items-center">
                                <img src={'/images/arrow3.svg'} className="featured-image" alt="rotating svg"/>
                                <div>
                                    <span color="text" className="featured-title">Total Value Locked</span>
                                    <span color="contrast" className="featured-subtitle">{
                                        currencyFormatter.format(data.total[0], {
                                            symbol: '$',
                                            decimal: '.',
                                            thousand: ' ',
                                            precision: 0,
                                            format: '%s%v'
                                          })
                                    }</span>
                                </div>
                            </div>
                            <div className="position-relative pl-8 divider">
                                <span color="text" className="featured-title">Total Trading Volume</span>
                                <span color="contrast" className="featured-subtitle">{
                                        currencyFormatter.format(data.total[1], {
                                            symbol: '$',
                                            decimal: '.',
                                            thousand: ' ',
                                            precision: 0,
                                            format: '%s%v'
                                          })
                                    }</span>
                            </div>
                        </div>
                    </div>

                    <RotateSection content={data.content} />
                </div>
            </div>

            <div className="bg-primary">
                <BannerSection />

                <FarmSection farms={data.farmsLaunch} pools={data.pools} info={data.info}/>

                <ReviewSection />
            </div>

            <Footer footerInfo={data.footerInfo} />
        </div>
    )
}

export default Index;