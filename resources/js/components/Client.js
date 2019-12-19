import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Client extends Component {
  

    
    render() {
        return (
            <div className="container">
               <br></br>
               abdelkrim Client
              

            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Client />, document.getElementById('example'));
}
