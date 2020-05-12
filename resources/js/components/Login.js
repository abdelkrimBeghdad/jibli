import React, { Component } from "react";
import axios from "axios";
import cookie from 'js-cookie';
import {connect} from 'react-redux';
import AuthErrors from './AuthErrors';


class Login extends Component {

    constructor(props){
        super (props);
        this.state = {email:'',password:'',errors: {} }
    }


    handelForm = (e) =>{
        e.preventDefault();
        const data ={email:this.state.email,password:this.state.password}
        
        axios
       // .post("http://127.0.0.1:8000/api/auth/login",data)
        .post("https://jiblii.herokuapp.com/api/auth/login",data)
        .then(res =>{
          
            cookie.set('token',res.data.access_token);
            //cookie.set('user',res.data.user);
            this.props.setLogin(res.data.user);
            this.props.history.push('/profile');
        })
        .catch(e => this.setState({ errors: e.response.data.errors }));
        //this.props.history.push('/profile');
    }

    handleInput =(e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value ;
        this.setState({[name]:value })
        
    }


    render() {
        const error = this.state.errors
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form onSubmit={this.handelForm}>
                                   <AuthErrors
                                        error={
                                        this.state.errors["result"]
                                            ? this.state.errors["result"]
                                            : null
                                        }
                                    />
                                    <div className="form-group row">
                                   
                                        <label className="col-md-4 col-form-label text-md-right">
                                            Email
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                onChange={this.handleInput}
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                type="email"
                                            />
                                             <AuthErrors
                                                error={
                                                    this.state.errors["email"]
                                                    ? this.state.errors["email"]
                                                    : null
                                                }
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">
                                            Password
                                        </label>
                                        <div className="col-md-6">
                                            <input
                                                onChange={this.handleInput}
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                type="password"
                                                autoComplete="off"
                                            />
                                            <AuthErrors
                                                error={
                                                    this.state.errors["password"]
                                                    ? this.state.errors["password"]
                                                    : null
                                                }
                                                />
                                        </div>
                                        
                                    
                                    
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                               
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    };
  };
  export default connect(null,mapDispatchToProps)(Login);