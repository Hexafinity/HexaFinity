import React, { useState } from 'react';
import Modal from 'react-modal';

// Import Custom Component

const customStyles = {
    content: {
        position: 'relative',
        minWidth: '416px',
        outline: 'none'
    }
};

export default function Setting() {
    const [ open, setOpen ] = useState(false);
    const [ speed, setSpeed] = useState(0);
    const [ tolarance, setTolarance ] = useState(0);

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

    function setTolaranceValueHandler(value) {
        document.querySelector('.tolarance-input input').setAttribute('value', value);
    }

    return (
        <>
            <button onClick={openModal}>
                <svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvtL emSlGa">
                    <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
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
                        <div className="setting-modal-wrapper">
                            <div className="setting-modal-top">
                                <h2>Settings</h2>
                                <button className="closeModal" scale="sm" aria-label="Close the dialog" onClick={closeModal}>
                                    <svg viewBox="0 0 24 24" width="24px" color="card" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="setting-modal-bottom">
                                <div className="border-top"></div>
                                <div style={{padding: "24px 0"}}>
                                    <div className="d-flex align-items-center mb-1">
                                        <svg viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z"></path>
                                        </svg>
                                        <span>Default Transaction Speed (GWEI)</span>
                                        <span style={{marginLeft: "4px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className={speed === 0 ? 'active' : ''} onClick={()=>setSpeed(0)}>Standard (5)</button>
                                        <button className={speed === 1 ? 'active' : ''} onClick={()=>setSpeed(1)}>Fast (6)</button>
                                        <button className={speed === 2 ? 'active' : ''} onClick={()=>setSpeed(2)}>Instant (7)</button>
                                    </div>
                                </div>
                                <div className="border-top"></div>
                                <div className="mt-1 pb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <span style={{fontWeight: "600"}}>Slippage tolerance</span>
                                        <span style={{marginLeft: "4px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div className="button-group">
                                            <button className={tolarance === 0 ? 'active' : ''} onClick={()=>{ setTolarance(0); setTolaranceValueHandler(0.1) }}>0.1%</button>
                                            <button className={tolarance === 1 ? 'active' : ''} onClick={()=>{ setTolarance(1); setTolaranceValueHandler(0.5) }}>0.5%</button>
                                            <button className={tolarance === 2 ? 'active' : ''} onClick={()=>{ setTolarance(2); setTolaranceValueHandler(1) }}>1%</button>
                                        </div>
                                        <div className="tolarance-input d-flex align-items-center">
                                            <input type="number" step="0.1" min="0.1" placeholder="5%" />
                                            <span>%</span>
                                        </div>
                                    </div>
                                    {
                                        tolarance === 0 ?
                                        <span className="failure">Your transaction may fail</span> : ''
                                    }
                                </div>
                                <div className="mt-1 pb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div className="d-flex align-items-center transaction-deadline mb-1">
                                                <span style={{fontWeight: "600"}}>Transaction deadline</span>
                                                <span style={{marginLeft: "4px"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center mb-0 deadline-input">
                                                <input type="number" step="1" min="1" />
                                                <span>Minutes</span>
                                            </div>
                                        </div>
                                        <div className="audio-checkbox">
                                            <span>Audio</span>
                                            <div height="40px" className="d-flex align-items-center justify-content-center">
                                                <div>
                                                    <input type="checkbox" />
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    : ''
            }
        </>
    )
}