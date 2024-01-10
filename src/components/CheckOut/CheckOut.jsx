import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../FirebaseConf/config";
import "./CheckOut.css";

const CheckOut =()=>{


    const {register,handleSubmit}=useForm();
    const [pedidoId, setPedidoId] = useState("")
    const{carrito,precioTotal,vaciarCarrito}=useContext(CartContext)

    const comprar = (data)=> {
        const pedido = {
            cliente :data,
            productos:carrito,
            total:precioTotal()
        }     
        const pedidosRef= collection(db,"pedido");

        addDoc(pedidosRef,pedido)
            .then((doc)=>{
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if(pedidoId){
        return(
            <div>
               <h1 className="titulo"> Felicidades por tu compra </h1>
               <h2 className="compra__finalizada" >tu id de compra es : {pedidoId}</h2>
            </div>
            
        )
    }

    return (
        <div>
            <h1 className="titulo">Finalizar Compra</h1>
            <div className="container text-center">
                    <div className="row justify-content-md-center contenedor__productos" >
                        <div className="col col-lg-5">
                           <form action="" onSubmit={handleSubmit(comprar)} className="contenedor__form">
                            <h2 className=" subtitulo__datos">Nombre</h2>
                            <input type="text" placeholder="Ingresa tu Nombre"  className="contenedor__input"{...register("nombre")} />
                            
                            <h2 className="container__subtitulo subtitulo__datos">Apellido</h2>
                            <input type="text" placeholder="Ingresa tu Apellido"  className="contenedor__input"{...register("apellido")} />
                            
                            <h2 className="container__subtitulo subtitulo__datos ">Direccion</h2>
                            <input type="text" placeholder="Ingresa tu Direccion" className="contenedor__input" {...register("direccion")} />
                            
                            <h2 className="container__subtitulo subtitulo__datos">Telefono</h2>
                            <input type="number" placeholder="Ingresa tu Telefono"  className="contenedor__input"{...register("telefono")} />
                            
                            <h2 className="container__subtitulo subtitulo__datos">E-mail</h2>
                            <input type="email" placeholder="Ingresa tu email"  className="contenedor__input"{...register("email")} />
                            
                            <button type="submit" className="boton__general"><p className="boton__p">Enviar</p></button>
                            </form>  
                        </div>
                    </div>
            </div>
            
                
        </div>

    )

}


export default CheckOut;