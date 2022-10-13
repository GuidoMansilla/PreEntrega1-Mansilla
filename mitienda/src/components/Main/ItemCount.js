import React, { useState } from 'react';


const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    return (
        <div className='container-count'>
            <div className='count-btn'>
                <button disabled={count===props.initial} onClick={restar}>-</button>
                <p>{count}</p>
                <button disabled={count===props.stock} onClick={sumar}>+</button> 
            </div>
            <button className='add-btn'>Agregar al carrito</button>
        </div>
    );

};



export default ItemCount;