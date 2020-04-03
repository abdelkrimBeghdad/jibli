import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_NAME,ORDER_PRODUCTS_BY_PRICE,SEARCH} from "./types";


export const fetchProducts =() =>(dispatch)=>{
    const  url ='/api/product'
    fetch(url)
    .then(res => res.json())
    
    .then(data=> {  
        return  dispatch({type : FETCH_PRODUCTS , payload : data}) ;
    });

   
}


export const filterProducts =(products,category_name) =>(dispatch)=>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_NAME,
        payload:{
            category_name : category_name ,
            items: category_name === ''? products : products.filter(a => a.category_name.toLowerCase().indexOf(category_name.toLowerCase())>=0)
        }
    })

}


export const searchProducts =(products,search_name) =>(dispatch)=>{
    return dispatch({
        type:SEARCH,
        payload:{
            search_name : search_name ,
            items: search_name === ''? products : products.filter(a => a.name.toLowerCase().indexOf(search_name.toLowerCase())>=0)
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