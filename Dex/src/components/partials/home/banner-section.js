import OwlCarousel from '../../../features/owl-carousel';
import { bannerSlider } from '../../../data/slider';

function BannerSection () {
    return (
        <div className="banner-section">
            <OwlCarousel adClass='owl-theme' options={ bannerSlider }>
                <div className='item'>
                    <img src={'images/banners/doubleEternal.jpg'} alt="banner" />
                </div>
                <div className='item'>
                    <img src={'images/banners/farmPairs.jpg'} alt="banner" />
                </div>
                <div className='item'>
                    <img src={'images/banners/market.jpg'} alt="banner" />
                </div>
                <div className='item'>
                    <img src={'images/banners/gameFi.jpg'} alt="banner" />
                </div>
                <div className='item'>
                    <img src={'images/banners/nftEarn.jpg'} alt="banner" />
                </div>
                <div className='item'>
                    <img src={'images/banners/binanceLabs.jpg'} alt="banner" />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default BannerSection;