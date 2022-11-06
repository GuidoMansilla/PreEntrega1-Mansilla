import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';
import PulseLoader from "react-spinners/PulseLoader";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const{id} = useParams();

    useEffect(()=>{  
        const collectionProd = collection(dataBase, 'productos');
        const ref = doc(collectionProd, id);

        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
        
    }, [id]);

    if(loading) {
        return(
            <div className='d-flex justify-content-center pt-5 pb-5'>
                <PulseLoader />
            </div>
        );
    };

    return (
        <div className=''>
            <ItemDetail item={item}/>
        </div>
    );
};


export default ItemDetailContainer;
