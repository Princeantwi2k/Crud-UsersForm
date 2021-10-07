import React from "react";
import { connect } from "react-redux";
import { login, loginWithGoogle } from "../AddAction/AuthAction";

import { Link } from "react-router-dom";

const Login = (props) => {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.login(email, password);
  };

  return (
    <div>
      <h1>Login Now</h1>
      <form onSubmit={handleSubmit}>
        <h2>Email</h2>
        <input type="email" name="email" placeholder="email" />
        <br />
        <h2>password</h2>
        <input type="password" name="password" placeholder="password" />
        <br />
        <hr />
        <button type="submit">submit</button>{" "}
        <Link to="/register">Don't have an account? Sign up </Link>
        <button onClick={props.loginWithGoogle}>
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/google-logo-760x380.png"
            alt="pic"
            width="70px"
          />
        </button>
      </form>
    </div>
  );
};

const mSTP = (state) => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = {
  login,
  loginWithGoogle,
};

export default connect(mSTP, mapDispatchToProps)(Login);
