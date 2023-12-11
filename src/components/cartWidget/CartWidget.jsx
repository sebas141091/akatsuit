import {AiOutlineShopping} from "react-icons/ai";

import './cartWidget.css';
export const CartWidget=({cant})=>{
    return(
        <div className='contenedor__icono'>
                    <div className='icono'>
                        <div className='icono__dibujo'>
                            <AiOutlineShopping />
                        </div>
                        <p className='icono__burbuja'>45</p>
                    </div>
        </div>
    )
}