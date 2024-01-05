import { useEffect,useState } from "react";
import { getProductId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListDetail =()=>{

    const [productos,setProductos] = useState(null);
    const {itemId} = useParams();
/* esto es con json 
    useEffect(()=>{
        getProductId(itemId)
        .then(response=>{
            setProductos(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[itemId])
 esto con con firebase*/

    useEffect(()=>{
    const docRef=doc(db,"productos",itemId);
    getDoc(docRef)
        .then((resp)=> {
            setProductos(
                 {...resp.data(), id:resp.id}
            )
        })
},[itemId])

    return(
        <div>
          <ItemDetail {...productos}/>
        </div>
    )

}

export default ItemListDetail