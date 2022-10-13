import React from 'react';


const opciones = ['Opcion1', 'Opcion2', 'Opcion3', 'Opcion4'];

function NavBarItems () {
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
                opciones.map((opcion) => {
                    return <li className="nav-item"><a className="nav-link link-light"  href="#">{opcion}</a></li>
                })
            }
        </ul> 
    );
}


export default NavBarItems;