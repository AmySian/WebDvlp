import React, { Component } from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import Dashboard from "./Dashboard.js"
import {BrowserRouter as Route,  Redirect} from 'react-router-dom'


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     fakeAuthCentralState.isAuthenticated === true ? 
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
  )} />
);

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate() {
     this.isAuthenticated = true;
  },
  signout() {
     this.isAuthenticated = false; 
  }
};

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          redirectToReferrer: false
        };
      }
      

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
          user: this.state.email,
          password: this.state.password
        }
        const a = new Headers();
        console.log();
        fetch('http://localhost:8080/posts/users/', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(user)
        }).then(res=>{
            console.log(res);
          res.json().then(result=>{
            if (result.validation === "User found, Connected")
            {
              console.log("redirect to reffer "+this.state.redirectToReferrer);
              console.log("variable d'authentifsication " +fakeAuthCentralState.isAuthenticated)
               fakeAuthCentralState.authenticate();
                this.setState(() => ({
                   redirectToReferrer: true
                }));
                console.log("Je suis là pd");
             console.log("variable d'authentification " +fakeAuthCentralState.isAuthenticated)
             console.log("redirect to reffer "+this.state.redirectToReferrer);
              //window.location="/dashboard";
            }
          });
        }).catch(err=>{
          console.log("Il y a une erreur d'envoi");
        });
      }

    handleClick = event => {
      }

    render() {

      /*const Public = () => <h3>Public Content</h3>;
     const Protected = () => <h3>Protected Content</h3>;



const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { redirectToReferrer } = this.state;
if (redirectToReferrer === true) {
         this.props.history.push(from.pathname);
      }*/
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { redirectToReferrer } = this.state;
if ( redirectToReferrer === true){
  console.log("Motherfucker");
        return(<Redirect to="/dashboard"/>)
         }         /*this.props.history.push(from.pathname);
      }s*/


        return (             
        <div>
            <Header/>
                <div className="Login">
                    <h1>Choose your Seat !</h1>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Email</h3>
                        <input type="email" name="email" minLength="1" onChange={this.handleChange} />
                        <h3>Password</h3>
                        <input type="password" name="password" minLength="3" onChange={this.handleChange} />
                        <input type='submit' value="Log in" onClick={this.handleClick} />
                        <ProtectedRoute path="/dashboard" component={Dashboard} />
                    </form>

                </div>
            <Footer/>
        </div>
        )
    }
} export default Home

/* Exemple de request type GET
fetch('http://localhost:8080/posts/users/')
        .then(res=>{
          return res.json();
        })
        .then(data =>{
          console.log(data);
        })
        .catch(err=>console.log(err))
        console.log("Avant le fetch")*/