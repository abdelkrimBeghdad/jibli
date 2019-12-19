import React , {Component} from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import AuthErrors from './AuthErrors';

export default class Register extends Component{

    constructor(props){
        super (props);
        this.state = {firstName:"",
                      lastName :"",
                      address :"",
                      phone:"",
                      point:"", 
                      email:"", 
                      password:"", 
                      password_confirme:"",
                      errors: {} };

    }


    handelForm = (e) =>{
        e.preventDefault();
        const data ={firstName :this.state.firstName,
                     lastName  :this.state.lastName,
                     address :this.state.address ,
                     phone :this.state.phone ,
                     point :this.state.point , 
                     email:this.state.email,
                     password:this.state.password,
                     password_confirme: this.state.password_confirme,  
        }

        axios
        .post("http://127.0.0.1:8000/api/auth/register",data)
        .then(res =>{
            cookie.set('token',res.data.access_token)
            cookie.set('user',res.data.user)
            this.props.history.push('/profile');

        })
        
        .catch(e => this.setState({ errors: e.response.data.errors })
        );
        console.log(data);
    }

    handleInput =(e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value ;
        this.setState({[name]:value })
       // this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>

                        <div className="card-body">
                            <form onSubmit={this.handelForm}>
                              
                            <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                          <input  onChange={this.handleInput} type="text" className="form-control" name="firstName" id="firstName" />
                          <AuthErrors
                            error={
                                this.state.errors["firstName"] ? this.state.errors["firstName"] : null
                            }
                        />
                        </div>
                        
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                          <input  onChange={this.handleInput} type="text" className="form-control" name="lastName" id="lastName" />
                          <AuthErrors
                            error={
                                this.state.errors["lastName"] ? this.state.errors["lastName"] : null
                            }
                        />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                          <input  onChange={this.handleInput} type="text" className="form-control" name="address" id="address" />
                          <AuthErrors
                            error={
                                this.state.errors["address"] ? this.state.errors["address"] : null
                            }
                        />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">phone</label>
                        <div className="col-sm-10">
                          <input  onChange={this.handleInput} type="text" className="form-control" name="phone" id="phone" />
                          <AuthErrors
                            error={
                                this.state.errors["phone"] ? this.state.errors["phone"] : null
                            }
                        />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">point</label>
                        <div className="col-sm-10">
                          <input  onChange={this.handleInput} type="text" className="form-control" name="point" id="point" />
                          <AuthErrors
                            error={
                                this.state.errors["point"] ? this.state.errors["point"] : null
                            }
                        />
                        </div>
                    </div>

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
                                                this.state.errors["email"] ? this.state.errors["email"] : null
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
                                        />
                                        <AuthErrors
                                            error={
                                                this.state.errors["password"] ? this.state.errors["password"] : null
                                            }
                                        />
                                    </div>
                                                     
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">
                                        Confirm Password
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            onChange={this.handleInput}
                                            className="form-control"
                                            name="password_confirme"
                                            id="password_confirme"
                                            type="password"
                                        />
                                         <AuthErrors
                                            error={
                                                this.state.errors["password_confirme"] ? this.state.errors["password_confirme"] : null
                                            }
                                        />
                                    </div>
                                                     
                                </div>


                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Register"
                                        />
                                           
                                         
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }





}