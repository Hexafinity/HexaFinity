function ChooseSection () {
    return (
        <div className="choose-section">
            <div className="container">
                <span color="contrast" className="title">Why choose us?</span>
                <div className="choose-content">
                    <div className="choose-item">
                        <img src={"/images/pools/img1-min.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Global Exposure</span>
                            <span color="textSubtle" className="description">Get access to 120k+ Hexa users across the globe.</span>
                        </div>
                    </div>
                    <div className="choose-item">
                        <img src={"/images/pools/img2-min.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Liquidity</span>
                            <span color="textSubtle" className="description">Projects launched on Hexa Launchpool will be listed and have high trading liquidity.</span>
                        </div>
                    </div>
                    <div className="choose-item">
                        <img src={"/images/pools/img3-min.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Token Distribution</span>
                            <span color="textSubtle" className="description">Your token will be instantly distributed to a large user base that holds your token.</span>
                        </div>
                    </div>
                    <div className="choose-item">
                        <img src={"/images/pools/img4-min.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Trading Competition</span>
                            <span color="textSubtle" className="description">Hexa will organize a tournament dedicated to your project to maximize trading volume with your token. </span>
                        </div>
                    </div>
                    <div className="choose-item">
                        <img src={"/images/pools/img5.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Marketing Boost</span>
                            <span color="textSubtle" className="description">Your project will be promoted across all our social media platforms with an audience of over 170K+.</span>
                        </div>
                    </div>
                    <div className="choose-item">
                        <img src={"/images/pools/img6-min.png"} alt="pool-choose"/>
                        <div className="choose-content-box">
                            <span color="contrast" className="title">Growth Opportunities</span>
                            <span color="textSubtle" className="description">Your token might also be added to Hexa Farms with high APR.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSection;