import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";

const reducer = combineReducers({
  authReducer: authReducer,
});

export const store = configureStore({ reducer: reducer, middleware: [thunk] });
