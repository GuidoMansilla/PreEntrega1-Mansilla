import React, { useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const Navbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(dataBase, 'categorias');
        getDocs(collectionCat)
            .then((res) => {
                const categorias = res.docs.map((cat) => {
                    return {
                        id: cat.id,
                        ...cat.data(),
                    };
                });
                setCategories(categorias);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <nav className="nav nav-pills nav-fill bg-light">
            <Link className="nav-link navbar-brand" to="/"><h2>MiTienda</h2></Link>
            <ul className="nav nav-pills nav-justified">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link className="nav-link text-dark"  to={`/category/${cat.path}`}>
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link className="nav-link text-dark" to="/cart"><CartWidget /></Link>
        </nav>
    );
};


export default Navbar;