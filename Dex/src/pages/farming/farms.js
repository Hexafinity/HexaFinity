import FarmingContain from '../../components/partials/farming/farming-contain';
import Footer from '../../components/common/footer';
import LaunchSection from '../../components/partials/staking/launch-section';
import ChooseSection from '../../components/partials/staking/choose-section';
import FarmingContent from '../../components/partials/farming/farming-content';

import data from '../../data/data.json';

function Farms (props) {
    const { isLive } = props;

    return (
        <div className="page-content">
            <div>
                <div className="default-hero">
                    <FarmingContain />
                </div>
                
                <FarmingContent farms={data.farms} isLive={isLive} />

                <LaunchSection />

                <ChooseSection />
            </div>

            <Footer footerInfo={data.footerInfo} />
        </div>
    )
}

export default Farms;