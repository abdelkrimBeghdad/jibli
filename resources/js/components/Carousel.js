import React, { Component } from 'react';
import './carousel.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Filter from './Filter';
import Product from './Product';
import Fruits from './Fruits';
import Footer from './Footer';
import Categorie from './Categorie';

export default class Carousel extends Component {
  render() {
    return (
      <div >
        <div className="bg"></div>
        <section style={{ backgroundColor: '#ffffff', paddingTop: '30px' }}>
          <Categorie />
        </section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12' >
              <Product />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
} 