import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import ListeOfOrdersOfClient from './ListeOfOrdersOfClient';
import Account from './Account';
import AuthRoute from './AuthRoute';
import HomeClient from './HomeClient';


class Profile extends Component {

    

    render() {
        return (

            <div className="row"><Router> 
                <div className="vh-100 col-2 hidden-md-down" style={{ height: '100%', background: 'black' }}>
                
                    <ul className="navbar-nav mr-auto mx-auto" >
                        <Link className="nav-link" style={{ color: 'white' }} to="/account" >Account</Link>
                    </ul>
                   
                    <ul className="navbar-nav mr-auto mx-auto" >
                        <Link className="nav-link" style={{ color: 'white' }} to="/ListeOrders" >ListeOrders</Link>
                    </ul>
                   
                   
                </div>
                <div className='col-10'>
                    <section className="container" style={{ height: '100%', background: 'white' }}>
                    {<AuthRoute  exact path="/account" component={Account} />}

                    {<AuthRoute  exact path="/ListeOrders" component={ListeOfOrdersOfClient} />}    
                    

                    </section> 
                </div></Router>
            </div>
        )
    }


}

  export default Profile;