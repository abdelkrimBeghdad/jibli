import React ,{Component} from "react";
import "./CardIcon.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class CardIcon extends Component{
    
    render(){
        const { cartItems } = this.props;
    return <div id="cart-icon">
        <Link to='/cart'>
            <i className="fa fa-shopping-bag" style={{fontSize:32,color:'#38c172'}}></i>
            <span className="badge badge-danger">{ cartItems.length }</span>
        </Link>
    </div>
}
}

const mapStateToProps = state =>({
    cartItems : state.cart.items
})
export default connect(mapStateToProps)(CardIcon);