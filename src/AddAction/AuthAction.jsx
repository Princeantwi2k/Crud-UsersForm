export const register = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (email, password, replace) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
