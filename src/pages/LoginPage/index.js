import React, { Component } from "react";
import {connect} from 'react-redux';

import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginAction";
import Spinner from "../../components/General/Spinner";
import {Redirect} from  "react-router-dom";



class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeEmail = e => {
    this.setState({ email: e.target.value });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    alert("login..." + this.state.password);
    this.props.login(this.state.email, this.state.password)
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үг"
        />

        {this.props.loginIn && <Spinner/> }
        {this.props.firebaseError && <div style={{color:'e'}} > {this.props.firebaseError} </div>}

        <Button text="ЛОГИН" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loginIn: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) =>
      dispatch(actions.loginUser(email, password))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);
