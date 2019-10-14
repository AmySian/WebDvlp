import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  /*
  handleSubmit = event => {
    event.preventDefault();
  }*/

handleClick = event => {
  console.log("click");
  //alert("click!");
  handleSubmit(event);
}

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            onClick={this.handleClick}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Login

async function handleSubmit(event) {
  event.preventDefault();

  try {
    await (this.state.email==="web@et.esiea.fr");
    alert("Logged in");
  } catch (e) {
    alert("wrong email");
  }
}
