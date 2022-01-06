import { useEffect } from 'react';

import { preloader } from '../../utils';

function PreLoader() {
    useEffect(()=> {
		preloader();
	}, []);
    
    return (
        <>
            <div className="preloader">
                <div className="progress"></div>
                <div className="d-flex align-items-center">
                    <img src={"/images/logo/logo2.png"} alt="logo" width="50" id="appear-preloader" style={{marginRight: "30px"}}/>
                    <img src={"/images/logo/logo3.png"} alt="logo" width="250" id="appear-preloader"/>
                </div>
            </div>
        </>
    )
}

export default PreLoader;