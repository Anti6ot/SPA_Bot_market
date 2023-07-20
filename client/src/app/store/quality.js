import { createSlice } from "@reduxjs/toolkit";
import qualityService from "../services/quality.service";

const qualitySlice = createSlice({
    name: "quality",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        qualityRequested: (state) => {
            state.isLoading = true;
        },
        qualityReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        qualityRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: qualityReducer, actions } = qualitySlice;
const { qualityRequested, qualityReceved, qualityRequestFiled } = actions;

export const loadQualityList = () => async (dispatch) => {
    dispatch(qualityRequested());
    try {
        const { content } = await qualityService.get();
        dispatch(qualityReceved(content));
    } catch (e) {
        dispatch(qualityRequestFiled(e.message));
    }
};

export const getQuality = () => (state) => state.quality.entities;

export default qualityReducer;
