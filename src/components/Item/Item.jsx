import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id,name,img,price,stock})=>{
  
    return(
    <div className="col-sm-6 col-md-6 col-lg-4">    
        
        <div className="card">
            <div className="contenedor__titulo">
                <div className="titulo__producto ">
                    {name}
                </div>
            </div>
            <div className="contenedor__img">
                <img className="card-img-top img" src={img} alt={name} />
            </div>
            <div className="card-body">
                <p className="card-text datos__producto ">Precio: ${price}</p>
                <p className="card-text datos__producto">Stock Disponible: {stock}</p>
                <footer className="botonDetalle__producto">
                    <Link to={`/item/${id}`} className=" boton__general"><p className="boton__p">Ver detalle</p></Link>
                </footer>
            </div>
            
        </div>
    </div>
    )
}

export default Item