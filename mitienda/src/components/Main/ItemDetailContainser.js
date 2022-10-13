import React, { useEffect, useState } from 'react';
import { products } from '../../Mock/products.Mock';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const{id} = useParams();

    //Traigo la info de los productos
    useEffect(()=>{  
        const traerProducto = () => {
            return new Promise((resolve,reject) => {
                const prod = products.find((prod) => prod.id === Number(id)); 
                
                setTimeout(() => {
                    resolve(prod);
                }, 2000);
            });
        };

        traerProducto()
        .then((resolve)=>{
            setItem(resolve) 
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    );
};


export default ItemDetailContainer;