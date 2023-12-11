import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail=({id,name,price,category,img,stock,description})=>{

    
    return(
        <div className="contenedor__detalles">
            <article  >
            <div className="contenedor__titulo">
                <div className="titulo__producto ">
                    {name}
                </div>
            </div>
            <div className="contenedor__img">
                <img  src={img} alt={name} />
            </div>
            <div className="card-body">
                    <p>categoria : {category}</p>
                    <p>descripcion : {description}</p>
                    <p>precio : {price}</p>
            
                <footer>
                    <ItemCount stock={10} stockini={1} onAdd={(cant)=>console.log('cantidad agregada',cant)}/>
                </footer>
                </div>
            </article>
        </div>
        )

}


export default ItemDetail