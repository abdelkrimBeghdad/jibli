import React, { Component } from 'react';
import './carousel.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Filter from './Filter';
import Product from './Product';
import Fruits from './Fruits';
import Footer from './Footer';

export default class Carousel extends Component {

  state = {
    googleLoginUrl: null,
};
  componentDidMount() {
    fetch('/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
        .then((response) => {
            if (response.ok) {
                return response.json();
              

            }  console.log(response)
            throw new Error('Something went wrong!');
        })
        .then((data) => this.setState({ googleLoginUrl: data.url }))
        .catch((error) => console.error(error));
}
 
render() {
  const { googleLoginUrl } = this.state;

    return (
      <div >

<div className="bg"></div>
     
<div >

<div style={{backgroundColor:'#ffffff' ,paddingTop:'30px'}}>
    {googleLoginUrl && (
        <a className="App-link" href={googleLoginUrl}>
            Sign in with Google
        </a>
    )}
</div> 

</div >

        {/* categorie */}


{/* 
        <section className="categorie section-padding">
          <div className="section-header">
            <h2 className="section-title">Popular Categories</h2>
            <span className="line"></span>
          </div>
          
          <div className="container my-4">
          <div className="card-deck col-md-12 col-sm-12 col-lg-12">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
              <img className="img-responsive" src="carousel/alimentatinGenerale.jpg" width={350} height={200} alt=""/>
              <div className="overlay">
                <h2>Alimentation Generale</h2>
                <a className="info" href="#">link here</a>
              </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
              <img className="img-responsive" src="carousel/legume.jpg" width={350} height={200} alt=""/>
              <div className="overlay">
                <h2>Legume</h2>
                <Link to="/product" className="info">legume</Link>
               
              </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
              <img className="img-responsive" src="carousel/friuts.jpg" width={350} height={200} alt=""/>
              <div className="overlay">
                <h2>Friuts</h2>
                <a className="info" href="#">link here</a>
              </div>
          </div>
        </div>

          
         
        </div>
          </div>
        </section>
     

        

    
        

<br></br>
<br></br>
<br></br>
 */}
<section style={{backgroundColor:'#ffffff' ,paddingTop:'30px'}}>


      <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <span className="line"></span>
          </div>
<div className="container my-4">
<div className="row text-center">
  
  <div className="col-md-4 col-4 col-sm-4  mb-4">
   
  <div className='im  bg-color-2 d-flex justify-content-center align-items-center mb-2'>
    <img className=" bg-color-2" alt="100*100" src="carousel/diet(1).png" data-holder-rendered="true"/>
    </div> 
    <h3 className="heading">Always Fresh</h3>
      <span>Product well package</span>
  </div>  <div className="col-md-4 col-4 col-sm-4 mb-4">
   
<div className='im  bg-color-3 d-flex justify-content-center align-items-center mb-2'>
   <img className="bg-color-3" alt="100*100" src="carousel/quality(1).png" data-holder-rendered="true"/>
  </div>
   <h3 className="heading">Superior Quality</h3>
<span>Quality Products</span>
 </div> 

  <div className="col-md-4 col-4 col-xs-4 mb-4">
  <div className='im  bg-color-4 d-flex justify-content-center align-items-center mb-2'>
    <img className="bg-color-4" alt="100x100" src="carousel/customer-service(1).png"
      data-holder-rendered="true"/>
      </div>
<h3 className="heading">Support</h3>
<span>24/7 Support</span>
  </div>
 

</div>

</div>
</section>
<div className='container'>

<div className='row'>
<div  className='col-md-12' >
                        <Filter  />
                        <hr />    
                        <Product />    


                  
      </div>
      </div>
      </div>
      <Footer />
      </div>  

    )

  }


} 