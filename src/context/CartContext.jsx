import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito"))||[];

export const CartProvider= ({children}) =>{
    const [carrito,setCarrito]= useState(carritoInicial);

    const agregarAlCarrito =(items,cant)=>{
      
        const itemAgregado={...items,cant}
        const nuevoCarrito=[...carrito]
        const estaEnCarro=nuevoCarrito.find((producto)=>producto.id===itemAgregado.id) 
        
        estaEnCarro ? estaEnCarro.cant+=cant : nuevoCarrito.push(itemAgregado);
        setCarrito(nuevoCarrito)
    }

    const eliminarProducto=(item)=>{
        
        const esta = carrito.find((prod)=>{
           return prod.id===item.id
        })
       
        if(esta){
            const arrayN=carrito.filter((prod)=>{
                return prod.id!==esta.id 
            })
            setCarrito(arrayN);
           
        }
           


    }

    const cantidadCarrito=()=>{
        return carrito.reduce((acc,prod)=> acc+prod.cant,0)
    }

    const precioTotal=()=>{
        return carrito.reduce((acc,prod)=> acc+prod.price*prod.cant,0)
    }

    const vaciarCarrito =()=>{
        setCarrito([]);
    }
    useEffect(()=>{
        localStorage.setItem("carrito",JSON.stringify(carrito))
    },[carrito])

    return (
        <CartContext.Provider value={{
            carrito
            ,agregarAlCarrito
            ,cantidadCarrito
            ,precioTotal
            ,vaciarCarrito
            ,eliminarProducto
            }}>
            {children}
        </CartContext.Provider>
    )
     
}

