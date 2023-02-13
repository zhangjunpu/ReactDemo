import { Banner } from "@/types/data";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { requestBannersAction } from "./thunk";

interface RecommendState {
  banners: Banner[];
}
const initialState: RecommendState = {
  banners: [],
};
const RecommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestBannersAction.fulfilled, (state, action) => {
      state.banners = action.payload;
    });
  },
});

export const getBannersSelector = (state: RootState) => state.recommend.banners;

export default RecommendSlice.reducer;
