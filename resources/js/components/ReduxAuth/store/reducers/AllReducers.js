import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const AllReducers = combineReducers({ AuthReducer: AuthReducer });

export default AllReducers;