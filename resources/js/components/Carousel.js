import React ,{Component} from 'react';
import './carousel.css';


export default class Carousel extends Component{

    render(){
        return( 
            <div>
            <div className="carousel">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="First slide"/>
        <div className='carousel-content'>
         <h1>Anything, anytime, anywhere.</h1>
         </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
        alt="Second slide"/>
         <div className='carousel-content'>
         <h1>Postmate it.</h1>   
         </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        alt="Third slide"/>
         <div className='carousel-content'>
         <h5>Food, drinks and groceries available for delivery or pickup.</h5> 
         </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            </div>    








//categorie



<div class="card-deck col-md-12 col-sm-12 col-lg-12">
  <div class="card">
    <img class="card-img-top" src="carousel/friuts.jpg" alt="Card image cap"/>
    <div class="card-body">
     
      <p class="card-text">Friute</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="carousel/legume.jpg" alt="Card image cap"/>
    <div class="card-body">
     
    
      <p class="card-text"><small class="text-muted">legume</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="carousel/alimentatinGenerale.jpg" alt="Card image cap"/>
    <div class="card-body">
     <p class="card-text"><small class="text-muted">alimentationGenerale</small></p>
    </div>
  </div>
</div>













</div>
        )
    }


} 