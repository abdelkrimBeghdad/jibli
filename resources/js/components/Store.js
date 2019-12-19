import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const initialState = {
    auth: {
        loggedIn: false,
        user: {}
      }
};  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( rootReducer ,
                            initialState,
                            composeEnhancer(applyMiddleware(thunk)),
                            )

