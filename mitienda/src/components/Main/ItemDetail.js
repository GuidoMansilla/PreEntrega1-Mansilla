import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';


const ItemDetail = (props) => {

    const [unidades, setUnidades] = useState(0);
    const { addItem } = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addItem(props.item, numero);
    };

    return(
        <div className="container">
            <div className="d-flex justify-content-around align-items-center pt-5 pb-5">
                <img src={props.item.img} alt={props.item.title} width="20%"></img>

                <div>
                    <h2>{props.item.title}</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    {unidades === 0 ? (
                        props.item.stock === 0 ? (
                            <h1>No hay stock</h1>
                        ) : (
                            <ItemCount prueba={prueba} stock={props.item.stock} initial={1} />
                        )
                    ) : (
                        <Link to="/cart">Ir al carrito</Link>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ItemDetail;
