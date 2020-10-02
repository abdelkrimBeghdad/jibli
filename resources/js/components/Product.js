import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../components/action/productAction';
import { addToCart } from '../components/action/cartAction';
import './Product.css';
import PropTypes from "prop-types";
import Pagination from './Pagination';
import ProductItem from './ProductItem'
import Items from './Items';


class Product extends Component {
  state = {
    loading: false,
    currentPage: 1,
    itemsPerPage: 12,
    search :"",

  }


  UNSAFE_componentWillMount() {
    this.props.fetchProducts()
  }

   /* onChange = e =>{
    this.setState({search :e.target.value})
  }   */
  render() {
    const {search} = this.state
    const items = this.props.products

    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });;
   /*  console.log(items.length)

    const nameProducts = items.map(product=>product.name)
    console.log(nameProducts)
    if (search !== "" && nameProducts.indexOf( search )=== -1){
      return null
    } */

    const productItems = currentItems.map(item => (
      
      <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"  key={item.id}>
        <div >
          <div className="product d-flex flex-column">
            <div  className="img-prod"><img className="img-fluid" src={"upload/image/" + item.image} alt="product" />
            </div>
            
            <div className="text py-3 pb-4 px-3">
              <div className="d-flex">
                <div className="cat">
                  <span>{item.category_name}</span>
                </div>
              </div>
              <h3>{item.name}</h3>
              <div className="pricing ">
                <p className="price "><span className="price-sale">{item.price} Da</span></p>
              </div>
             
            
              <p className="bottom-area d-flex px-3">
                <a className="buy-now text-center py-2"
                  onClick={() => this.props.addToCart(this.props.cartItems, item)}>Add To Card</a>
              </p>           
            </div>
          </div>
        </div>





      </div>

    ))










    return (
      <div >
        <div className='row'>

        {productItems}
        </div>
        <Pagination itemsPerPage={this.state.itemsPerPage} totalIems={items.length} paginate={paginate} />
      </div>
    )




  }
}



const mapStateToProps = state => ({
  products: state.products.filtredItems,
  cartItems: state.cart.items,

});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Product);