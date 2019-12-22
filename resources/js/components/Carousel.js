import React, { Component } from 'react';
import './carousel.css';


export default class Carousel extends Component {

  render() {
    return (
      <div>
        <div className="carousel">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                  alt="First slide" />
                <div className='carousel-content'>
                  <h1>Anything, anytime, anywhere.</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
                  alt="Second slide" />
                <div className='carousel-content'>
                  <h1>Postmate it.</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
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
          <div className="container">

          </div>
        </section>
     

        <div className="card-deck col-md-12 col-sm-12 col-lg-12">
          <div className="card">
            <img className="card-img-top" src="carousel/friuts.jpg" alt="Card image cap" />
            <div className="card-body">

              <p className="card-text">Friute</p>

            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="carousel/legume.jpg" alt="Card image cap" />
            <div className="card-body">


              <p className="card-text"><small className="text-muted">legume</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="carousel/alimentatinGenerale.jpg" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"><small className="text-muted">alimentationGenerale</small></p>
            </div>
          </div>
        </div>













      </div>
    )
  }


} 