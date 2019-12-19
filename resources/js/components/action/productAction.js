import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_NAME,ORDER_PRODUCTS_BY_PRICE} from "./types";


export const fetchProducts =() =>(dispatch)=>{

    fetch('/api/product').then(res => res.json()).then(data=> {  
        return  dispatch({type : FETCH_PRODUCTS , payload : data}) ;
    });

}


export const filterProducts =(products,name) =>(dispatch)=>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_NAME,
        payload:{
            name : name ,
            items: name === ''? products : products.filter(a => a.name.indexOf(name)>=0)
        }
    })

}

export const sortProducts =(items,sort) =>(dispatch)=>{
   const  products = items.slice();
    if (sort !== '') {
        products.sort((a, b) =>(sort === 'lowest')? (a.price > b.price? 1 : -1): (a.price < b.price) ? 1 : -1)
      } else {
        products.sort((a, b) => (a.id > b.id ? 1 : -1));}
      
    return dispatch({
        type:ORDER_PRODUCTS_BY_PRICE,
        payload:{
            sort : sort,
            items: products
        }
    })

}   