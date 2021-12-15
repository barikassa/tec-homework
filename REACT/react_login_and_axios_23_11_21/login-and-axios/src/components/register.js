import React, { Component } from "react";

export default class Register extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  isvalidfName = () => this.state.fName.length === 0;
  isvalidlName = () => this.state.lName.length === 0;
  isvalidemail = () => this.state.email.length === 0;
  isvalidpassword = () => this.state.password.length === 0;
  isvalidconfirmPassword = () => this.state.confirmPassword.length === 0;

  render() {
    let isValiditian1 = this.isvalidfName();
    let isValiditian2 = this.isvalidlName();
    let isValiditian3 = this.isvalidemail();
    let isValiditian4 = this.isvalidpassword();
    let isValiditian5 = this.isvalidconfirmPassword();

    let getfnameValue = (env) => {
      this.setState({ fName: env.target.value });
    };

    let getLnameValue = (env) => {
      this.setState({ lName: env.target.value });
    };
    let getemailValue = (env) => {
      this.setState({ email: env.target.value });
    };
    let getLpasswordValue = (env) => {
      this.setState({ password: env.target.value });
    };
    let getConfirmPasswordValue = (env) => {
      this.setState({ confirmPassword: env.target.value });
    };
    let clickHendler = () => {
      console.log(this.state);
    };

    return (
      <div>
        <input onChange={getfnameValue} type="text" placeholder="First name" />
        <input onChange={getLnameValue} type="text" placeholder="First name" />
        <input onChange={getemailValue} type="text" placeholder="First name" />
        <input
          onChange={getLpasswordValue}
          type="text"
          placeholder="First name"
        />
        <input
          onChange={getConfirmPasswordValue}
          type="text"
          placeholder="First name"
        />
        <input type="checkbox" />
        <button
          disabled={isValiditian1}
          disabled={isValiditian2}
          disabled={isValiditian3}
          disabled={isValiditian4}
          disabled={isValiditian5}
          onClick={clickHendler}
        >
          Register Now
        </button>
      </div>
    );
  }
}
