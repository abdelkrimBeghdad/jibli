import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

import {removeFromCart ,addToCart ,decriseToCart} from './action/cartAction';

import './Basket.css';


class Basket extends Component {

   
    render() {
        const { cartItems } = this.props;
        
        return (
 <div className="basket">


     <div className='header'>
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
     </div>
               
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                  console.log(item.count),
                                   
                                <div key={item.id}>
                                    <div className="row justify-content-xs-center">
                                        <div className="col ">
                                         <b>{item.name}</b>
                                        <br/>
                                        {item.count} X {item.price}
                                        </div>
                                        <div className="col">
                                            <div className="input-group mb-3">
                                            <div className="input-group-prepend" id="button-addon3">
                                                <button onClick={()=>this.props.decriseToCart(this.props.cartItems, item)} className="btn btn-outline-danger" type="button">-</button>
                                                {/* <input type="" id="number" value={item.count} className='form-control form-control-xs' /> */}
                                                
        
                                                <div className="center">{item.count} </div>
                                                <button onClick={()=>this.props.addToCart(this.props.cartItems, item)} className="btn btn-outline-danger" type="button">+</button>
                                            </div>
                                              </div>
                                        </div>
                                        <div className="col ">
                                           <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                                     onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>X</button>     
                                       
                                        </div>
                                    </div>
                                               
                                    <hr/>
                                </div>))
                                
                            }
                        </ul>

                        

                       
                       <div className ='divFooter'> 
                        <button class="footer">
    <a class="checkout">Checkout</a>
    <span class="s">{cartItems.reduce((a, c) => (a + c.price * c.count), 0) }Da</span>
    </button>
                    </div>
                    </div>



                }
            </div>
        )
    }
}


const mapStateToProps = state =>({
    cartItems : state.cart.items,
    id_user: state.auth.user.id,
})
export default connect(mapStateToProps,{removeFromCart,addToCart,decriseToCart})(Basket);