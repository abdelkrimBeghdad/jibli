import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { filterProducts} from './action/productAction';
import { withTranslation } from 'react-i18next';


class Categorie extends Component{
    state= {
        categorie:[]
    }
    componentDidMount () {
        
      //  axios.get(`http://127.0.0.1:8000/api/categorie`).then(response => {
        axios.get(`https://jiblii.herokuapp.com/api/categorie`).then(response => {
            /* this.setState ( {categorie :response}); */
          
            this.setState({categorie:response.data})
        })
      }

  
    render(){
        const {categorie} =this.state
        const {t} =this.props
        return(
<div>
            
<div className="section-header">
            <h2 className="section-title">{t('Shop by Category')}</h2>
            <span className="line"></span>
          </div>


          <div className="container my-4">
<div className="row text-center">
  



          <div id="gallery" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner ">
        <div className="carousel-item active">
            <div className="row">
            {categorie.map(categori =>
                                <div className="col" key={categori.id} >
                                <figure className="figure" >
                                <img className="img-fluid" src="http://via.placeholder.com/800x450/592e83/ffffff?text=Image+3" onClick={() =>this.props.filterProducts(this.props.products,categori.name)} alt={categori.name}/>
                               {categori.name}

                           </figure>
                           </div>

                                   )}
         
                                         

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/592e83/ffffff?text=Image+3" alt="Image 3"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/230c33/ffffff?text=Image+4" alt="Image 4"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/b27c66/ffffff?text=Image+5" alt="Image 5"/>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <div className="row">
                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/f35b04/ffffff?text=Image+6" alt="Image 6"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/f18701/ffffff?text=Image+7" alt="Image 7"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/f7b801/ffffff?text=Image+8" alt="Image 8"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/7678ed/ffffff?text=Image+9" alt="Image 9"/>
                </div>

                <div className="col">
                    <img className="img-fluid" src="http://via.placeholder.com/800x450/3d348b/ffffff?text=Image+10" alt="Image 10"/>
                </div>
            </div>
        </div>
    </div>

   {/*  <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>

    <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a> */}
    <div className="controls-top">
        <a className="btn-floating" href="#gallery" data-slide="prev" style={{marginRight:200}}>           
            <i className="fa fa-chevron-left" style={{fontSize:32,color:'#38c172'}}> </i>
        </a>
        <a className="btn-floating" href="#gallery" data-slide="next">
            <i className="fa fa-chevron-right" style={{fontSize:32,color:'#38c172'}}> </i>
        </a>
      </div>
</div>
</div>
<br />
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
export default withTranslation()(connect(mapStateToProps,{filterProducts})(Categorie));