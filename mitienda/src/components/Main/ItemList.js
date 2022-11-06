import React from 'react';
import Item from './Item';

const ItemList = (props) => {

    return (
        <div className='d-flex justify-content-center pt-5 pb-5'>
            {
                props.items.map((prod) => {
                    return <Item prod={prod} key={prod.id}/> 
                })
            }
        </div>
    );

};





export default ItemList;