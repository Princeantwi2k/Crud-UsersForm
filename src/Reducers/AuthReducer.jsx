const initialstate = {
  isAuth: false,
};
const AuthReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "SET_IS_AUTH":
      return { ...state, isAuth: payload };

    default:
      return state;
  }
};
export default AuthReducer;
