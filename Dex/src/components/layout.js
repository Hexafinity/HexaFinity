import PreLoader from "./common/preloader";
import Header from "./common/header";
import Sidebar from "./common/sidebar";

function Layout({ children }) {
    return (
        <>
            <div className="page-wrapper">
                <PreLoader />

                <Sidebar />
                    
                <Header />

                {children}

                <div role="presentation" className="sidebar-overlay" onClick={(e)=> {document.querySelector('body').classList.toggle('sidebar-active')}}></div>
            </div>
        </>
    )
}

export default Layout;