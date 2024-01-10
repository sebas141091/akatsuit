import {AiOutlineShopping} from "react-icons/ai";
import './cartWidget.css';
import { useContext } from "react";
import { CartContext, CartProvider } from "../../Context/CartContext";
import { NavLink } from "react-router-dom";
export const CartWidget=({cant})=>{
    const {cantidadCarrito}=useContext(CartContext);
    return(
        <div className='contenedor__icono'>
                    <div className='icono'>
                        <CartProvider>
                            <NavLink  to = '/Carrito' className='icono__dibujo' >
                                <AiOutlineShopping />
                            </NavLink>
                        </CartProvider>
                        <p className='icono__burbuja'>{cantidadCarrito()}</p>
                    </div>
        </div>

        
    )
}