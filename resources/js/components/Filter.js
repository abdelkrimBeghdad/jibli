import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts,sortProducts,searchProducts } from './action/productAction';
import './Filter.css';

class Filter extends Component{

    state= {
        categorie:[]
    }
    componentDidMount () {
        
       // axios.get(`http://127.0.0.1:8000/api/categorie`).then(response => {
       axios.get(`https://jiblii.herokuapp.com/api/categorie`).then(response => {
            /* this.setState ( {categorie :response}); */
          
            this.setState({categorie:response.data})
        })
      }


    render(){
       const {categorie} =this.state
    
        return(
            
             <div className="row ab">
            <input  onChange={(e) =>this.props.searchProducts(this.props.products, e.target.value)}
            className="form-control" name="search" id="search"/>

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
                            {categorie.map(categori =>
                                
                                <option key={categori.id} value={categori.name}>{categori.name}</option>
                                   )}
                                         

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
    searchProducts :state.products.filtredItems,

})
export default connect(mapStateToProps,{filterProducts,sortProducts,searchProducts})(Filter);