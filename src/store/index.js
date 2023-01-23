import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  toolkit: todoSlice,
});

export const store = configureStore({ reducer: rootReducer });
