import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import UserIndex from "./components/userindex";m
import UserForm from "./components/userform";

const INITIAL_DATA = {
  user: []
};

const store = createStore(reducer);

function reducer(state = INITIAL_DATA, action)
 {
 console.log("render");
  
  if (action.type === "User_data") {
    state["user"] = action.payload;
    var new_state = { ...state };

    return new_state;
  } 
  
  else if (action.type === "User_delete") {
    var userfiltered = [
      ...state.user.filter((user) => user.id !== action.payload),
    ];
    state["user"] = userfiltered;

    return { ...state };
  } 
  
  else if (action.type === "User_modaledit") {
    console.log("modaledit");
    var newuser = action.payload; //new edit data of user
    state.user.forEach((user, i) => {
      if (user.id === newuser.id) 
      state.user[i] = newuser;
    });

    return { ...state };
  } 
  
  else {
    return state;
  }
}
const jsx = (
  <Provider store={store}>
    <UserForm/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
