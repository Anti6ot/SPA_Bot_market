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
            console.log("state.entities", state.entities);
            console.log("action", state.entities);
        },
        dlcRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        dlcUpdated: (state, action) => {
            const indexEl = state.entities.findIndex(
                (e) => e._id === action.payload._id
            );
            state.entities[indexEl] = action.payload;
        },
        dlcUpdateFiled: (state, action) => {
            state.error = action.payload;
        }
    }
});
// const addedDLCRequested = createAction("dlc/addedDLCRequested");

const { reducer: dlcReducer, actions } = dlcSlice;
const { dlcRequested, dlcReceved, dlcRequestFiled, dlcUpdateFiled } = actions;

export const loadDLClist = () => async (dispatch) => {
        dispatch(dlcRequested());
        try {
            const { content } = await dlcService.fetchAll();
            dispatch(dlcReceved(content));
        } catch (e) {
            dispatch(dlcRequestFiled(e.message));
        }
};
export const updatePropsDLC = (data) => async (dispatch) => {
//     try {
//         const { content } = await dlcService.update(data);
//         dispatch(userUpdated(content));
//     } catch (error) {
//         dispatch(userUpdatedFailed(error.message));
//     }

    try {
      const content = await dlcService.update(data);
        console.log("content", content);
    } catch (e) {
        dispatch(dlcUpdateFiled(e.message));
    }
};

export const getDLC = () => (state) => state.dlc.entities;

export default dlcReducer;
