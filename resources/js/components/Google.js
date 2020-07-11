import React , {Component} from 'react'

import axios from "axios";
import cookie from 'js-cookie';
import {connect} from 'react-redux';
import AuthErrors from './AuthErrors';

class Google extends Component {
    constructor(props){
        super (props);
        this.state = {  loading: true,
            error: null,
            data: {},email:'',password:'',errors: {} }
    }
    

    componentDidMount() {
        //fetch(`http://127.0.0.1:8000/api/auth/google/callback${this.props.location.search}`, { headers: new Headers({ accept: 'application/json' }) })
        fetch(`https://jiblii.herokuapp.com/api/auth/google/callback${this.props.location.search}`, { headers: new Headers({ accept: 'application/json' }) })
        
        .then((response) => {
            console.log('loacation1',this.props.location)

                if (response.ok) {
                   
                    return response.json();
                }
                throw new Error('Something went wrong!');
            })
            .then((data) => {
                console.log('loacation2',this.props)

                
                //this.setState({ loading: false, data });
               

               /*  cookie.set('token',data.user.name); */

               localStorage.setItem('token', data.access_token)

              // cookie.set('token',data.access_token); 
               this.props.setLogin(data.user);
               this.props.history.push('/profile');
              // cookie.set('user',data.user);
               //console.log(data.user)
            
            
            })
            .catch((error) => {
                this.setState({ loading: false, error });
                console.error(error);
            });
    }

    render() {
        const { loading, error, data } = this.state;
        if (loading) {
            return <div>Loading....</div>;
        }

        if (error) {
            return (
               
                    <div>
                        <p>Error:</p>
                        <code className="Code-block">{error.toString()}</code>
                    </div>
            );
        }

        return (
            
                <div>
                    <h1>abdelkrimmmmmmmmmmmmmmm</h1>
                    <details>
                        <summary>Welcome {data.user.name}</summary>
                        <p>Here is your info: </p>
                        <code className="Code-block">{JSON.stringify(data, null, 2)}</code>
                    </details>
                </div>
            
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    };
  };
  export default connect(null,mapDispatchToProps)(Google);