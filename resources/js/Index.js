import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import Product from './components/Product';
import App from './components/App';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Offre_To_Client from './components/Offre_to_Client';
import store from './components/Store';
import { Provider } from 'react-redux';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import Home from './components/Home';
import Footer from './components/Footer';
import RightSideBar from './components/RightSideBar';
import { Router,Redirect } from 'react-router-dom'
import './components/i18n';




const jwt_secret = 'my4dlu7JnwoGqPymg3jdF1uowWUEthk9hd33KPqLLbpCBS4AW8vAU6WNHgGccEsZ'

let token = cookie.get("token");


if (token) {


  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      cookie.remove("token");
      token = null;
    }
    else {
      const d = ["http://jiblii.herokuapp.com/api/auth/login", "http://jiblii.herokuapp.com/api/auth/google/callback"]
      console.log('T/F', !d.includes(decoded.iss))
      if (!d.includes(decoded.iss)) {
        cookie.remove("token");
        token = null;
      }

    }
    console.log('err', err);

    console.log('decoded');

    console.log('decoded', decoded);
  })
}
/* if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      cookie.remove("token");
      token = null;
    } else {
     // if ((decoded.iss === "http://127.0.0.1:8000/api/auth/login")|| (decoded.iss === "http://127.0.0.1:8000/api/auth/google/callback")){
      if ((decoded.iss === "https://jiblii.herokuapp.com/api/auth/login")|| (decoded.iss === "https://jiblii.herokuapp.com/api/auth/google/callback")){
        
      }else{
         //  if (decoded.iss !== "http://127.0.0.1:8000/api/auth/google/callback") {

      //if (decoded.iss !== "https://jiblii.herokuapp.com/api/auth/login") {
        cookie.remove("token");
        token = null;
      }
    }
  });
} */


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<div>Loading....</div>}>
        <RightSideBar />
        {/* <Contact /> */}
        <Router>
        <NavBar />
        </Router>
      </Suspense>
    </Provider>
    , document.getElementById('example')
  )
}


if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // axios.post("http://127.0.0.1:8000/api/auth/me").then(res => {
  axios.post("https://jiblii.herokuapp.com/api/auth/me").then(res => {
    console.log(res.data)
    console.log('res.data')

    store.dispatch({ type: "SET_LOGIN", payload: res.data });
    render();
  });
} else {
  render();
}
