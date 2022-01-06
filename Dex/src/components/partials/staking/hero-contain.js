import OwlCarousel from '../../../features/owl-carousel';

import { scrollToHandler } from '../../../utils';

const bannerSlider = {
    margin: 16,
    dots: false,
    lazyLoad: true,
    nav: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000
}

function HeroContain () {
    return (
        <div className="default-hero__container">
            <div className="default-hero__body">
                <h1 className="default-hero__title">Launchpools
                    <span>Hide<svg viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" style={{fill: "#1263f1"}}>
                            <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.7C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
                        </svg>
                    </span>
                </h1>
                <h2 className="default-hero__subtitle">Looking for a less resource-intensive alternative to mining? Use your BSW tokens to earn more tokens, for Free. <a href="https://docs.tally.org/education-hub/getting-passive-income-in-tally-launchpools" target="_blank" rel="noreferrer" style={{color: "#89c438"}}>Learn how it works</a></h2>
                <a href="#add-product">
                    <div className="btn-add" onClick={(e)=> {e.preventDefault(); scrollToHandler()}}>
                        <span>Add project</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#89c438"></path>
                            <path d="M8 5L8 8M8 8L5 8M8 8L8 11M8 8L11 8" stroke="white" strokeWidth="1.4" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </a>
            </div>

            <div className="default-hero__carousel">
                <OwlCarousel adClass='owl-theme' options={ bannerSlider }>
                    <a className="position-relative" href="/referral">
                        <img src={"/images/banners/defHeroReferral.2f666bca.jpg"} alt="referral" />
                    </a>
                    <a className="position-relative" href="/pools/stake_tokens">
                        <img src={"/images/banners/doubleEternal.03a650b1.jpg"} alt="eternal" />
                    </a>
                    <a className="position-relative" href="/lottery">
                        <img src={"/images/banners/defHeroPool.da253bd4.png"} alt="pool" />
                    </a>
                    <a className="position-relative" href="https://exchange.tally.org">
                        <img src={"/images/banners/defHeroSwap.f7af3004.jpg"} alt="swap" />
                    </a>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default HeroContain;