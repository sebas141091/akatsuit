
import './App.css';
import { NavBar } from './components/navBar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import imgLogo from './components/img/logo.png';
import 'bulma/css/bulma.css'
import ItemListDetail from './components/ItemListDetail/ItemListDetal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const [carrito,setCarrito]= useState([]);

  

  return (
    <div className="App">

    <CartContext.Provider value={{carrito,setCarrito}}>
      <BrowserRouter>
        <NavBar img={imgLogo} opcion='Indumentaria' opcion2='Accesorios' opcion3='Manga'  />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Akatsuit'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Categoria'}/>}/>
          <Route path='/Item/:itemId' element={<ItemListDetail/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>

        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
