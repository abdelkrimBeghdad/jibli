import React ,{Component} from 'react';
import Product from'./Product';
import Filter from './Filter';
import Basket from './Basket';
import store from './Store';
import {Provider} from 'react-redux';
import CardIcon from './CardIcon';


export default class Cart extends Component{
     
  render() {
        return (
          <Provider store={store}>
            <div className='container mt-2'>
                <h1>Ecommerce Shoping Cart</h1>
                <hr/>
                
                    <div className="col-md-12">
                      <Basket  />          
                    </div>
                 </div>
            </Provider>  
        );
    }

}

        