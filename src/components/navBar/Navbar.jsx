import './NavBar.css';
import { CartWidget } from './cartWidget/CartWidget';
import { GiScythe } from "react-icons/gi";
//import {AiOutlineShopping} from "react-icons/ai";

export const NavBar = ({img,opcion,opcion2,opcion3,opcion4}) =>{
    return (
        <header>
            <nav className='navBar'>
                <div className='contenedor__logo'>
                    <img className='logo' src={img} alt="" srcset="" />
                </div>
                <div className='contenedor__opciones'>
                    <ul className='opciones__seccion'>
                        <li className='seccion__destacado'><a href="#ref" className='link__destacado'><div className='menus'><GiScythe className='icono__aka'/>{opcion}</div></a></li>
                        <li className='seccion__hombre'><a href="#ref" className='link__hombre'><div className='menus'><GiScythe className='icono__aka'/>{opcion2}</div></a></li>
                        <li className='seccion__mujer'><a href="#ref" className='link__mujer'><div className='menus'><GiScythe className='icono__aka'/>{opcion3}</div></a></li>
                        <li className='seccion__ninio'><a href="#ref" className='link__niño'><div className='menus'><GiScythe className='icono__aka'/>{opcion4}</div></a></li>
                    </ul>
                </div>
                <CartWidget/> 
            </nav>
            
        </header>
            )
}