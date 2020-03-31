import React ,{Component} from 'react'
import {connect} from 'react-redux'


 class ListeOfOrdersOfClient extends Component{
    constructor(props) {
        super(props);
        this.state = { id: props.id, data :[] };

      }
    
      componentDidMount () {
        const id = this.props.id

        axios.get(`http://127.0.0.1:8000/api/ListeOrders/${id}`).then(response => {
            this.setState ( {data :response.data});
            console.log(this.state.data)
        })
      }
    
      

    render() {
        const { data, id } = this.state
        return (
          <section className="container" style={{ height: '100%', background: 'white' }}>
   <br/>
            <div className="row">
               
              
           
                    {data.map(task =>(
                      
                      task.state === 1 ?
                        <div className="col mb-4" key={task.id}>
                         <div className="card text-white bg-success  mb-3" style={{width :'18rem'}} >
                         <div className="card-header">{task.created_at}</div>
                          
                        
                        
                          <div className="card-body">
                           {task.orders.map(items => (
                            
                            <div key ={items.id}>
                              {items.name}    {items.price}
                            </div>
                      
                            
                           ))}  </div> 
                         </div>
                        
                       </div>
                        
                        :
                        <div className="col mb-4" key={task.id}>
                        <div className="card text-white bg-dark  mb-3" style={{width :'18rem'}} >
                        <div className="card-header">{task.created_at}</div>

                         
                        <div className="card-body">
                           {task.orders.map(items => (
                            
                            <div key ={items.id}>
                              {items.name}    {items.price}
                            </div>
                      
                            
                           ))}  </div> 
                        </div>
                       
                      </div>
                
          
                   ))}
                  
                  
                

                     

                    



                
        
                 
        
     
               
           
            </div>     </section>
        )
    }

}

const mapStateToProps = state => {
    return {
      id: state.auth.user.id,

    };
  };
  export default connect(
    mapStateToProps,
    null
  )(ListeOfOrdersOfClient);