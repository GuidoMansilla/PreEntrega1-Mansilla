import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {

    return (
        <div className="card" >
            <img src={prod.img} alt={prod.title} class="card-img-top"></img>
            <div className="card-body">
                <h2>${prod.price}</h2>
                <h6>{prod.title}</h6>
                {prod.stock === 0 ? (
                    <h6 className="btn btn-danger disabled">Sin Stock</h6>
                ) : (
                    <Link className="btn btn-primary" to={`/item/${prod.id}`}>Ver Detalle</Link>
                )}
            </div>
        </div>
    );
};

export default Item;



/*
return (
        <div className="card" >
            <img src={prod.img} alt={prod.title} class="card-img-top"></img>
            <div className="card-body">
                <h2>${prod.price}</h2>
                <h6>{prod.title}</h6>
                {prod.stock === 0 ? (
                    <h6 className="btn btn-danger disabled">Sin Stock</h6>
                ) : (
                    <Link className="btn btn-primary" to={`/item/${prod.id}`}>Ver Detalle</Link>
                )}
            </div>
        </div>
    );


*/

