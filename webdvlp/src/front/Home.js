import React, { Component } from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import dashboard from './Dashboard';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
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
        console.log(a);
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
              window.location="/dashboard";
            }
          });
        }).catch(err=>{
          console.log("Il y a une erreur d'envoi");
        });
      }

    handleClick = event => {
      }

    render() {
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