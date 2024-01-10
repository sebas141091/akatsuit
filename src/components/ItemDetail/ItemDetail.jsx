import {  useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../../Context/CartContext";

const ItemDetail=({items})=>{
    const [cant,setCant] = useState(1);
    const {agregarAlCarrito} = useContext(CartContext);

    const incremento =()=>{
            cant<items.stock && setCant(cant+1);
        }
        const decremento =()=>{
            cant>1 && setCant(cant-1)
        }

    return(
        <div >
           
            <div className="contenedor__titulo">
                <div className="titulo ">
                    {items.name}
                </div>
            </div>
            <div className="contenedor__detalle__prod">
                <div className="contenedor__img">
                    <img className="img-fluid" src={items.img} alt={items.name} />
                </div>
                <div className="detalle">
                        <p className="datos__producto">categoria : {items.category}</p>
                        <p className="datos__producto">descripcion : {items.description}</p>
                        <p className="datos__producto">precio : {items.price}</p>
                
                    <div>
                        <ItemCount cant={cant} incremento={incremento}
                        decremento={decremento} 
                        agregarAlCarrito={()=>{agregarAlCarrito(items,cant)}}
                        />
                    </div>
                </div>
            </div>
        </div>
        )

}


export default ItemDetail