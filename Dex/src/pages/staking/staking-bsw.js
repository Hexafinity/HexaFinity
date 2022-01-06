import HeroContain from '../../components/partials/staking/hero-contain';
import Footer from '../../components/common/footer';
import LaunchSection from '../../components/partials/staking/launch-section';
import ChooseSection from '../../components/partials/staking/choose-section';
import StakingContent from '../../components/partials/staking/staking-content';

import data from '../../data/data.json';

function StakingBSW (props) {
    const { isActive, isToken } = props;

    return (
        <div className="page-content">
            <div>
                <div className="default-hero">
                    <HeroContain />

                    <div className="container d-flex">
                        <a className={`nav-item ${isToken ? '' : 'active'}`} href="/pools/stake_bsw">Stake BSW</a>
                        <a className={`nav-item ${isToken ? 'active' : ''}`} href="/pools/stake_tokens" aria-current="page">Stake Tokens</a>
                    </div>
                </div>
                
                <StakingContent cards={data.cards} isActive={isActive} isToken={isToken} />

                <LaunchSection />

                <ChooseSection />
            </div>

            <Footer footerInfo={data.footerInfo} />
        </div>
    )
}

export default StakingBSW;