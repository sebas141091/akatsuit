import {  useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail=({items})=>{
    const [cant,setCant] = useState(1);
 
    const incremento =()=>{
        if (cant<items.stock)
     //realizamos una veriicacion para agregar si es que hay stock
            setCant(cant+1);
    }
    const decremento =()=>{
        if (cant>1)     //realizamos una veriicacion para agregar quitar si es que hay algo agregado
            setCant(cant-1);
    }
 
    return(
        <div className="contenedor__detalles">
            <article  >
            <div className="contenedor__titulo">
                <div className="titulo__producto ">
                    {items.name}
                </div>
            </div>
            <div className="contenedor__img">
                <img  src={items.img} alt={items.name} />
            </div>
            <div className="card-body">
                    <p>categoria : {items.category}</p>
                    <p>descripcion : {items.description}</p>
                    <p>precio : {items.price}</p>
            
                <footer>
                    <ItemCount cant={cant} incremento={incremento}
                    decremento={decremento} />
                </footer>
                </div>
            </article>
        </div>
        )

}


export default ItemDetail