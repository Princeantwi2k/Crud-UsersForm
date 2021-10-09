import React from "react";
import { connect } from "react-redux";
import { register, loginWithGoogle } from "../AddAction/AuthAction";
import { Link } from "react-router-dom";
import "./Login.css";
const Register = (props) => {
  if (!props.auth.isLoaded) return null;
  if (props.auth.uid) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.register(email, password);
  };

  return (
    <div className="form">
      <h1 style={{ color: "black", textAlign: "center", fontWeight: "bolder" }}>
        Register Now
      </h1>
      <form onSubmit={handleSubmit}>
        <h2 className="name">Email</h2>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input"
        />
        <br />
        <h2 className="name">password</h2>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input"
        />
        <br />
        <hr />
        <button type="submit">submit</button>{" "}
        <Link to="/login">Already have an accout? Sign in </Link>
        <button onClick={props.loginWithGoogle}>
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2014/09/google-logo-760x380.png"
            alt="pic"
            width="70px"
          />
        </button>
        <br />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = {
  register,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
