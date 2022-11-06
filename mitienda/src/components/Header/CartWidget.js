import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    const total = totalUnidades();

    return(
        <div className="">
            <FontAwesomeIcon icon={faCartShopping}/>
            {total > 0 &&
                <span> {total}</span>
            }
        </div>
    );
};

export default CartWidget;

