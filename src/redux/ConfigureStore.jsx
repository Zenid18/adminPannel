import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { otherReducer } from "./reducers/OtherReducer";

const reducer = combineReducers({
  authReducer: authReducer,
  otherReducer: otherReducer
});

export const store = configureStore({ reducer: reducer, middleware: [thunk] });
