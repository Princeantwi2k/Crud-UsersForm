import React from "react";

import { connect } from "react-redux";

import User from "./User";

const Userlist = ({ users, deleteUser, editUser, id }) => {
  const contactlist = users.map((users) => {
    return (
      <User
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
        key={id}
      />
    );
  });
  return <div>{contactlist}</div>;
};

const mapStateToProps = (state) => {
  return {
    users: state.UserState.users,
  };
};

export default connect(mapStateToProps)(Userlist);
