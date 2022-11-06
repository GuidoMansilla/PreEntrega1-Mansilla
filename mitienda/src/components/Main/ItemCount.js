import React, { useState } from 'react';


const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const { prueba } = props;

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    const agregar = () => {
        prueba(count);
    };

    return (
        <div className='d-flex flex-column w-25'>
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-secondary' disabled={count===props.initial} onClick={restar}>-</button>
                <p>{count}</p>
                <button className='btn btn-secondary' disabled={count===props.stock} onClick={sumar}>+</button> 
            </div>
            <button onClick={agregar}  className='btn btn-primary'>Agregar al carrito</button>
        </div>
    );

};

export default ItemCount;
