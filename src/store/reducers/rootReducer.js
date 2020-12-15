import authReducer from "./authReducers";
import projectReducer from "./projectReducer";
import webReducer from "./webReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  webContent: webReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
