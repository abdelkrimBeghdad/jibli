import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import ListeOfOrdersOfClient from './ListeOfOrdersOfClient';

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = { firstName: props.firstName, lastName : props.lastName ,
                       address : props.address, phone: props.phone,
                       email: props.email, errors: {} };
      }
    
      handleInput = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
      };
    
      handelForm = e => {
        e.preventDefault();
        const data = { firstName: this.state.firstName, lastName : this.state.lastName ,
                       address : this.state.address, phone: this.state.phone,
                       email: this.state.email };
    
        axios
          //.patch("http://127.0.0.1:8000//api/auth/update", data)
          .patch("https://jiblii.herokuapp.com/api/auth/update", data)
          .then(res => {
            console.log(res.data);
    
            // this.props.updateUser(res.data.user);
          })
          .catch(e => this.setState({ errors: e.response.data }));
      };






    render() {
        return (

            <div className="row">
               
                <div className='col-10'>
                    <section className="container" style={{ height: '100%', background: 'white' }}>
                   
                        <form onSubmit={this.handelForm}>
                                <h1>edite form</h1>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">First Name</label>
                                <div className="col-sm-10">
                                    <input onChange={this.handleInput}  value={this.state.firstName} type="text" className="form-control" name="firstName" id="firstName" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Last Name</label>
                                <div className="col-sm-10">
                                    <input onChange={this.handleInput} value={this.state.lastName} type="text" className="form-control" name="lastName" id="lastName" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input onChange={this.handleInput} value={this.state.address} type="text" className="form-control" name="address" id="address" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">phone</label>
                                <div className="col-sm-10">
                                    <input onChange={this.handleInput} type="text" value={this.state.phone} className="form-control" name="phone" id="phone" />
                                </div>
                            </div>


                            <div className="form-group row">

                                <label className="col-md-4 col-form-label text-md-right">
                                    Email
                                    </label>
                                <div className="col-md-6">
                                    <input
                                        onChange={this.handleInput} 
                                        value={this.state.email}
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                            </div>
                           

                                                     
                            <div className="form-group row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        value="Update"
                                    />


                                </div>
                            </div>
                        </form>

                    </section>
                </div>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
      firstName: state.auth.user.firstName,
      lastName: state.auth.user.lastName,
      address: state.auth.user.address,
      phone: state.auth.user.phone,
      email: state.auth.user.email
    };
  };
  export default connect(
    mapStateToProps,
    null
  )(Account);