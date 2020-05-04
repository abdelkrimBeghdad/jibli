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

            <div className="row"  style={{  background: 'white' }}>
                <Router> 
                <div className="vh-100 col-2 hidden-md-down" style={{ height: '100vh' , marginTop :'70px' , background: '#009e7f' }}>
                    <br/><br/>
                    <ul className="navbar-nav mr-auto mx-auto" >
                        <Link className="nav-link" style={{ color: 'white',marginLeft :'20px' }} to="/account" >Account</Link>
                    </ul>
                   
                    <ul className="navbar-nav mr-auto mx-auto" >
                        <Link className="nav-link" style={{ color: 'white',marginLeft :'20px' }} to="/ListeOrders" >ListeOrders</Link>
                    </ul>
                   
                   
                </div>
                <div className='col-10'>
                    <section className="container" style={{ height: '100vh' ,marginTop :'70px' , width: '100%', background: 'white' }}>
                    {<AuthRoute  exact path="/account" component={Account} />}

                    {<AuthRoute  exact path="/ListeOrders" component={ListeOfOrdersOfClient} />}    
                    

                    </section> 
                </div></Router>
            </div>
        )
    }


}

  export default Profile;