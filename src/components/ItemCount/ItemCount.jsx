import { useState } from "react";
import "./ItemCount.css"

function ItemCount({stock,stockini,onAdd}){

    const [cant,setCant] = useState(stockini);

    const incremento =()=>{
        if (cant<stock)     //realizamos una veriicacion para agregar si es que hay stock
            setCant(cant+1);
    }
    const decremento =()=>{
        if (cant>1)     //realizamos una veriicacion para agregar quitar si es que hay algo agregado
            setCant(cant-1);
    }

    return(
        <div className="contenedor__contador">
            <div className="contenedor__boton">
                <button className="boton__Detalle boton__signos" onClick={decremento}><p className="boton__p signos">-</p></button>
                <p className="num_Carrito">{cant}</p>
                <button className="boton__Detalle boton__signos" onClick={incremento}><p className="boton__p signos">+</p></button>
            </div>
            <div className="contendor__agregar">
                <button className="boton__Detalle boton__agre"  onClick={()=>onAdd(cant)} disabled={!stock}  >
                    <p className="boton__p boton__agregar__p">Agregar al carrito</p>
                </button>
            </div>
        </div>
    )


}


export default ItemCount;

