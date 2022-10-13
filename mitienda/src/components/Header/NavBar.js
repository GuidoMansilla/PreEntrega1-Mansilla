import React from 'react';
import CartWidget from './CartWidget';
import NavBarItems from './NavBarItems';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav nav-pills nav-fill bg-light">
            <Link className="nav-link navbar-brand" to="/"><h2>MiTienda</h2></Link>
            <ul className="nav nav-pills nav-justified">
                <li><Link className="nav-link text-dark" to="/category/remeras">Remeras</Link></li>
                <li><Link className="nav-link text-dark" to="/category/camisas">Camisas</Link></li>
                <li><Link className="nav-link text-dark" to="/category/gorras">Gorras</Link></li>
            </ul>
            <Link className="nav-link text-dark" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};


export default Navbar;