import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../components/action/productAction';
import {addToCart} from '../components/action/cartAction';
import './Product.css';
 class Product extends Component {
     
    UNSAFE_componentWillMount(){
         this.props.fetchProducts()
     }
    render() {
 
        const productItems = this.props.products.map(product =>(
            <div  className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex" key={product.id}>
       {/*                    <div className="card mt-2" >
                            <a href={`#${product.id}`}onClick={()=>this.props.addToCart(this.props.cartItems, product)}>

                                <img src={"upload/image/" +product.image} width={60} height={200} className="card-img-top" alt='Not Faund'/>
                            </a>
                                <div className="card-body" >
                                    <h5 className="card-title">{product.name}</h5>
                                    <h3 className="card-text">{product.price} Da</h3>
                                </div>
                                <button className="btn btn-danger"
                                onClick={()=>this.props.addToCart(this.props.cartItems, product)}>Add To Card</button>
                            </div>  */}

<div >
		    				<div className="product d-flex flex-column">
		    					<a href="#" className="img-prod"><img className="img-fluid" src={"upload/image/" +product.image} alt="Colorlib Template"/>
		    						
		    						<div className="overlay"></div>
		    					</a>
		    					<div className="text py-3 pb-4 px-3">
		    						<div className="d-flex">
		    							<div className="cat">
				    						<span>{product.category_name}</span>
				    					</div>
			    					</div>
		    						<h3>{product.name}</h3>
		  							<div className="pricing">
			    						<p className="price"><span className="price-sale">{product.price} Da</span></p>
			    					</div>
			    					<p className="bottom-area d-flex px-3">
									<a className="buy-now text-center py-2"
                                onClick={()=>this.props.addToCart(this.props.cartItems, product)}>Add To Card</a>
		    						</p>
		    					</div>
		    				</div>
		    			</div>





         </div>                       
                  
         ))
      
                                
                              

                        

      
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