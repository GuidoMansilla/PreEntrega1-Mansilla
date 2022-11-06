import { createContext, useState } from "react";

export const CartContext = createContext();  

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const producto = { ...item, cantidad };

        if (isInCart(producto.id)) {
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]); 
        }
    };


    const sumarCantidad = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart) => {

            if (prodDelCart.id === prodAgregado.id) {
                const prodActualizado = { ...prodDelCart, cantidad: prodDelCart.cantidad + prodAgregado.cantidad};
                return prodActualizado;
            } else {
                return prodDelCart;
            }

        });

        setCart(carritoActualizado);
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const removeItem = (id) => {
        const prodFiltrados = cart.filter((prod)=> prod.id !== id);
        setCart(prodFiltrados);
    };

    const clear = () => setCart([]);

    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            acc = acc + prod.cantidad;
        });
        return acc;
    };

    const precioTotal = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            acc = acc + (prod.price * prod.cantidad);
        });
        return acc;
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalUnidades, precioTotal }}>
           {props.children}
        </CartContext.Provider>
    );
};


export default Provider; 