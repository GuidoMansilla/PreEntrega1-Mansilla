import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeItem, clear, precioTotal } = useContext(CartContext);
    const total = precioTotal();

    if(cart.length === 0){
        return(
            <div className='text-center pt-3 pb-3'>
                <p className='fs-2'>No hay elementos en el carrito.</p>
            </div>
        );
    };

    return (
        <div className="container">
            {cart.map((prod) => (
                <div key={prod.id} className="d-flex justify-content-around align-items-center pt-5" >
                    <img src={prod.img} alt={prod.title}  width="5%" />
                    <div class="d-flex flex-column">
                        <div>
                            <h2> {prod.title}    -     ${prod.price}</h2>
                        </div>
                        <div>
                            <h5> Cantidad: {prod.cantidad} - Subtotal: ${prod.price * prod.cantidad}</h5>
                        </div>
                    </div>
                    <button className="btn btn-secondary" onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}

            <div className='d-flex justify-content-center pt-5'>
                <h1>Total: ${total}</h1>
            </div>
            <div className='d-flex justify-content-center pt-1'>
                <Link className="btn btn-primary" to="/checkout">Continuar comprando</Link>
            </div>
            <div className='d-flex justify-content-center pt-1 pb-5'>
                <button className="btn btn-danger" onClick={clear}>Eliminar carrito</button>
            </div>
        </div>
    );


};

export default Cart;
