import { useEffect,useState } from "react";
//import { getProductId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListDetail =()=>{

    const [items,setItem] = useState(null);
    const {itemId} = useParams();

    useEffect(()=>{
    const docRef=doc(db,"productos",itemId);
    getDoc(docRef)
        .then((resp)=> {
            setItem(
                 {...resp.data(), id:resp.id}
            )
        })
},[itemId])
    return(
        <div>
            {items && <ItemDetail items={items}/>}
        </div>
    )

}

export default ItemListDetail