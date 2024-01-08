import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import   "./CarritoDisenio.css"
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

 export const CarritoCompra =()=>{
    const{carrito,precioTotal,vaciarCarrito}=useContext(CartContext)

    const handleVaciar=()=>{
        vaciarCarrito();
    }

    return(
        <>
            <h1 className="carrito__titulo">Carrito</h1>
            <div className="contenedor__vaciar">
                <button className="boton__estilo boton__vaciar" onClick={handleVaciar}>Vaciar  Carrito<MdOutlineRemoveShoppingCart className="icono__carrito"/></button>
            </div>
            {
            carrito.map((prod) => (
                <div className="container text-center">
                    <div class="row justify-content-md-center contenedor__productos" key={prod.id}>
                    
                            <div className="col col-lg-2 contenedor__datos">
                                <img className="img__carrito" src={prod.img} alt={prod.name} />
                            </div>
                            <div className="col-md-auto contenedor__datos">
                                <h4 className="">{prod.name}</h4>
                                <h4 className="">Cantidad: {prod.cant}</h4>
                                <h4 className="">Precio  x uni : {prod.price}</h4>
                            </div>
                           
                    </div>
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2 className="carrito__titulo"> Precio Total : {precioTotal()}</h2>
                <div className="carrito__titulo">
                    <button className="boton__estilo" onClick={handleVaciar}>Terminar Compra</button>
                    
                </div>
            </> :
            <h2 className="carrito__titulo">El carrito está vacío :</h2>
        }
        </>
    )

}

