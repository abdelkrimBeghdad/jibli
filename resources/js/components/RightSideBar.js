import * as React from 'react';

import './RightSideBar.css';
import {connect} from 'react-redux';
import SideBar from './sideBar';

class RightSideBar extends React.Component{

        state={
            ShowMe:false 
        }
      
      operation(){
            this.setState({ShowMe:!this.state.ShowMe});
        }

    render(){
      
        const { cartItems } = this.props;
        const price =cartItems.reduce((a, c) => (a + c.price * c.count), 0)
        return(
            <div>
        <div className='sidebar ' onClick={()=>this.operation()}>
  
           <span className='spanItems'>{cartItems.length}  Items</span>
      

           <span className="spanPrice">{price} Da</span>
            {/* {cartItems.length === 0  ? "0" : <h6>You have  items in the basket.</h6> }
             */}
           {/*  {price === 0 ? <div>0</div>: <h2><span  className="badge badge-light">{price} DA</span></h2>} */}
                 
         </div>
         
         <div >
      
         {this.state.ShowMe ?
             <SideBar onClick={this.operation.bind(this)}/>
         :null
     }

                  
                 
   </div> 
   </div>
      )}
      
               
    }
  
  const mapStateToProps = state =>({
      cartItems : state.cart.items,
      id_user: state.auth.user.id,
  })

  export default connect(mapStateToProps)(RightSideBar);
    
    

