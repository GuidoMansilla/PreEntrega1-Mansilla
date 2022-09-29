
const opciones = ['Opcion1', 'Opcion2', 'Opcion3', 'Opcion4'];

function NavBarItems () {
    return(
        opciones.map((opcion) => {
            return <li className="nav-item"><a className="nav-link link-light nav-link"  href="#">{opcion}</a></li>
        })
    ) 
}


export default NavBarItems;