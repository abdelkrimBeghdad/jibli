import React, { Component , Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import Home from './Home';

 
    function NavBar(props) {
        const handleLogout = e => {
            e.preventDefault();
            cookie.remove("token");
            props.logout(); 
          };
        return(
            <Router>
                <div className="ab">
                     <nav className="navbar navbar-expand-sm navbar-dark text-center sticky-top" >
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/liste">liste</Link>
                            </li>
                            

                            {!props.loggedIn ? (
                                <Fragment>
                                     <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                               
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


                            </ul>
                            {/* <Provider store={store}> */}
                                    <CardIcon  />              
                            {/* </Provider>     */} 
                        </div>
                       
                    </nav>  

                  
                        {/* <Route exact path="/" />
                        {<Route exact path="/product" component={App} />} */}
                        {<Route exact path="/" component={Carousel} />}
                        {<Route exact path="/cart" component={Cart} />}
                        {<Route exact path="/product" component={App} />}
                        {<Route exact path="/liste" component={Cart} />}
                        {/* <Provider store={store}> */}
                        {<GuestRoute  exact path="/login" component={Login} />}
                        {<AuthRoute  exact path="/profile" component={Profile} />}
                        {<GuestRoute exact path="/register" component={Register} />}
                        {/* </Provider>    */}
                        <div>
                          {/*   <Carousel />
                            <Offre_To_Client />
                             */}
                            </div>
                </div>
            </Router>  
           
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