
import { applyMiddleware, createStore ,compose} from "redux";
import { getFirebase ,reactReduxFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from '../Firebase/Config'
import reducers from "../Component/mainReducer/MainReducer"




var store = createStore(reducers,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(firebase),
reduxFirestore(firebase),
))



export default store