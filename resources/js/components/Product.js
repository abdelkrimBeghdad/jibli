import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../components/action/productAction';
import {addToCart} from '../components/action/cartAction';

 class Product extends Component {
     
    UNSAFE_componentWillMount(){
         this.props.fetchProducts()
     }
    render() {
        const productItems = this.props.products.map(product =>(
            <div  className='col-md-4 col-sm-6 col-lg-3' key={product.id}>
                            <div className="card mt-4" >
                            <a href={`#${product.id}`}onClick={()=>this.props.addToCart(this.props.cartItems, product)}>

                                <img src={"upload/image/" +product.image} className="card-img-top" alt='Not Faund'/>
                            </a>
                                <div className="card-body" >
                                    <h2 className="card-title">{product.name}</h2>
                                    <div className="card-text">{product.price} Da</div>
                                </div>
                                <button className="btn btn-danger"
                                onClick={()=>this.props.addToCart(this.props.cartItems, product)}>Add To Card</button>
                            </div>
                        </div>  
        )
        )
        return (
            <div className='row'>
                {productItems}
            </div>
        )
    }
}


const mapStateToProps =  state =>({
    products: state.products.filtredItems,
    cartItems:state.cart.items
});

export default connect (mapStateToProps,{fetchProducts,addToCart})(Product);