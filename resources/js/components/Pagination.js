import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

import {removeFromCart ,addToCart ,decriseToCart} from './action/cartAction';

import './Basket.css';

const Pagination = ({itemsPerPage , totalIems ,paginate}) =>{
    const pageNumbers = [];
    for(let i= 1 ; i<= Math.ceil(totalIems / itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav className='pagination justify-content-center' style={{color:'white',cursor: 'pointer'}}>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item' >
                        <a onClick={()=>paginate(number)}  className='page-link'  style={{backgroundColor:'#38c172'}}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;