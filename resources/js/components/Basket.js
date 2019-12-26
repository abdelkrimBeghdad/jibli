import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeFromCart ,addToCart ,decriseToCart} from './action/cartAction';

import './Basket.css';


class Basket extends Component {

    validate=()=>{
        const { cartItems ,id_user } = this.props;
        const data ={
           /* cartLength: cartItems.length ,
           id_user:id_user,
           items_name :cartItems.map(item => ([id_user,item.name,item.count,item.price])),
           data:this.props.cartItems */


           /* user_id:5,
           product_id :cartItems.map(item => (item.id)),
           name :cartItems.map(item => (item.name)),
           count :cartItems.map(item => (item.count)),
           price :cartItems.map(item => (item.price)), */



           itemOrder :cartItems.map(item => ([id_user,item.id,item.name,item.price,item.count])),
        }
        //console.log('abdelkrim',data)
        const daa=JSON.stringify(data)
        const products = {
            name: 'abdelkrim',
            price: 5,          }
        console.log(daa);
          axios
          .post('https://jiblii.herokuapp.com/api/auth/order',data)
          .then(res => {
            console.log(res.daa);
    
            // this.props.updateUser(res.data.user);
          })
          .catch(e => this.setState({ errors: e.response.data }));
    }

    
    render() {
        const { cartItems } = this.props;
        
        
        return (



            <div className="basket">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
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

                        

                        <b>Sum: {cartItems.reduce((a, c) => (a + c.price * c.count), 0)}
                        </b>
                        <button style={{ float: 'right' }} onClick={this.validate} className="btn btn-primary">checkout</button>
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