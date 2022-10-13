import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { products } from '../../Mock/products.Mock';
import {useParams} from 'react-router-dom';

function ItemListContainer() {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    //Traigo la info de los productos
    useEffect(()=>{  
        const traerProductos = () => {
            return new Promise((resolve,reject) => {
                const prodFiltrados = products.filter((prod) => prod.category === categoryId);
                
                setTimeout(() => {
                    resolve(categoryId ? prodFiltrados : products); //Si categoryId tiene algo, resulvo prodFiltrados
                }, 2000);
            });
        };

        traerProductos()
        .then((resolve)=>{
            setItems(resolve) //Guardo los productos
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [categoryId]);

    //Renderizo
    return(
        <div className='item-list-container'>
            <ItemList items={items}/>
        </div>
    );

};


export default ItemListContainer;