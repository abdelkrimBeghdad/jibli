import React, { Component } from 'react';
import Basket from './Basket';
import { removeFromCart, addToCart, decriseToCart,resetCart  } from './action/cartAction';
import { connect } from 'react-redux';
import { BrowserRouter as Router ,Redirect, Route, NavLink } from "react-router-dom";

import { withTranslation } from 'react-i18next';


class SideBar extends Component {

    state={redirect :false }
    

    validate = () => {
      const { cartItems, id_user } = this.props;
      const PriceTotale= cartItems.reduce((a, c) => (a + c.price * c.count), 0)
  
      const data = {
       
        itemOrder: cartItems.map(item => ([id_user, item.id, item.name, item.price, item.count,PriceTotale])),
      }
  
      axios
      // .post('http://127.0.0.1:8000/api/auth/order', data)
       .post('https://jiblii.herokuapp.com/api/auth/order', data)
        .then(res => { 
          console.log('regle')
          this.setState({redirect :true})
            
  
  
          // this.props.updateUser(res.data.user);
        })
        .catch(e => this.setState({ errors: e.response.data }));
    }
    render() {
        const { onClick } = this.props;
        const { cartItems } = this.props;
        const {t} =this.props;
        const { redirect } = this.state;
        if(redirect)
        {    this.props.resetCart()
            return <Router>
            <Redirect to='/product' /></Router>
        }
        return (
            <div className="wrapper">

                <nav id="sidebar">
                    <div className="header">
                        <span className='spanItem'>{cartItems.length} {t('Items')}</span>
                        <button className='btn btn-outline-success mr-4' onClick={onClick}> 
                            <span className="" role="button" ><i className="fa fa-bars" aria-hidden="true" style={{color:'#009e7f'}}></i></span>
                        </button>
                    </div>



                    <div className="basket">


                        {cartItems.length > 0 &&
                            <div>
                                <ul style={{ marginLeft: -25 }}>
                                    {cartItems.map(item => (
                                        console.log(item.count),

                                        <div key={item.id}>
                                            <div className="row justify-content-xs-center">
                                                <div className="col ">
                                                    <span >{item.name}</span>
                                                    <br />
                                                    <span>{item.price} X {item.count} {t('Piece')} </span>
                                                </div>
                                                <div className="col">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend" id="button-addon3">
                                                            <button onClick={() => this.props.decriseToCart(this.props.cartItems, item)} className="btn btn-outline-success rad" type="button">
                                                                <i className="fa fa-minus " aria-hidden="true"></i>
                                                            </button>
                                                            {/* <input type="" id="number" value={item.count} className='form-control form-control-xs' /> */}


                                                            <div className="center">{item.count} </div>
                                                            <button onClick={() => this.props.addToCart(this.props.cartItems, item)} className="btn btn-outline-success rad" >
                                                            <i className="fa fa-plus " aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col ">
                                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                                        onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>
                                                            <i className="fa fa-trash " aria-hidden="true"></i>
                                                        </button>

                                                </div>
                                            </div>

                                            <hr />
                                        </div>))

                                    }
                                </ul>

<Router>
                                {!this.props.loggedIn ? ( <Redirect to="/login" /> ) :
                                
                                <div className='divFooter'>
                                    <button className="footer" onClick={this.validate}>
                                        <a className="checkout">Checkout</a>
                                        <span className="s">{cartItems.reduce((a, c) => (a + c.price * c.count), 0)}Da</span>
                                    </button>
                                </div>}
</Router>
        
                            </div>



                        }
                    </div>


                </nav>
            </div>
        )
    }




}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    id_user: state.auth.user.id,
    loggedIn: state.auth.loggedIn,

})
export default withTranslation()(connect(mapStateToProps, {resetCart,removeFromCart, addToCart, decriseToCart })(SideBar));