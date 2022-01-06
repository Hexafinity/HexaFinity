import { useEffect, useState } from 'react';

import FarmingWrapper from './farming-wrapper';

function FarmingContent (props) {
    const { farms, isLive } = props;
    const [ category, setCategory ] = useState( true );
    const [ catValue, setCatValue ] = useState ( 'All' );
    const [ active, setActive ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ displayFarms, setDisplayFarms] = useState(farms);
    
    useEffect(()=> {
        let tmpFarms = [ ...farms ];
        
        tmpFarms = tmpFarms.filter(item=> {
            let flag = true;
            flag = flag && ( item.isLive === isLive );
            flag = flag && ( item.isActive === active );
            flag = flag && item.name.toLowerCase().includes( search.toLowerCase() )

            return flag;
        })

        if (catValue === "APR") {
            tmpFarms = tmpFarms.sort((itemA, itemB) => itemB.percentage - itemA.percentage)
        } else if (catValue === "Liquidity") {
            tmpFarms = tmpFarms.sort((itemA, itemB) => itemB.liquidity - itemA.liquidity )
        } else if (catValue === "Stable") {
            tmpFarms = tmpFarms.sort((itemA, itemB) => itemB.stable - itemA.stable )
        } if (catValue === "All") {
            tmpFarms = tmpFarms.sort((itemA, itemB) => itemA.name > itemB.name ? 1 : -1 )
        }
        setDisplayFarms(tmpFarms);
    }, [catValue, active, search, farms])

    function setCat() {
        setCategory(!category);
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="stacking-content container">
            <div className="toolbox d-flex justify-content-between flex-md-column">
                <div className="toolbox-left">
                    <div className="toolbox-item-active">
                        <a className={isLive ? "active" : "disactive"} scale="sm" href="/farms">Live</a>
                        <a className={isLive ? "disactive" : "active"} scale="sm" href="/farms/history">Archive</a>
                    </div>
                    <div className="toolbox-item-stake">
                        <div className="toggle" onClick={()=> {setActive(!active)}}>
                            <input type="checkbox" />
                            <div></div>
                        </div>
                        <span> Active farms</span>
                    </div>
                </div>
                <div className="toolbox-right d-flex">
                    <div>
                        <div className="toolbox-item-search">
                            <input placeholder="Search Farms" onChange={(e) => onSearchChange(e)} />
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className={`toolbox-item-category ${category ? '' : 'opened'}`} style={{marginRight: "8px"}}>
                            <div className="selected" onClick={setCat}>
                                <span>{catValue}</span>
                                <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                                </svg>
                            </div>
                            <div className="select-box">
                                <ul>
                                    {
                                        catValue !== 'All' ? <li onClick={() =>{setCat(); setCatValue('All')}}>
                                            <span>All</span>
                                        </li> : ''
                                    }
                                    {
                                        catValue !== 'APR' ? <li onClick={() =>{setCat(); setCatValue('APR')}}>
                                            <span>APR</span>
                                        </li> : ''
                                    }
                                    {
                                        catValue !== 'Liquidity' ? <li onClick={() => {setCat(); setCatValue('Liquidity')}}>
                                            <span>Liquidity</span>
                                        </li> : ''
                                    }
                                    {
                                        catValue !== 'Stable' ? <li onClick={() => {setCat(); setCatValue('Stable')}}>
                                            <span>Stable</span>
                                        </li> : ''
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="toolbox-item-havest">
                            <button className="tally-button--disabled" disabled >Harvest all</button>
                        </div>
                    </div>
                </div>
            </div>

            <FarmingWrapper farms={displayFarms} />
        </div>
    )
}

export default FarmingContent;