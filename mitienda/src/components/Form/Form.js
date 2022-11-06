import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../services/firebaseConfig';
import { addDoc, collection, documentId, getDocs, query, serverTimestamp, where, writeBatch } from 'firebase/firestore';


const Form = () => {
    
    const [name, setName]                   = useState('');
    const [lastName, setLastName]           = useState('');
    const [phone, setPhone]                 = useState('');
    const [email, setEmail]                 = useState('');
    const [checkedEmail, setCheckedEmail]   = useState('');


    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, precioTotal, clear } = useContext(CartContext);

    const totalPrice = precioTotal();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if(email !== checkedEmail) {
            alert("Verifique que los mails coincidan.");
            setLoading(false);
            return;
        };
        
    
        try {
            const order = {
                buyer: { name, lastName, phone, email },
                items: cart,
                total: totalPrice,
                date: serverTimestamp(),
            };

            const ids = cart.map((prod) => prod.id);

            const productsRef = collection(dataBase, 'productos');

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), 'in', ids))
            );

            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];

            const batch = writeBatch(dataBase);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );

                const prodQuantity = productAddedToCart?.cantidad;

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const orderRef = collection(dataBase, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                clear();
            } else {
                console.log('No hay stock de algún producto');
            }
            console.log(outOfStock);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeCheckedEmail = (e) => {
        setCheckedEmail (e.target.value);
    };


    if (orderId) {
        return (
            <div className="container">
                <div className="d-flex justify-content-around align-items-center pt-5 pb-5">
                    <h2>Compra realizada con éxito, tu número de orden es ${orderId}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-12 d-flex justify-content-center pt-5">
                    <p className="fs-3">Por favor completa tus datos personales para continuar con la compra.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-12 d-flex justify-content-center pt-5 pb-5">
                    <form className="border border-dark rounded w-50" onSubmit={handleSubmit} action="">
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="formNombre" onChange={handleChangeName} value={name} />
                        </div>
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="formApellido" onChange={handleChangeLastName} value={lastName} />
                        </div>
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="formTelefono" onChange={handleChangePhone} value={phone} />
                        </div>
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="formEmail" onChange={handleChangeEmail} value={email} />
                        </div>
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <label className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" id="formCheckedEmail" onChange={handleChangeCheckedEmail} value={checkedEmail} />
                        </div>
                        <div className="mb-3 pt-2 ms-2 pe-2">
                            <button type="submit" className="btn btn-primary">{loading ? 'Comprando...' : 'Finalizar Compra'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;

