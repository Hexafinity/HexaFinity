import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CurrencyModal from '../../components/modal/currency';
import Setting from '../../components/modal/setting';
import Footer from '../../components/common/footer';

import data from '../../data/data.json';

function Swap() {
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setPage(parseInt(id));
    }, []);

    return (
        <div className="page-content">
            {
                page === 1 ?
                    <div className="swap">
                        <div className="bg-background">
                            <div className="app-hero">
                                <h1 className="app-hero__title">Make a Swap at No Cost</h1>
                                <div className="d-flex">
                                    <h2 className="app-hero__subtitle mb-0">Up to 90% of the trading commission is returned in BSW tokens, 10% is credited to your Robi Boost. You can change the percentage.</h2>
                                </div>
                            </div>

                            <div className="app-hero-withdraw">
                                <div className="app-hero-withdraw__body">
                                    <div className="app-hero-withdraw__body-left">
                                        <div className="app-hero-withdraw__body-right">
                                            <div className="app-hero-withdraw__body-left--balance">
                                                <div className="app-hero-withdraw-title">
                                                    Fee Return:<span style={{ marginLeft: "4px" }}>
                                                        <div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                                <b style={{ marginTop: "4px" }}> 0.000000 BSW</b>
                                            </div>
                                            <button className="tally-button--disabled" disabled="" scale="sm">Withdraw</button>
                                        </div>
                                    </div>

                                    <div className="separator"></div>

                                    <div className="app-hero-withdraw__body-right">
                                        <div>
                                            <div className="app-hero-withdraw-title">Robi Boost:
                                                <span style={{ marginLeft: "4px" }}>
                                                    <div className="sc-fkJVfC cGvOjB">
                                                        <div className="sc-iseIHH cBDDBb">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <b style={{ marginTop: "4px" }}> 0.00000 RB</b>
                                        </div>
                                        <button style={{ marginRight: "16px" }}>
                                            <a className="tally-button--disabled" disabled="" scale="sm" href="https://tally.org/nft/boost">Use</a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-nav">
                                    <a className="selected active" href="#/swap" onClick={(e) => { e.preventDefault(); }}>Swap</a>
                                    <a href="#/pool" aria-current="page" onClick={(e) => { e.preventDefault(); setPage(2) }}>Liquidity</a>
                                    <a href="https://www.binance.org/en/bridge" target="_blank" rel="noopener noreferrer" className="btn_bridge">Bridge</a>
                                    <a href="#/transactions" onClick={(e) => { e.preventDefault(); setPage(3) }}>Transactions</a>
                                </div>

                                <div id="swap-page">
                                    <div className="swap-top d-flex align-items-center">
                                        <div>
                                            <h2>Exchange</h2>
                                            <span>Trade tokens in an instant</span>
                                        </div>
                                        <Setting key="setting-modal-one" />
                                    </div>
                                    <div className="swap-body">
                                        <div className={`swap-exchange ${order ? 'inc' : 'dec'}`}>
                                            <div id="swap-currency-input">
                                                <div className="swap-exchange-top">
                                                    <div>
                                                        <span>From</span>
                                                    </div>
                                                </div>
                                                <div className="swap-exchange-bottom">
                                                    <input className="token-amount-input" inputMode="decimal" title="Token Amount" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" />
                                                    <CurrencyModal text={'BNB'} isIcon={true} />
                                                </div>
                                            </div>
                                            <div className="exchange-icon">
                                                <div style={{ padding: "0px 1rem" }}>
                                                    <button scale="sm" style={{ borderRadius: "50%", width: "40px" }} onClick={() => { setOrder(!order) }}>
                                                        <svg viewBox="0 0 24 25" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div id="swap-currency-output">
                                                <div className="swap-exchange-top">
                                                    <div>
                                                        <span>To</span>
                                                    </div>
                                                </div>
                                                <div className="swap-exchange-bottom">
                                                    <input className="token-amount-input" inputMode="decimal" title="Token Amount" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" />
                                                    <CurrencyModal text={"Select a currency"} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swap-action mt-1">
                                            <button>Unlock Wallet</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : page === 2 ?
                        <div className="liquidity">
                            <div className="bg-background">
                                <div className="app-hero">
                                    <h1 className="app-hero__title">Become a Liquidity Provider</h1>
                                    <div className="d-flex flex-column mb-1">
                                        <h2 className="app-hero__subtitle mb-0">Earn high yields from transaction fees.</h2>
                                        <a href="https://docs.tally.org/education-hub/how-to-earn-on-tally-farms#:~:text=for%20this%20guide.-,Provide%20Liquidity%2C%20Stake%20LP%20tokens%20%26%20Earn%20BSW,-As%20you%20noticed" target="_blank" rel="noreferrer">Learn how to add liquidity</a>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="card-nav">
                                        <a href="#/swap" onClick={(e) => { e.preventDefault(); setPage(1) }}>Swap</a>
                                        <a className="selected active" href="#/pool" aria-current="page" onClick={(e) => { e.preventDefault(); }}>Liquidity</a>
                                        <a href="https://www.binance.org/en/bridge" target="_blank" rel="noopener noreferrer" className="btn_bridge">Bridge</a>
                                        <a href="#/transactions" onClick={(e) => { e.preventDefault(); setPage(3) }}>Transactions</a>
                                    </div>

                                    <div className="liquidity-exchange-top">
                                        <div className="d-flex align-items-center">
                                            <div className="liquidity-top">
                                                <h2 color="contrastInverted" className="sc-giYglK sc-ezbkAF ipnpps gblLem">Liquidity</h2>
                                                <span color="textSubtle" className="sc-giYglK ktOhjE">Add liquidity to receive LP tokens</span>
                                            </div>
                                            <Setting key="setting-modal-two" />
                                        </div>
                                        <span color="text" onClick={() => setPage(4)}>
                                            <a className="sc-gsDKAQ cmoFRx" id="join-pool-button" width="100%" variant="primary" scale="md" href="#/add/ETH">
                                                Add Liquidity<svg viewBox="0 0 24 24" color="#fff" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                                                    <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>

                                    <div className="liquidity-exchange-bottom">
                                        <div style={{ width: "100%" }}>
                                            <div className="your-liquidity">
                                                <span>Your Liquidity</span>
                                                <span style={{ marginLeft: "4px" }}>
                                                    <div className="sc-iseIHH cBDDBb">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="connect-liquidity">
                                                <span>Connect a wallet to view your liquidity.</span>
                                            </div>
                                            <div className="join-liquidity">
                                                <span style={{ padding: "0.5rem 0px" }}>
                                                    Don't see a pool you joined? <a id="import-pool-link" href="#/find">Import it.</a>
                                                </span>
                                                <span style={{ padding: "0.5rem 0px" }}>Or, if you staked your LP tokens in a farm, unstake them to see them here.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : page === 3 ?
                            <div className="transaction">
                                <div className="bg-background">
                                    <div className="app-hero">
                                        <h1 className="app-hero__title">Make a Swap at No Cost</h1>
                                        <div className="d-flex">
                                            <h2 className="app-hero__subtitle mb-0">Up to 90% of the trading commission is returned in BSW tokens, 10% is credited to your Robi Boost. You can change the percentage.</h2>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="card-nav">
                                            <a href="#/swap" onClick={(e) => { e.preventDefault(); setPage(1) }}>Swap</a>
                                            <a href="#/pool" aria-current="page" onClick={(e) => { e.preventDefault(); setPage(2) }}>Liquidity</a>
                                            <a href="https://www.binance.org/en/bridge" target="_blank" rel="noopener noreferrer" className="btn_bridge">Bridge</a>
                                            <a className="selected active" href="#/transactions" onClick={(e) => { e.preventDefault(); }}>Transactions</a>
                                        </div>

                                        <div className="exchange-transactions">
                                            <h2 className="exchange-transactions__title">Recent transactions</h2>
                                            <div className="d-flex justify-content-center flex-column">
                                                <span>Please connect your wallet to view your recent transactions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div className="swap">
                                <div className="bg-background">
                                    <div className="app-hero">
                                        <h1 className="app-hero__title">Make a Swap at No Cost</h1>
                                        <div className="d-flex">
                                            <h2 className="app-hero__subtitle mb-0">Up to 90% of the trading commission is returned in BSW tokens, 10% is credited to your Robi Boost. You can change the percentage.</h2>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="card-nav">
                                            <a className="selected active" href="#/swap" onClick={(e) => { e.preventDefault(); }}>Swap</a>
                                            <a href="#/pool" aria-current="page" onClick={(e) => { e.preventDefault(); setPage(2) }}>Liquidity</a>
                                            <a href="https://www.binance.org/en/bridge" target="_blank" rel="noopener noreferrer" className="btn_bridge">Bridge</a>
                                            <a href="#/transactions" onClick={(e) => { e.preventDefault(); setPage(3) }}>Transactions</a>
                                        </div>

                                        <div id="swap-page">
                                            <div className="swap-top d-flex align-items-center">
                                                <a href="#/pool" onClick={() => setPage(2)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07162d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                                        <polyline points="12 19 5 12 12 5"></polyline>
                                                    </svg>
                                                </a>
                                                <div className="text-center" style={{ color: "#212529" }}>Add Liquidity</div>
                                                <span style={{ marginLeft: "4px" }}>
                                                    <div>
                                                        <div className="sc-iseIHH cBDDBb">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="swap-body">
                                                <div className={`swap-exchange ${order ? 'inc' : 'dec'}`}>
                                                    <div id="swap-currency-input">
                                                        <div className="swap-exchange-top">
                                                            <div>
                                                                <span>From</span>
                                                            </div>
                                                        </div>
                                                        <div className="swap-exchange-bottom">
                                                            <input className="token-amount-input" inputMode="decimal" title="Token Amount" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" />
                                                            <CurrencyModal text={'BNB'} isIcon={true} />
                                                        </div>
                                                    </div>
                                                    <div className="exchange-icon">
                                                        <div style={{ padding: "0px 1rem" }}>
                                                            <button scale="sm" style={{ borderRadius: "50%", width: "40px" }} onClick={() => { setOrder(!order) }}>
                                                                <svg viewBox="0 0 24 25" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div id="swap-currency-output">
                                                        <div className="swap-exchange-top">
                                                            <div>
                                                                <span>To</span>
                                                            </div>
                                                        </div>
                                                        <div className="swap-exchange-bottom">
                                                            <input className="token-amount-input" inputMode="decimal" title="Token Amount" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" />
                                                            <CurrencyModal text={"Select a currency"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swap-action mt-1">
                                                    <button>Unlock Wallet</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }

            <Footer footerInfo={data.footerInfo} />
        </div>
    )
}

export default Swap;