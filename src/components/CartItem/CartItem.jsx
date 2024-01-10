import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import   "./CartItem.css"
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

 export const CartItem =()=>{
    const{carrito,precioTotal,vaciarCarrito,eliminarProducto}=useContext(CartContext)

    const handleVaciar=()=>{
        vaciarCarrito();
    }

    const handleEliminarProd=(item)=>{
        eliminarProducto(item);
    }
    return(
        <>
            <h1 className="titulo">Carrito</h1>
            <div className="contenedor__vaciar">
                <button className="boton__general boton__vaciar " onClick={handleVaciar}><p className="boton__p"> Vaciar  Carrito</p><MdOutlineRemoveShoppingCart className="icono__carrito"/></button>
            </div>
            {
            carrito.map((prod) => (
            
                <div key={prod.id}>
                    <div className="container text-center" >
                        <div className="row justify-content-md-center contenedor__productos" key={prod.id}>
                                <div className="col col-md-2 col-lg-3 contenedor__datos" >
                                    <img className="img__carrito" src={prod.img} alt={prod.name} />
                                </div>
                                <div className="col col-md-2 col-lg-4 contenedor__datos" >
                                    <h4 className="datos__producto">{prod.name}</h4>
                                    <h4 className="datos__producto">Cantidad: {prod.cant}</h4>
                                    <h4 className="datos__producto">Precio  x uni : {prod.price}</h4>
                                </div>
                                <div className="col col-md-2 col-lg-2 contenedor__datos contenedor__icono__delete"> 
                                
                                    <button className="botton__delete" onClick={()=>{handleEliminarProd(prod)}}> <RiDeleteBin5Line className="icono__delete"/></button>
                                </div>
                        </div>
                    </div>
                    <br />
                    
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <div className="contenedor__total">
                    <h2 className="carrito__titulo datos__producto__total"> Precio Total : {precioTotal()}</h2>
                    <div className="carrito__titulo">
                        
                        <Link to ='/CheckOut'><button className="boton__general" ><p className="boton__p"> Finalizar Compra</p></button></Link>
                        
                    </div>
                </div>
            </> :
            <h2 className="compra__finalizada">El carrito está vacío </h2>
        }
        </>
    )

}

export default CartItem;