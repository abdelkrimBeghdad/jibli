import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts,sortProducts } from './action/productAction';
import './Filter.css';

class Filter extends Component{
    render(){
        return(
             <div className="row ab">
                <div className="col-md-4">
                    {this.props.filtredProducts.length} products found
                </div>

                <div className="col-md-4">
                    <label>Order by
                <select className="form-control" value={this.props.sort}
                         onChange={(e) =>this.props.sortProducts(this.props.filtredProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to highest</option>
                            <option value="highest">Highest to lowest</option>
                        </select>
                    </label>
                </div>

                <div className="col-md-4">
                    <label> Filter Name
                        <select className="form-control" value={this.props.category_name} 
                          onChange={(e) =>this.props.filterProducts(this.props.products, e.target.value)}>
                                    <option value="">ALL</option>
                                    <option value="fruit">fruit</option>
                                    <option value="legume">legume</option>
                                    <option value="alimentation">alimentation</option>

                        </select>
                    </label>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>({
    products :state.products.items,
    filtredProducts :state.products.filtredItems,
    category_name :state.products.category_name,
    sort :state.products.sort,

})
export default connect(mapStateToProps,{filterProducts,sortProducts})(Filter);