import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: { userId: localStorageService.getUserId() },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false
    };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceved: (state, action) => {
            console.log(action.payload);
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        }
    }
});
const { reducer: usersReducer, actions } = usersSlice;
const { usersRequested, usersReceved, usersRequestFiled, authRequestSuccess, authRequestFailed } = actions;

const authRequested = createAction("users/authRequested");
// const userCreateRequested = createAction("users/userCreateRequested");
// const createUserFailed = createAction("users/createUserFailed");

export const login = ({ payload, redirect }) => async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
        const data = await authService.login({ email, password });
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        history.push(redirect);
    } catch (e) {
        dispatch(authRequestFailed(e.message));
    }
};

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        // dispatch(createUser({
        //     _id: data.userId,
        //     email,
        //     ...rest
        // }));
        history.push("/");
    } catch (e) {
        dispatch(authRequestFailed(e.message));
    }
};

// function createUser(payload) {
//     return async function (dispatch) {
//         dispatch(userCreateRequested());
//         try {
//             const { content } = await userService.create(payload);
//             dispatch(userCreated(content));
//             history.push("/users");
//         } catch (e) {
//             dispatch(createUserFailed(e.message));
//         }
//     };
// }

export const loadUsersList = () => async (dispatch) => {
        dispatch(usersRequested());
        try {
            const { content } = await userService.get();
            dispatch(usersReceved(content));
        } catch (e) {
            dispatch(usersRequestFiled(e.message));
        }
};

export const getUsersList = () => state => state.users.entities;
export const getUserById = (userId) => state => {
    if (state.users.entities) {
        return state.users.entities.find(u => u._id === userId);
    }
};
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getIsLoggedIn = () => state => state.users.isLoggedIn;
export const getCurrentUserId = () => (state) => state.users.auth.userId;

export default usersReducer;
