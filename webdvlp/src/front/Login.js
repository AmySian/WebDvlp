import React, { Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
//import "./App.css";


class Login extends Component {
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
    if (this.state.email==="web@et.esiea.fr" && this.state.password==="123") {
    alert("Logged in");
    
    } else {
    alert("Wrong password or email");
    }
  }

handleClick = event => {
  console.log("click");

}

  render() {
  
    console.log(this.state.email);
    if (this.state.email==="web@et.esiea.fr" && this.state.password==="123"){
      return(
        alert("Lod in")
        )
      }
      
      else {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <p> <h3>Email</h3>
        <input type="email" name="email" minLength="1" onChange={this.handleChange} />
        <h3>Password</h3>
        <input type="password" name="password" minLength="3" onChange={this.handleChange} />
        </p>
        <input type='submit' value="Log in" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}
}


export default Login
