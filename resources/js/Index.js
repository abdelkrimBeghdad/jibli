import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import Product from './components/Product';
import App from './components/App';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Offre_To_Client from './components/Offre_to_Client';
import store from './components/Store';
import {Provider} from 'react-redux';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import Home from './components/Home';
import Footer from './components/Footer';
import RightSideBar from './components/RightSideBar';

const jwt_secret = 'my4dlu7JnwoGqPymg3jdF1uowWUEthk9hd33KPqLLbpCBS4AW8vAU6WNHgGccEsZ';
console.log("jwt_secret",typeof(jwt_secret));

const jwt_secret1 = "my4dlu7JnwoGqPymg3jdF1uowWUEthk9hd33KPqLLbpCBS4AW8vAU6WNHgGccEsZ";
console.log("jwt_secret1",typeof(jwt_secret1));



let token = cookie.get("token");
console.log("token",typeof(token));

if (token) {
  jwt.verify(token, "my4dlu7JnwoGqPymg3jdF1uowWUEthk9hd33KPqLLbpCBS4AW8vAU6WNHgGccEsZ", (err, decoded) => {
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
}


const render = () =>{
 ReactDOM.render(
                <Provider store={store}>  
                <RightSideBar />
{/*                   <Contact /> */}
                  <NavBar />
                 
                 
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
