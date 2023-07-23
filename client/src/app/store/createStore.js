import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dlcReducer from "./dlc";
import usersReducer from "./users";
import qualityReducer from "./quality";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    dlc: dlcReducer,
    users: usersReducer,
    quality: qualityReducer,
    cart: cartReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
