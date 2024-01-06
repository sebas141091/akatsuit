import './ItemListContainer.css'
import { useState,useEffect } from 'react'
//import { getListaProductos,getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
/*importamos lo de firebase*/
 import { collection,getDocs, query,where } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const ItemListContainer=({greeting})=>{
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


    return(
        <div>
            <h1 className="title is-1 is-spaced">{greeting}</h1>
            
            <div className='container text-center '>
                <ItemList products={productos}/>
            </div>
        </div>
    )
}