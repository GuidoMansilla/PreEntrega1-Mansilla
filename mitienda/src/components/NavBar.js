import CartWidget from './CartWidget';
import NavBarItems from './NavBarItems';

function NavBar() {
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container-fluid">
                        
                        <div className="col-sm-6 col-md-4 col-xl-4 d-flex justify-content-center">
                            <h2>MiTienda</h2>
                        </div>

                        <div className="collapse navbar-collapse col-md-4 col-xl-4 d-flex justify-content-center" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <NavBarItems />
                            </ul>
                        </div>

                        <div className="col-md-4 col-xl-4 d-flex justify-content-center">
                            <CartWidget />
                        </div>                
                    </div>                    
                </nav>
            </div>
            
            
        </div>
    )
}


export default NavBar;