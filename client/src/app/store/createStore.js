import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dlcReducer from "./dlc";
import usersReducer from "./users";
import qualityReducer from "./quality";

const rootReducer = combineReducers({
    dlc: dlcReducer,
    users: usersReducer,
    quality: qualityReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
