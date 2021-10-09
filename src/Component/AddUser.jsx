import React, { Component } from "react";
import "./UserForm.css";
import { AddAction, getALLcontact } from "../AddAction/AddAction";
import { connect } from "react-redux";
import { logout } from "../AddAction/AuthAction";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      location: "",
    };
  }
  componentDidMount() {
    this.props.getALLcontact();
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.NewUser(this.state);
    this.setState({
      name: "",
      contact: "",
      location: "",
    });
  };

  render() {
    return (
      <>
        <form className="class-form" onSubmit={this.handleSubmit}>
          <h4>Crud UsersForm</h4>
          FirstName: <br />
          <input
            className="form_input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder={this.props.name}
            required
          />
          <br />
          Contact: <br />
          <input
            className="form_input"
            type="number"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
            required
          />
          <br />
          Location: <br />
          <input
            className="form_input"
            name="location"
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder={this.props.location}
            required
          />
          <br />
          <input className="form_button" type="submit" value="Submit" />
        </form>
        <button onClick={this.props.logout} className="button">
          LogOut
        </button>
      </>
    );
  }
}
const mapDispatchToProps = {
  NewUser: AddAction,
  getALLcontact: getALLcontact,
  logout: logout,
};

export default connect(null, mapDispatchToProps)(AddUser);
