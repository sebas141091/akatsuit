import './App.css';
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CarritoCompra from './components/CartItem/CartItem'
import ItemListDetail from './components/ItemListDetail/ItemListDetal';
import CheckOut from './components/CheckOut/CheckOut';

import imgLogo from './components/img/logo.png';

import "bootstrap/dist/css/bootstrap.min.css"
import 'bulma/css/bulma.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  CartProvider } from "./Context/CartContext";

function App() {

 
  return (
    <div className="App">
        <CartProvider>
              <BrowserRouter>
                <NavBar img={imgLogo} opcion='Indumentaria' opcion2='Accesorios' opcion3='Manga'  />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Akatsuit'}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={""}/>}/>
                  <Route path='/Item/:itemId' element={<ItemListDetail/>}/>
                  <Route path='/Carrito' element={<CarritoCompra/>} />
                  <Route path='/CheckOut' element={<CheckOut/>}/>
                  <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                  
                </Routes>
              </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
