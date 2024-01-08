
import "./ItemCount.css"
function ItemCount({cant,decremento,incremento,agregarAlCarrito}){

 
    return(
        <div className="contenedor__contador">
            <div className="contenedor__boton">
                <button className="boton__Detalle boton__signos" onClick={decremento}><p className="boton__p signos">-</p></button>
                <p className="num_Carrito">{cant}</p>
                <button className="boton__Detalle boton__signos" onClick={incremento}><p className="boton__p signos">+</p></button>
            </div>
            <div className="contendor__agregar">
                <button className="boton__Detalle boton__agre"  onClick={agregarAlCarrito}>
                    <p className="boton__p boton__agregar__p">Agregar al carrito</p>
                </button>
            </div>
        </div>
    )


}


export default ItemCount;

