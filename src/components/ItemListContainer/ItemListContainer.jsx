import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
 import { collection,getDocs, query,where } from 'firebase/firestore';
import { db } from '../../FirebaseConf/config';

 const ItemListContainer=({greeting})=>{
    const [productos,setProductos] = useState([]);
    const {categoryId} = useParams();
   
    useEffect(()=>{
        const productosRef=collection(db,"productos");

        const q =categoryId?query(productosRef, where ("category","==",categoryId)):productosRef
        getDocs(q)
            .then((resp)=> {
                setProductos(

                resp.docs.map((doc)=>{
                    return {...doc.data(), id:doc.id}
                }))
            })

    },[categoryId])

    const mostrarTitulo =()=>{
        const a = greeting==="" ? categoryId:"bienvenidos a akatsuit" 
        return a;
    }
    return(
        <div>
            <h1 className="title is-1 is-spaced">{mostrarTitulo()}</h1>
            <div className='container text-center '>
                <ItemList products={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer;