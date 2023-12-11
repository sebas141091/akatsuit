
import './App.css';
import { NavBar } from './components/navBar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import imgLogo from './components/img/logo.png';
import 'bulma/css/bulma.css'
import ItemListDetail from './components/ItemListDetail/ItemListDetal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
 

  return (
    <div className="App">
     <BrowserRouter>
      <NavBar img={imgLogo} opcion='Indumentaria' opcion2='Accesorios' opcion3='Manga'  />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Akatsuit'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Categoria'}/>}/>
        <Route path='/Item/:itemId' element={<ItemListDetail/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>

      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
