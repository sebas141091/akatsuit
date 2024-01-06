import './NavBar.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { GiScythe } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
export const NavBar = ({img}) =>{
    return (
            <nav className='navBar'>
                <Link to = '/' className='contenedor__logo'>
                    <img className='logo' src={img} alt="" srcSet="" />
                </Link>
                <div className='opciones__seccion'>
                    <NavLink to = '/category/accesorio' className={'menus'}><GiScythe className='icono__aka'/>Accesorio</NavLink>
                    <NavLink to = '/category/indumentaria' className={'menus'}><GiScythe className='icono__aka'/>indumentaria</NavLink>                
                    <NavLink to = '/category/manga' className={'menus'}><GiScythe className='icono__aka'/>Manga</NavLink>
                    
                </div>
                <CartWidget/> 
            </nav>
            
            )
}