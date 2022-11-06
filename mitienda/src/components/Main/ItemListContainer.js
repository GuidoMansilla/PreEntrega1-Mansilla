import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(()=>{  
        
        const collectionProd = collection(dataBase, 'productos'); 
     
        const q = categoryId
            ? query(collectionProd, where('category', '==', categoryId))
            : collectionProd;

        getDocs(q)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
            
        return () => setLoading(true);

    }, [categoryId]);


    if(loading) {
        return(
            <div className='d-flex justify-content-center pt-5 pb-5'>
                <PulseLoader />
            </div>
        );
    };

    return(
        <main>
            <div>
                <ItemList items={items}/>
            </div>
        </main>  
    );

};


export default ItemListContainer;
