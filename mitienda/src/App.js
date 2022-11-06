import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainser';
import Footer from './components/Footer/Footer';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import Provider from './context/CartContext';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/checkout" element={<Form />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Provider> 
  );
}

export default App;
