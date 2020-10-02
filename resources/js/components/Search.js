import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts,sortProducts,searchProducts } from './action/productAction';
import './Filter.css';

class Search extends Component{


    render(){
    
        return(
            
             <div className=" d-flex justify-content-center ">
         
   
         <div class="col-lg-12">
    <input  placeholder="Search ..." onChange={(e) =>this.props.searchProducts(this.props.products, e.target.value)}
            className="form-control  mr-2" name="search" id="search"/>
             </div>    

                <button className="btn btn-outline-success mr-1"   
                 onClick={(e) =>this.props.sortProducts(this.props.filtredProducts, 'highest')}>

                <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>

                </button>
                <button className="btn btn-outline-success mr-1"
                 onClick={(e) =>this.props.sortProducts(this.props.filtredProducts, 'lowest')}>
                <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>

                </button>
            
                    {/* 
                <select className="form-control" value={this.props.sort}
                         onChange={(e) =>this.props.sortProducts(this.props.filtredProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to highest</option>
                            <option value="highest">Highest to lowest</option>
                        </select>
                     */}
                
            </div>
        )
    }
}


const mapStateToProps = state =>({
    products :state.products.items,
    filtredProducts :state.products.filtredItems,
    category_name :state.products.category_name,
    sort :state.products.sort,
    searchProducts :state.products.filtredItems,

})
export default connect(mapStateToProps,{filterProducts,sortProducts,searchProducts})(Search);