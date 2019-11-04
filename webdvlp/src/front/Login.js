import React, { Component } from "react";
import axios from 'axios';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
import "../App.css";

class Login extends React.Component {
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
    /*fetch('http://localhost:8080/posts/users/')
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      console.log(data);
    })
    .catch(err=>console.log(err))
    console.log("Avant le fetch")*/
    fetch('http://localhost:8080/posts/users/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    method: "POST",
    body: JSON.stringify(user)
    }).then(res=>{
      //if(res.json().valifation)
      res.json().then(result=>{
        if (result.validation === "User found, Connected")
          window.location="/dashboard";
      });
    }).catch(err=>{
      console.log("Il y a une erreur d'envoi");
    });
    /*if (this.state.email==="web@et.esiea.fr" && this.state.password==="123") {
    
    
    } else {
    alert("Wrong password or email");
    }*/
  }

handleClick = event => {
  console.log("click");

}

  render() {
    console.log(this.state.email);
    if (this.state.email==="web@et.esiea.fr" && this.state.password==="123") {
      alert("Logged in");}
      
      else {
    return (
      
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
    );
  }
}
}
export default Login
