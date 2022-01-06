import React, { useState } from 'react';
import Modal from 'react-modal';

// Import Custom Component

const customStyles = {
    content: {
        position: 'relative',
        maxWidth: '420px',
        outline: 'none'
    }
};

export default function CurrencyModal(props) {
    const { text, isIcon = false } = props;
    const [open, setOpen] = useState(false);

    function closeModal(e) {
        if (!document.querySelector('.open-modal')) return;
        e.preventDefault();
        document.querySelector('.open-modal').classList.add("close-modal");

        setTimeout(() => {
            setOpen(false);
        }, 350);
    }

    function openModal(e) {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <div>
            <button className="open-currency-select-button d-flex align-items-center" onClick={openModal}>
                { isIcon ? <img src={"/images/token/bnb.svg"} style={{marginRight: "8px"}} alt="coin"/> : '' }
                <span>{text}</span>
                <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" className="fill-secondary">
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                </svg>
            </button>

            {
                open ?
                    <Modal
                        isOpen={open}
                        style={customStyles}
                        contentLabel="login Modal"
                        className="login-popup"
                        overlayClassName="ajax-overlay open-modal"
                        shouldReturnFocusAfterClose={false}
                        onRequestClose={closeModal}
                        closeTimeoutMS={10}
                        ariaHideApp={false}
                    >
                        <div aria-modal="true" role="dialog" tabIndex="-1" aria-label="dialog" className="currency-modal-wrapper" data-reach-dialog-content="">
                            <div className="d-flex flex-column justify-content-start">
                                <div className="currency-modal-top">
                                    <div className="modal-title">
                                        <span>
                                            Select a token
                                            <span style={{marginLeft: "4px"}}>
                                                <div className="d-inline-block">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>
                                        <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                                            <path d="M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="token-search-input" placeholder="Search name or paste address" />
                                    <div className="currency-modal-common">
                                        <div className="currency-modal-common-title">
                                            <span style={{marginLeft: "4px"}}>Common bases</span>
                                            <span style={{marginLeft: "4px"}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="currency-modal-common-body">
                                            <div>
                                                <img src="/images/token/bnb.svg" style={{marginRight: "8px"}} alt="coin" />
                                                <span>BNB</span>
                                            </div>
                                            <div>
                                                <img alt="BUSD logo" src="/images/token/busd.svg" style={{marginRight: "8px"}} />
                                                <span>BUSD</span>
                                            </div>
                                            <div>
                                                <img alt="USDT logo" src="/images/token/usdt.svg" style={{marginRight: "8px"}} />
                                                <span>USDT</span>
                                            </div>
                                            <div>
                                                <img alt="USDC logo" src="/images/token/usdc.svg" style={{marginRight: "8px"}} />
                                                <span>USDC</span>
                                            </div>
                                            <div>
                                                <img alt="BTCB logo" src="/images/token/btcb.svg" style={{marginRight: "8px"}} />
                                                <span>BTCB</span>
                                            </div>
                                            <div>
                                                <img alt="ETH logo" src="/images/token/eth.svg" style={{marginRight: "8px"}} />
                                                <span>ETH</span>
                                            </div>
                                            <div>
                                                <img alt="BSW logo" src="/images/token/hexa.png" style={{marginRight: "8px"}} />
                                                <span>BSW</span>
                                            </div>
                                            <div>
                                                <img alt="BFG logo" src="/images/token/bfg.svg" style={{marginRight: "8px"}} />
                                                <span>BFG</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="currency-modal-token">
                                        <span>Token name</span>
                                        <div>
                                            <span>↓</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{position: "relative", height: "73px", width: "100%", overflow: "auto", willChange: "transform", direction: "ltr"}}>
                                        <div style={{width: "100%"}}>
                                            <div className="currency-token-item token-item-ETHER" style={{left: "0px", top: "0px", height: "35px", width: "100%"}}>
                                                <img src="/images/token/bnb.svg" alt="coin" />
                                                <div>
                                                    <span title="Binance">BNB</span>
                                                </div>
                                                <div style={{justifySelf: "flex-end"}}></div>
                                            </div>
                                            <div className="currency-token-item token-item-0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" style={{left: "0px", top: "0px", height: "35px", width: "100%"}}>
                                                <img alt="ADA logo" src="/images/token/ada.svg" />
                                                <div>
                                                    <span title="ADA">ADA</span>
                                                </div>
                                                <div style={{justifySelf: "flex-end"}}></div>
                                            </div>
                                            <div className="currency-token-item token-item-0x016CF83732f1468150D87dCC5BdF67730B3934D3" style={{left: "0px", top: "112px", height: "35px", width: "100%"}}>
                                                <img alt="AIRT logo" src="/images/token/airt.svg" />
                                                <div>
                                                    <span title="AIRT">AIRT</span>
                                                </div>
                                                <div style={{justifySelf: "flex-end"}}></div>
                                            </div>
                                            <div className="currency-token-item token-item-0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F" style={{left: "0px", top: "168px", height: "35px", width: "100%"}}>
                                                <img alt="ALPACA logo" src="/images/token/alpaca.svg" />
                                                <div>
                                                    <span title="ALPACA">ALPACA</span>
                                                </div>
                                                <div style={{justifySelf: "flex-end"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    : ''
            }
        </div>
    )
}