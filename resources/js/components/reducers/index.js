import {combineReducers} from "redux";
import productReducer from "./productReducer";
import cart from "./cartReducer";
import AuthReducer from "../ReduxAuth/store/reducers/AuthReducer"

export default combineReducers({
    products :productReducer,
    cart :cart,
    auth :AuthReducer,
})