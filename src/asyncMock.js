import imgAcce1 from './components/img/accesorio1.png'
import imgAcce2 from './components/img/accesorio2.png'
import imgIndu1 from './components/img/indumentaria.png'
import imgIndu2 from './components/img/indumentaria2.png'
import imgManga1 from './components/img/manga.png'
import imgManga2 from './components/img/manga2.png'


const listaProductos=[
    {
        id:'1',
        name:'Espada y aretes',
        price:10000,
        category:'accesorio',
        img:imgAcce1,
        stock:25,
        description:'Espada y aretes'
    },
    {
        id:'2',
        name:'Espada',
        price:1000,
        category:'accesorio',
        img:imgAcce2,
        stock:25,
        description:'espada'
    },
    {
        id:'3',
        name:'Kimono',
        price:7500,
        category:'indumentaria',
        img:imgIndu1,
        stock:25,
        description:'Kimongo algodon'
    },
    {
        id:'4',
        name:'Remera',
        price:9000,
        category:'indumentaria',
        img:imgIndu2,
        stock:25,
        description:'Remera algodon'
    },
    {
        id:'5',
        name:'Manga Dbz',
        price:3000,
        category:'manga',
        img:imgManga1,
        stock:25,
        description:'Manga Dbz'
    },
    {
        id:'6',
        name:'Manga Db',
        price:2500,
        category:'manga',
        img:imgManga2,
        stock:25,
        description:'Manga Dbz'
    }
]

export const getListaProductos=()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(listaProductos)
        },500)
    })
}


export const getProductId=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                resolve(listaProductos.find(prod=> prod.id===productId))
            },500)
    })
}

export const getProductByCategory=(CategoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                resolve(listaProductos.filter(prod=> prod.category===CategoryId))
            },500)
    })
}


