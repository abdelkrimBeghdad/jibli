import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import Basket from './Basket';
import store from './Store';
import { Provider } from 'react-redux';
import CardIcon from './CardIcon';
import { connect } from 'react-redux';

import { removeFromCart, addToCart, decriseToCart } from './action/cartAction';

import './Basket.css';

class Cart extends Component {
  validate = () => {
    const { cartItems, id_user } = this.props;
    const data = {
     
      itemOrder: cartItems.map(item => ([id_user, item.id, item.name, item.price, item.count])),
    }

    axios
      .post('http://127.0.0.1/api/auth/order', data)
      .then(res => {
        // this.props.updateUser(res.data.user);
      })
      .catch(e => this.setState({ errors: e.response.data }));
  }

  render() {
    const { cartItems } = this.props;
    return (
      <Provider store={store}>
        <div className='container mt-2'>
          <h1>Ecommerce Shoping Cart</h1>
          <hr />

          <div className="col-md-12">

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
                            <br />
                            {item.count} X {item.price}
                          </div>
                          <div className="col">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend" id="button-addon3">
                                <button onClick={() => this.props.decriseToCart(this.props.cartItems, item)} className="btn btn-outline-danger" type="button">-</button>
                                {/* <input type="" id="number" value={item.count} className='form-control form-control-xs' /> */}


                                <div className="center">{item.count} </div>
                                <button onClick={() => this.props.addToCart(this.props.cartItems, item)} className="btn btn-outline-danger" type="button">+</button>
                              </div>
                            </div>
                          </div>
                          <div className="col ">
                            <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                              onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>X</button>

                          </div>
                        </div>

                        <hr />
                      </div>))

                    }
                  </ul>

                  <b>Sum: {cartItems.reduce((a, c) => (a + c.price * c.count), 0)}
                  </b>
                  <button style={{ float: 'right' }} onClick={this.validate} className="btn btn-primary">checkout</button>
                </div>
              }
            </div>
          
                    </div>
        </div>
      </Provider>
    );
  }

}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  id_user: state.auth.user.id,
})
export default connect(mapStateToProps, { removeFromCart, addToCart, decriseToCart })(Cart);
