import React, { Component } from 'react';
import './carousel.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Carousel extends Component {

  render() {
    return (
      <div>
        <div className="carousel">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="carousel/car1.jpg"
                  alt="First slide" />
                <div className='carousel-content'>
                  <h1>Anything, anytime, anywhere.</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="carousel/car3.jpg"
                  alt="Second slide" />
                <div className='carousel-content'>
                  
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="carousel/car2.jpg"
                  alt="Third slide" />
                <div className='carousel-content'>
                  <h5>Food, drinks and groceries available for delivery or pickup.</h5>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>








        {/* categorie */}



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

<section>


      <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <span className="line"></span>
          </div>
<div className="container my-4">
<div className="row text-center">
  <div className="col-md-3 mb-4">
  <div className='im  bg-color-1 d-flex justify-content-center align-items-center mb-2'>
   
    <img className="bg-color-1" alt="64*64" src="carousel/shipped.png"data-holder-rendered="true"/>
    </div> 
    <h3 className="heading">Free Shipping</h3>
<span>On order over $100</span>
  </div>
 
  <div className="col-md-3 mb-4">
   
  <div className='im  bg-color-2 d-flex justify-content-center align-items-center mb-2'>
    <img className=" bg-color-2" alt="100*100" src="carousel/diet(1).png" data-holder-rendered="true"/>
    </div> 
    <h3 className="heading">Always Fresh</h3>
      <span>Product well package</span>
  </div>  <div className="col-md-3 mb-4">
   
<div className='im  bg-color-3 d-flex justify-content-center align-items-center mb-2'>
   <img className="bg-color-3" alt="100*100" src="carousel/quality(1).png" data-holder-rendered="true"/>
  </div>
   <h3 className="heading">Superior Quality</h3>
<span>Quality Products</span>
 </div> 

  <div className="col-md-3 mb-4">
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

      </div>
    )
  }


} 