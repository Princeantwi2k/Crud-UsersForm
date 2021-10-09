import usersReducer from "../../Reducers/UsersReducers";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  UserState: usersReducer,
  firebase: firebaseReducer,
});
