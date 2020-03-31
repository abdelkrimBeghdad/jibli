import  {ADD_TO_CART,REMOVE_FROM_CART,RESET_CART} from '../action/types';

const initialState = { items : [],cartItems:[]};

export default function (state = initialState ,action){
    switch (action.type){
        case ADD_TO_CART:     
            return { items :action.payload.cartItems };   
        case REMOVE_FROM_CART:     
            return { items :action.payload.cartItems };
        case RESET_CART:     
            return {items:[] };               
        default:
            return state;
    }

}
