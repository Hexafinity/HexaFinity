import { useState, useEffect } from 'react';

import SlideToggle from 'react-slide-toggle';

function Sidebar() {
    const [miniSidebar, setMiniSidebar] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', function () {
            if (window.innerWidth < 968)
                setMiniSidebar(false);
            else if (document.querySelector('body').classList.contains('sidebar-active'))
                document.querySelector('body').classList.remove('sidebar-active');
        })

        if (!document.querySelectorAll('.sidebar-menu .menu-item.active').length) {
            document.querySelector('.sidebar-menu .menu-item').classList.add('active');
        }
    }, []);

    function toggleSidebarHandler() {
        window.innerWidth > 968 ? setMiniSidebar(!miniSidebar) : setMiniSidebar(false);
    }

    function maxiSidebarHandler() {
        setMiniSidebar(false);
    }

    return (
        <div className={miniSidebar ? 'sidebar-wrapper mini-sidebar' : 'sidebar-wrapper'}>
            <div className="sidebar">
                <div className="sidebar-toggle-btn" onClick={(e) => { e.preventDefault(); toggleSidebarHandler(); }}>
                    <svg viewBox="0 0 16 16" width="16px" color="contrast" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                        <path d="M9.80657 10.5867L7.21991 7.99999L9.80657 5.41332C10.0666 5.15332 10.0666 4.73332 9.80657 4.47332C9.54657 4.21332 9.12657 4.21332 8.86657 4.47332L5.80657 7.53332C5.54657 7.79332 5.54657 8.21332 5.80657 8.47332L8.86657 11.5333C9.12657 11.7933 9.54657 11.7933 9.80657 11.5333C10.0599 11.2733 10.0666 10.8467 9.80657 10.5867Z"></path>
                    </svg>
                </div>

                <div className="sidebar-logo">
                    <a aria-label="Tally home page" href="/">
                        <img src={"/images/logo/logo1.png"} alt="logo" className="mobile-icon" />
                        <img src={"/images/logo/logo3.png"} alt="logo" className="desktop-icon" />
                    </a>
                </div>

                <div className="sidebar-menu">
                    <div className={`menu-item ${document.querySelectorAll('.sidebar-menu .menu-item.active').length ? 'active' : ''}`} role="button">
                        <a aria-current="page" role="button" target="_self" href="/">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path d="M11.6566 3.3244C11.8493 3.14234 12.1507 3.14234 12.3434 3.3244L19.7463 10.3184C20.0751 10.629 19.8553 11.1818 19.4029 11.1818H4.59706C4.14473 11.1818 3.92489 10.629 4.25369 10.3184L11.6566 3.3244Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.13647 10.2727C5.86033 10.2727 5.63647 10.4966 5.63647 10.7727V18.8636C5.63647 19.1398 5.86033 19.3636 6.13647 19.3636L10.1819 19.3636V13H13.8182V19.3636L17.8637 19.3636C18.1399 19.3636 18.3637 19.1398 18.3637 18.8636V10.7727C18.3637 10.4966 18.1399 10.2727 17.8637 10.2727H6.13647Z"></path>
                            </svg>
                            <div className="menu-title">Home</div>
                        </a>
                    </div>

                    <div className={`menu-item ${window.location.href.includes("swap/1") ? 'active' : ''}`} role="button" >
                        <a role="button" href="/swap/1" target="_self">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path d="M7 6H19V9H7V6Z"></path>
                                <path d="M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z"></path>
                                <path d="M18 16H5V19H18V16Z"></path>
                                <path d="M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z"></path>
                            </svg>
                            <div className="menu-title">Exchange</div>
                            <div className="badge badge-soon">
                                <span color="inherit">Soon</span>
                            </div>
                        </a>
                    </div>

                    <div className={`menu-item ${window.location.href.includes("swap/2") ? 'active' : ''}`} role="button">
                        <a role="button" href='/swap/2' target="_self">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 10.5C21 15.1944 17.1944 19 12.5 19C11.1972 19 9.96279 18.7069 8.85922 18.183C8.95124 17.8037 9 17.4076 9 17C9 14.2828 6.83254 12.0718 4.13224 12.0017C4.04534 11.5143 4 11.0124 4 10.5C4 5.80558 7.80558 2 12.5 2C17.1944 2 21 5.80558 21 10.5ZM13.375 16V14.9441C15.0996 14.622 16 13.3607 16 12.1072C16 11.0172 15.545 9.18763 12.5 9.18763C10.75 9.18763 10.75 8.57841 10.75 8.21443C10.75 7.74341 11.3634 7.24124 12.5 7.24124C13.5369 7.24124 13.7127 7.86213 13.725 8.23195L14.6 8.21443H15.475C15.475 7.21593 14.8922 5.81161 13.375 5.4126V4.33333H11.625V5.37757C9.90037 5.69969 9 6.96096 9 8.21443C9 9.30441 9.455 11.134 12.5 11.134C14.25 11.134 14.25 11.7919 14.25 12.1072C14.25 12.5111 13.7075 13.0804 12.5 13.0804C10.8891 13.0804 10.7596 12.2464 10.75 12.1072H9C9 13.0006 9.57837 14.5918 11.625 14.9489V16H13.375Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 17C8 19.2091 6.20914 21 4 21C1.79086 21 0 19.2091 0 17C0 14.7909 1.79086 13 4 13C6.20914 13 8 14.7909 8 17ZM4 14C4.55229 14 5 14.4477 5 15V16H6C6.55228 16 7 16.4477 7 17C7 17.5523 6.55228 18 6 18H5V19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V18H2C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16H3L3 15C3 14.4477 3.44772 14 4 14Z"></path>
                            </svg>
                            <div className="menu-title">Liquidity</div>
                        </a>
                    </div>

                    <div className={`menu-item ${window.location.href.includes("farms") ? 'active' : ''}`} role="button">
                        <a role="button" target="_self" href="/farms">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.5358 18.4866C19.2402 18.4866 19.8112 17.9156 19.8112 17.2113C19.8112 16.5069 19.2402 15.9359 18.5358 15.9359C17.8315 15.9359 17.2605 16.5069 17.2605 17.2113C17.2605 17.9156 17.8315 18.4866 18.5358 18.4866ZM18.5358 19.8682C20.0032 19.8682 21.1928 18.6786 21.1928 17.2113C21.1928 15.7439 20.0032 14.5543 18.5358 14.5543C17.0685 14.5543 15.8789 15.7439 15.8789 17.2113C15.8789 18.6786 17.0685 19.8682 18.5358 19.8682Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.31384 17.7426C7.48774 17.7426 8.43938 16.791 8.43938 15.6171C8.43938 14.4432 7.48774 13.4915 6.31384 13.4915C5.13993 13.4915 4.18829 14.4432 4.18829 15.6171C4.18829 16.791 5.13993 17.7426 6.31384 17.7426ZM6.31384 19.8681C8.66165 19.8681 10.5649 17.9649 10.5649 15.6171C10.5649 13.2692 8.66165 11.366 6.31384 11.366C3.96602 11.366 2.06274 13.2692 2.06274 15.6171C2.06274 17.9649 3.96602 19.8681 6.31384 19.8681Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2103 7.49462C13.3866 7.24265 13.6854 7.10558 13.9914 7.13619L18.1624 7.55329C18.9773 7.63478 19.5979 8.32054 19.5979 9.13954V13.2399C19.2782 13.1598 18.9436 13.1173 18.599 13.1173C16.7044 13.1173 15.1099 14.4024 14.6397 16.1485H12.0741C12.0904 15.9729 12.0987 15.7949 12.0987 15.6149C12.0987 13.3921 10.8264 11.4664 8.97021 10.5266V10.4084L10.9711 9.96377C11.3602 9.87731 11.7027 9.64826 11.9313 9.32176L13.2103 7.49462ZM17.1109 15.8073L17.9979 15.2568C17.6555 15.3617 17.3512 15.5539 17.1109 15.8073Z"></path>
                                <path d="M3.12549 8.70906C3.12549 8.41558 3.3634 8 3.65687 8H6.31381C6.90076 8 7.37658 8.65349 7.37658 9.24045V9.77183H3.65687C3.3634 9.77183 3.12549 9.53392 3.12549 9.24045V8.70906Z"></path>
                                <path d="M9.57983 7.32788L12.7196 4.00004L13.4148 4.65599L10.2751 7.98383L9.57983 7.32788Z"></path>
                                <path d="M12.166 5.97961L14.4851 8.16761L13.8287 8.86333L11.5096 6.67533L12.166 5.97961Z"></path>
                            </svg>
                            <div className="menu-title">Farms</div>
                        </a>
                    </div>

                    <SlideToggle collapsed>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <>
                                <div className={`menu-item ${window.location.href.includes("stake") ? 'active' : ''}`} role="button" onClick={(e) => { e.preventDefault(); onToggle(); maxiSidebarHandler(); }}>
                                    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                        <g clipPath="url(#clip0)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4319 12.8431C16.6324 13.641 14.2935 15.9799 14.2935 15.9799C14.2935 15.9799 14.8442 18.7296 13.37 20.6252C13.2005 20.8432 12.8811 20.8417 12.6858 20.6464L3.35353 11.3141C3.15827 11.1189 3.15678 10.7993 3.375 10.6301C5.2718 9.15946 8.03072 9.73667 8.03072 9.73667C8.03072 9.73667 9.28083 8.44477 11.1568 6.56878C13.666 4.05872 18.6861 5.31375 18.6861 5.31375C18.6861 5.31375 19.9411 10.3339 17.4319 12.8431ZM7.89146 18.5407C6.25305 20.1791 3.79543 20.1791 3.79543 20.1791C3.79543 20.1791 3.79543 16.9023 5.43384 16.0831L7.89146 18.5407ZM13.975 10.0251C14.5608 10.6109 15.5105 10.6109 16.0963 10.0251C16.6821 9.43933 16.6821 8.48958 16.0963 7.90379C15.5105 7.318 14.5608 7.318 13.975 7.90379C13.3892 8.48958 13.3892 9.43933 13.975 10.0251Z"></path>
                                        </g>
                                        <defs><clipPath id="clip0"><rect width="24" height="24"></rect></clipPath></defs>
                                    </svg>
                                    <div className="menu-title">Launchpools</div>
                                    {
                                        toggleState === 'COLLAPSED' ?
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                                            </svg> :
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                                            </svg>
                                    }
                                </div>
                                <div className="overflow-hidden" ref={setCollapsibleElement}>
                                    <div className="submenu">
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" target="_self" href="/pools/stake_bsw"> Stake BSW </a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" target="_self" href="/pools/stake_tokens"> Stake Tokens </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SlideToggle>

                    <div className="menu-item" role="button">
                        <a role="button" target="_self" href="/lottery">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.6173 4.74263C16.261 4.20784 15.48 4.10541 15.0033 4.5211C13.7386 5.62388 11.3953 7.56262 9.43732 8.59499C7.56606 9.58164 4.91917 10.431 3.38138 10.8828C2.75176 11.0677 2.46818 11.7616 2.80723 12.3134L3.8898 14.0754C4.16495 13.7472 4.57798 13.5386 5.03974 13.5386C5.86817 13.5386 6.53974 14.2101 6.53974 15.0386C6.53974 15.7502 6.04424 16.346 5.37946 16.4999L6.64943 18.5669C6.86213 18.9131 7.2702 19.1087 7.67914 19.0414C9.18679 18.7936 12.9209 18.0137 15.9219 16.0206C18.6184 14.2298 20.1025 12.8081 20.7632 12.099C21.0333 11.8091 21.0443 11.3863 20.8198 11.0495L19.3497 8.84326C19.0746 9.16934 18.6629 9.37647 18.2028 9.37647C17.3744 9.37647 16.7028 8.7049 16.7028 7.87647C16.7028 7.20514 17.1438 6.63682 17.752 6.44541L16.6173 4.74263ZM12.259 15.3765C13.9158 15.3765 15.259 14.0333 15.259 12.3765C15.259 10.7196 13.9158 9.37647 12.259 9.37647C10.6021 9.37647 9.25898 10.7196 9.25898 12.3765C9.25898 14.0333 10.6021 15.3765 12.259 15.3765Z"></path>
                            </svg>
                            <div className="menu-title">Lottery</div>
                            <div className="badge badge-win">
                                <span color="inherit">Win</span>
                            </div>
                        </a>
                    </div>

                    <SlideToggle collapsed>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <>
                                <div className="menu-item warning" role="button" onClick={(e) => { e.preventDefault(); onToggle(); maxiSidebarHandler(); }}>
                                    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                        <path d="M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z"></path>
                                    </svg>
                                    <div className="menu-title">Competitions</div>
                                    {
                                        toggleState === 'COLLAPSED' ?
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                                            </svg> :
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                                            </svg>
                                    }
                                </div>
                                <div className="overflow-hidden" ref={setCollapsibleElement}>
                                    <div className="submenu">
                                        <div role="button" className="menu-item submenu-item">
                                            <span className="sc-dtDOqo fQcELn"></span>
                                            <a role="button" target="_self" href="/lottery_competition">Lottery Comp...</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <span className="sc-dtDOqo kVTZLa"></span>
                                            <a role="button" target="_self" href="/alu_competition">ALU Comp...</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <span className="sc-dtDOqo kVTZLa"></span>
                                            <a role="button" target="_self" href="/bsw_competition">BSW Comp...</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <span className="sc-dtDOqo kVTZLa"></span>
                                            <a role="button" target="_self" href="/eternal_competition">ETERNAL Comp...</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <span className="sc-dtDOqo kVTZLa"></span>
                                            <a role="button" target="_self" href="/bfg_competition">BFG Comp...</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" target="_self" href="/archive_competitions">Archive</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SlideToggle>

                    <div className="menu-item" role="button">
                        <a role="button" target="_self" href="/analytics">
                            <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM8 10C7.44772 10 7 10.4477 7 11V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V11C9 10.4477 8.55228 10 8 10ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V8ZM16 13C15.4477 13 15 13.4477 15 14V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16V14C17 13.4477 16.5523 13 16 13Z"></path>
                            </svg>
                            <div className="menu-title">Analytics</div>
                            <div className="badge badge-beta">
                                <span color="inherit">Beta</span>
                            </div>
                        </a>
                    </div>

                    <SlideToggle collapsed>
                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                            <>
                                <div className="menu-item" role="button" onClick={(e) => { e.preventDefault(); onToggle(); maxiSidebarHandler(); }}>
                                    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 5C4.44772 5 4 5.44772 4 6V17C4 17.5523 4.44772 18 5 18H17.7455C18.1062 18 18.4389 17.8058 18.6163 17.4917L21.7223 11.9917C21.8946 11.6866 21.8946 11.3134 21.7223 11.0083L18.6163 5.50826C18.4389 5.19421 18.1062 5 17.7455 5H5ZM7.75 10C7.05964 10 6.5 10.5596 6.5 11.25C6.5 11.9404 7.05964 12.5 7.75 12.5C8.44036 12.5 9 11.9404 9 11.25C9 10.5596 8.44036 10 7.75 10ZM11.5 11.25C11.5 10.5596 12.0596 10 12.75 10C13.4404 10 14 10.5596 14 11.25C14 11.9404 13.4404 12.5 12.75 12.5C12.0596 12.5 11.5 11.9404 11.5 11.25ZM17.75 10C17.0596 10 16.5 10.5596 16.5 11.25C16.5 11.9404 17.0596 12.5 17.75 12.5C18.4404 12.5 19 11.9404 19 11.25C19 10.5596 18.4404 10 17.75 10Z"></path>
                                    </svg>
                                    <div className="menu-title">More</div>
                                    {
                                        toggleState === 'COLLAPSED' ?
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
                                            </svg> :
                                            <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"></path>
                                            </svg>
                                    }
                                </div>
                                <div className="overflow-hidden" ref={setCollapsibleElement}>
                                    <div className="submenu">
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" href="/pdf/TallyAudit.pdf" target="_blank">Audit (PDF)</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" href="/about" target="_self">About</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" href="/team" target="_self">Team</a>
                                        </div>
                                        <div role="button" className="menu-item submenu-item">
                                            <a role="button" href="/documents" target="_self">Docs</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SlideToggle>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;