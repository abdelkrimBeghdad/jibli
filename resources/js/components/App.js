import React ,{Component} from 'react';
import Product from'./Product';
import Filter from './Filter';
import Basket from './Basket';
import store from './Store';
import {Provider} from 'react-redux';
import Pagination from './Pagination';

export default class App extends Component{
     
  render() {
        return (
          <Provider store={store}>
            <div className='body'>
            <div className='container mt-2'>
                <h1>Ecommerce Shoping Cart</h1>
                <hr/>
                <div className='row'> 
                    <div  className='col-md-8' >
                        <Filter  />
                        <hr />    
                        <Product />     
                    </div>  
                    
                    <div className="col-md-4">
                      <Basket  />
                    </div>
                 </div>
                      
            </div>
            </div>
            <div className="col-md-4">
                      <Pagination  />
                    </div>
            </Provider>  
        );
    }

}

        