import { useEffect,useState } from "react";
import { getProductId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemListDetail =()=>{

    const [productos,setProductos] = useState(null);
    const {itemId} = useParams();

    useEffect(()=>{
        getProductId(itemId)
        .then(response=>{
            setProductos(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[itemId])

    return(
        <div>
          <ItemDetail {...productos}/>
        </div>
    )

}

export default ItemListDetail