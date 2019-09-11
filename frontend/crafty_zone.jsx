import React from "react";
import ReactDOM from "react-dom";
// import configureStore from './store/store'
// import Root from './components/root';
// import App from './components/App';

import { signup, login, logout } from './util/session_api_util';
// import { signupThunk, loginThunk, logoutThunk } from './actions/session_actions'

// import { createBench, fetchAllBenches } from './util/benches_api_utils'
// import { fetchBenchesThunk } from './actions/bench_action';

document.addEventListener("DOMContentLoaded", () => {


  let initialState = {};
  //  let user = window.currentUser;

  // if (window.currentUser === undefined) {
  //   initialState = {};
  // } else {
  //   initialState = {

  //     entities: { users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     errors: { session: [] },
  //     session: { currentUser: window.currentUser.id }
  //   };

  // }


  // window.createBench = createBench;
  // window.fetchAllBenches = fetchAllBenches;
    // window.fetchBenchesThunk = fetchBenchesThunk;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // window.signupThunk = signupThunk;
  // window.loginThunk = loginThunk;
  // window.logoutThunk = logoutThunk;


  // const store = configureStore(initialState);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;


  const root = document.getElementById("root");
  ReactDOM.render(<h2 className="react-message"> The Mighty React is here..! </h2>, root);
 
});

