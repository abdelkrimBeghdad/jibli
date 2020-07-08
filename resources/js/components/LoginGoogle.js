import React , {Component} from 'react'

export default class LoginGoogle extends React.Component {
   
    state = {
        googleLoginUrl: null,
    };
    
      componentDidMount() {
       // fetch('http://127.0.0.1:8000/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
        fetch('https://jiblii.herokuapp.com/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
         
        .then((response) => {
                if (response.ok) {
                    return response.json();
                  
    
                }  console.log(response)
                throw new Error('Something went wrong!');
            })
            .then((data) => this.setState({ googleLoginUrl: data.url }))
            .catch((error) => console.error(error));
    }

    render() {
        const { googleLoginUrl } = this.state;
        console.log(googleLoginUrl)
        return (
          <div >

            <div style={{backgroundColor:'#ffffff' ,paddingTop:'100px'}}>
                {googleLoginUrl && (
                    <a className="App-link" href={googleLoginUrl}>
                        Sign in with Google
                    </a>
                )}
            </div> 

          </div >



        )}}

        