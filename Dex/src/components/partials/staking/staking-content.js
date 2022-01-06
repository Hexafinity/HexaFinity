import { useEffect, useState } from 'react';

import CardWrapper from './card-wrapper';

function StackingContent (props) {
    const { cards, isActive, isToken } = props;
    const [ category, setCategory ] = useState( true );
    const [ bsw, setBsw ] = useState( true );
    const [ count, setCount ] = useState( 0 );
    const [ level1, setLevel1 ] = useState( false );
    const [ level2, setLevel2 ] = useState( false );
    const [ level3, setLevel3 ] = useState( false );
    const [ catValue, setCatValue ] = useState ( 'All' );
    const [ stake, setStake ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ displayCards, setDisplayProducts] = useState(cards);
    
    useEffect(()=> {
        let tmpCards = [ ...cards ];
        setCount(level1 + level2 + level3 );

        tmpCards = tmpCards.filter(item=> {
            let flag = true;

            flag = flag && ( stake === item.isStakedOnly);
            flag = flag && ( isActive === item.isActive );
            flag = flag && ( isToken === item.isToken );
            flag = flag && item.name.toLowerCase().includes( search.toLowerCase() )

            let flag1 = false, flag2 = false, flag3 = false;
            if(level3) flag1 = item.max === "unlimited"
            if(level2) flag2 = item.max === "500"
            if(level1) flag3 = item.max === "10"

            flag = flag && (( flag1 + flag2 + flag3 ) === 0 || ( flag1 || flag2 || flag3 ));
            return flag;
        })

        if (catValue === "APR") {
            tmpCards = tmpCards.sort((itemA, itemB) => itemB.percentage - itemA.percentage)
        } else if (catValue === "Total staked") {
            tmpCards = tmpCards.sort((itemA, itemB) => itemB.totalStake - itemA.totalStake )
        } else if (catValue === "All") {
            tmpCards = tmpCards.sort((itemA, itemB) => itemA.name > itemB.name ? 1 : -1 )
        }
        
        setDisplayProducts(tmpCards);
    }, [catValue, level1, level2, level3, stake, search, cards, isActive, isToken])

    function setCat() {
        setCategory(!category);
    }

    function setBSW() {
        setBsw(!bsw);
    }

    function setCnt(value) {
        setBsw(true);
        value === 1 ? setLevel1(!level1) : value === 2 ? setLevel2(!level2) : setLevel3(!level3);
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="stacking-content container">
            <div className="toolbox d-flex justify-content-between flex-md-column">
                <div className="toolbox-left">
                    <div className="toolbox-item-active">
                        <a className={isActive ? "active" : "disactive"} scale="sm" href="/pools/stake_bsw">Active</a>
                        <a className={isActive ? "disactive" : "active"} scale="sm" href="/pools/stake_bsw/history">Inactive</a>
                    </div>
                    <div className="toolbox-item-stake">
                        <div className="toggle" onClick={()=> {setStake(!stake)}}>
                            <input type="checkbox" />
                            <div></div>
                        </div>
                        <span> Staked only</span>
                    </div>
                </div>
                <div className="toolbox-right d-flex">
                    <div className="d-flex">
                        <div className={`toolbox-item-category ${category ? '' : 'opened'}`}>
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
                                        catValue !== 'Total staked' ? <li onClick={() => {setCat(); setCatValue('Total staked')}}>
                                            <span>Total staked</span>
                                        </li> : ''
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={`toolbox-item-bsw ${bsw ? '' : 'opened'}`}>
                            <div className="selected" onClick={setBSW}>
                                <span className="d-flex">Max stake BSW  {
                                    count ? <p style={{marginLeft: "4px"}}>:({count})</p>: ''}
                                </span>
                                <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                    <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                                </svg>
                            </div>
                            <div className="select-box">
                                <ul>
                                    <li onClick={(e)=>{e.preventDefault(); setCnt(1)}}>
                                        <input id="ten" name="ten" type="checkbox" className={level1 ? "checked" : ""}/>
                                        <label htmlFor="ten" className="sc-hmvnCu jRceEc label">10 BSW<div>
                                                <svg viewBox="0 0 18 13" width="10px" color="contrast" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                                    <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z"></path>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li onClick={(e)=>{e.preventDefault(); setCnt(2)}}>
                                        <input id="fiveHundred" name="fiveHundred" type="checkbox" className={level2 ? "checked" : ""} />
                                        <label htmlFor="fiveHundred" className="sc-hmvnCu jRceEc label">500 BSW<div>
                                                <svg viewBox="0 0 18 13" width="10px" color="contrast" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                                    <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z"></path>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li onClick={(e)=>{e.preventDefault(); setCnt(3)}}>
                                        <input id="unlimited" name="unlimited" type="checkbox" className={level3 ? "checked" : ""} />
                                        <label htmlFor="unlimited" className="sc-hmvnCu jRceEc label">Unlimited<div>
                                                <svg viewBox="0 0 18 13" width="10px" color="contrast" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                                    <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z"></path>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="toolbox-item-search">
                            <input placeholder="Search Launchpool" onChange={(e) => onSearchChange(e)} />
                        </div>
                    </div>
                </div>
            </div>

            <CardWrapper cards={displayCards} />
        </div>
    )
}

export default StackingContent;