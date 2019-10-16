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
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <p>Email
        <input type="email" name="email" minLength="1" onChange={this.handleChange} />
        Password
        <input type="password" name="password" minLength="3" onChange={this.handleChange} />
        </p>
        <input type='submit' value="Log in" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}
export default Login
