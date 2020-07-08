import React, { Component , Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link ,Switch,HashRouter  } from "react-router-dom";
import Product from './Product';
import './Navbar.css';
import CardIcon from './CardIcon';
import App from './App';
import Cart from'./Cart';
import Index from '../Index';
import Carousel from './Carousel';
import Offre_To_Client from './Offre_to_Client';
import store from './Store';
import {Provider} from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import GuestRoute  from './GesteRoute';
import AuthRoute from './AuthRoute';
import {connect} from 'react-redux';
import cookie from 'js-cookie';
import ListeOfOrdersOfClient from './ListeOfOrdersOfClient';
import Account from './Account';
import { useState, useEffect } from "react";
import Google from './Google';
import LoginGoogle from './LoginGoogle';
 
    function NavBar(props) {
        const handleLogout = e => {
            e.preventDefault();
            cookie.remove("token");
            props.logout(); 
          };

      const [Bg, setBg] = useState("transparent");
      const listenScrollEvent = event => {
        if (window.scrollY < 613) {
          return setBg("transparent");
        } else if (window.scrollY > 10) {
          return setBg("#ffffff");
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    
        return () => window.removeEventListener("scroll", listenScrollEvent);
      }, []);
        return(
            <Router    >
                <div className=''>
               
                     <nav className="navbar navbar-expand-sm fixed-top " style={{backgroundColor: Bg}} >
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mx-auto">
                            <div style={{margin: '0 auto'}}> 
                            {/* <input  onChange={(e) =>this.props.searchProducts(this.props.products, e.target.value)}
                             className="form-control" name="search" id="search"/> */}
                        </div>
                              

                            </ul>
                            {/* <Provider store={store}> */}
                      
                        


                            {!props.loggedIn ? (
                                <Fragment>
                                    <Link  to="/login">  
                                        <button className="btn btn-outline-success mr-4">Login</button>
                                        </Link>

                                        <Link  to="/apii">  
                                        <button className="btn btn-outline-success mr-4">google</button>
                                        </Link> 
                                   
                                </Fragment>
                            ) : (
                                <ul className="navbar-nav mr-auto mx-auto">

                                 <li className="nav-item">
                                    <Link className="nav-link" to="/profile" >Profile</Link>
                                 </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
                                </li>        
                                 </ul>
                            )}
                  
                              <div className='mr-4'>
                                    <CardIcon  />  
                                    </div>            
                            {/* </Provider>     */} 
                        </div>
                    </nav>  

                        {/* <Route exact path="/" />
                        {<Route exact path="/product" component={App} />} */}
                        {<Route exact path="/" component={Carousel} />}
                        {<AuthRoute exact path="/cart" component={Cart} />}
                        {<Route exact path="/product" component={App} />}


                     {/*    {<Route exact path="/apii" component={LoginGoogle} />}
                        {<Route exact path="/auth/google/" component={Google} />} */}

                        {<AuthRoute exact path="/liste" component={Cart} />}
                        {/* <Provider store={store}> */}
                        {<GuestRoute  exact path="/login" component={Login} />}
                        {<AuthRoute  exact path="/profile" component={Profile} />}
          {/*               {<AuthRoute  exact path="/account" component={Account} />}

                        {<AuthRoute  exact path="/ListeOrders" component={ListeOfOrdersOfClient} />}  */}
                        {<GuestRoute exact path="/register" component={Register} />}
                        {/* </Provider>    */}
                        <div>
                          {/*   
                            <Offre_To_Client />
                             */}
                            </div>
                            
                            

                </div>   
                 <Switch>
                    <Route exact path="/apii" component={LoginGoogle} /> 
                 <Route exact path="/api/auth/google" component={Google} />
                 </Switch>
                  
            
            </Router >  
             
             
         
        
        )   
    }
  


const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({ type: "SET_LOGOUT" })
    };
  }; 
  export default connect(
    mapStateToProps,
    mapDispatchToProps 
  )(NavBar);