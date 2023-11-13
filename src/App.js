
import './App.css';
import { NavBar } from './components/navBar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import imgLogo from './components/img/logo.png';
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
     <NavBar img={imgLogo} opcion='Hombres' opcion2='Mujeres' opcion3='Niños' opcion4='Accesorios' />
     <ItemListContainer saludo='bienvenido a mi pagina pirata'/>
    </div>
  );
}

export default App;
