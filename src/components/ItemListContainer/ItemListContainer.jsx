import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getListaProductos,getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer=({greeting})=>{
    const [productos,setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const asyncFunc = categoryId? getProductByCategory : getListaProductos
        
        asyncFunc(categoryId)
        .then(response=>{
            setProductos(response)
        })
        .catch(error=>{
            console.log(error)
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