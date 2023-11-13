import './ItemListContainer.css'
import { GiScythe } from "react-icons/gi";
export const ItemListContainer=({saludo})=>{
    return(
        <div>
            <h1 className="title is-1 is-spaced">{saludo}</h1>
            <GiScythe/>
        </div>
    )
}