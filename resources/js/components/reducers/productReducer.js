import  {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_NAME,ORDER_PRODUCTS_BY_PRICE,SEARCH} from '../action/types';

const initialState = { items : [] ,filtredItems :[] ,name :'' };

export default function (state = initialState ,action){
    switch (action.type){
        case FETCH_PRODUCTS:
            return { ...state, items: action.payload ,filtredItems: action.payload}; 
        case FILTER_PRODUCTS_BY_NAME:
            return { ...state, filtredItems: action.payload.items, name : action.payload.name };    
        case ORDER_PRODUCTS_BY_PRICE:
            return { ...state, filtredItems: action.payload.items, sort : action.payload.sort };   
            case SEARCH:
                return { ...state, filtredItems: action.payload.items, name : action.payload.name };                   
        default:
            return state;
    }

}
