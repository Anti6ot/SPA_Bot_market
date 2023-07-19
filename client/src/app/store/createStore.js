import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dlcReducer from "./dlc";
import usersReducer from "./users";

const rootReducer = combineReducers({
    dlc: dlcReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
