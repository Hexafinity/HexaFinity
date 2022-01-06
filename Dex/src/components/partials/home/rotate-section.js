import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function RotateSection (props) {
    var currencyFormatter = require('currency-formatter');
    const { content } = props;
    const [state, setState] = useState(true);
    const [countItem, setCountItem] = useState(0);
    const [startPos, setStartPos] = useState(0);
    let priceInterval;

    useEffect(()=> {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return() => {
            window.removeEventListener('resize', resizeHandler);
        }
    },[])

    useEffect(()=> {
        setStartPos(( startPos + countItem ) % 13);
        priceInterval = setInterval(changeContent, 5000);
    }, [state])

    function resizeHandler() {
        if(window.innerWidth > 1199) {
            setCountItem(5);
        } else if (window.innerWidth > 1079) {
            setCountItem(4);
        } else if (window.innerWidth > 576) {
            setCountItem(3);
        } else {
            setCountItem(4);
        }
    }

    function changeContent() {
        setState(!state);
        clearInterval(priceInterval);
    }

    return (
        <div className="intro-bottom">
            <div className="move">
                {
                    new Array(countItem).fill(1).map(function(item, index){ 
                        return <SwitchTransition mode={"out-in"} key={index}>
                            <CSSTransition
                                key={state}
                                addEndListener={(node, done) => {
                                    node.addEventListener("transitionend", done, false);
                                }}
                                classNames="fade"
                            >
                                <div className="button-container">
                                    <Button>
                                        <a href={"https://exchange.tally.org/#/swap?outputCurrency=" + content[(startPos + index) % 13].hash} className="d-flex align-items-center" >
                                            <img src={ content[(startPos + index) % 13].avatar } className="rotate-image" alt="svg"/>
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <span color="textSubtle" className="rotate-name">{content[(startPos + index) % 13].name.toUpperCase()}</span>
                                                    <span color="success" className={content[(startPos + index) % 13].percentage > 0 ? 'rotate-percentage rotate-plus' : 'rotate-percentage rotate-minus'}>{content[(startPos + index) % 13].percentage > 0 ? '+' : ''}{
                                                        currencyFormatter.format(content[(startPos + index) % 13].percentage, {
                                                            symbol: '%',
                                                            decimal: '.',
                                                            thousand: ' ',
                                                            precision: 2,
                                                            format: '%v%s'
                                                          })
                                                    }</span>
                                                </div>
                                                <span color="contrast" className="rotate-price">${content[(startPos + index) % 13].price}</span>
                                            </div>
                                        </a>
                                    </Button>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    })
                }
            </div>

            <a className="view-all" href="/analytics">
                <span>All Markets</span>
                <svg viewBox="0 0 24 24" width="24px" color="contrast" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"></path>
                </svg>
            </a>
        </div>
    )
}

export default RotateSection;