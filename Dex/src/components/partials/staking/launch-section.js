function LaunchSection () {
    return (
        <div className="container">
            <div className="launch-section">
                <div className="launch-content">
                    <div id="add-product">
                        <span className="title">Launch Your Project on Hexa Now!</span>
                    </div>
                    <span className="description">Farms stimulate users to provide liquidity for your trading pair by distributing BSW tokens to your pair’s LP token holders. Launchpool is a platform where a project owner can distribute tokens to BSC users who stake BSW tokens in the pool. When a project applies for Hexa Launchpool we can also create a new farming pair (subject to discussion).</span>
                    <span className="description">Hexa Launchpool and Farms are platforms that help project teams promote their token and get exposure to thousands of active Hexa users across the globe. We look for strong teams with clear and innovative vision in the crypto space. If you think you are one of the projects, do not wait any longer and apply below.</span>
                    <a className="link" href="https://forms.gle/V8sQfCi5aBesL2ya8" target="_blank" scale="md">Apply to Launch</a>
                </div>
                <div className="launch-image">
                    <img src={"/images/pools/topImg.png"} alt="launch" />
                </div>
            </div>
        </div>
    )
}

export default LaunchSection;