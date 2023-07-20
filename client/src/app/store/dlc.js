import { createSlice } from "@reduxjs/toolkit";
import dlcService from "../services/dlc.service";

const dlcSlice = createSlice({
    name: "dlc",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        dlcRequested: (state) => {
            state.isLoading = true;
        },
        dlcReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        dlcRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: dlcReducer, actions } = dlcSlice;
const { dlcRequested, dlcReceved, dlcRequestFiled } = actions;

export const loadDLClist = () => async (dispatch) => {
        dispatch(dlcRequested());
        try {
            const { content } = await dlcService.fetchAll();
            dispatch(dlcReceved(content));
        } catch (e) {
            dispatch(dlcRequestFiled(e.message));
        }
};

export const getDLC = () => (state) => state.dlc.entities;

export default dlcReducer;
