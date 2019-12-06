import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Home from "./home";

let yup = require("yup");

let schema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(6, "Password has to be longer than 6 characters!")
    .required("Password is required!")
  // email: yup.string().email()
});

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      nameError: "",
      password: "",
      passwordError: "",
      istrue: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault(); /// stop reload
    const data = new FormData(e.target);
    console.log(data.get("username"));
    const username = data.get("username");
    const password = data.get("password");

    schema
      .isValid({
        username: username,
        password: password
      })
      .then(res => {
        if (res) {
          // Validation is correct calling api fetch
          // console.log("validate");
          // Api Call
          fetch("http://localhost:3001/user", {
            headers: new Headers({
              "Content-Type": "application/x-www-form-urlencoded"
            })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              data.forEach(element => {
                if (
                  element.username === username &&
                  element.password === password
                ) {
                  // this.setState({istrue: true})
                  // return <Redirect to="/Home" />;
                  this.props.history.push("/home"); // redirect

                  console.log("login corectly, redirect");
                } else {
                  // this.nameError = "error with name";
                  // this.passwordError = "error with password";
                  this.setState({ nameError: "Invalid Username/Password" });
                  setTimeout(() => {
                    this.setState({ nameError: "" });
                  }, 3000);
                  console.log("login error");
                }
              });
            });
        } else {
          // Validation is wrong
          console.log("in valid");
          let err;
          if (username.length === 0 || password.length === 0)
            err = "username/password is empty";
          else err = "Password has to be longer than 6 characters!";
          this.setState({
            nameError: err
          });
          setTimeout(() => {
            this.setState({ nameError: "" });
          }, 3000);
        }
      });

    // console.log('The form was submitted with the following data:');
  }

  render() {
    // const{email, password} = this.state;
    return (
      <div className="FormCenter">
        <h3>{this.state.nameError}</h3>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Username
            </label>
            <input
              type="username"
              id="user"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              errorText={this.state.usernameError}
              onChange={this.handleChange}
            />
            <div>{this.state.nameError}</div>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              errorText={this.state.passwordError}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button type="Submit" value="Submit" className="FormField__Button">
              Sign In
            </button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
