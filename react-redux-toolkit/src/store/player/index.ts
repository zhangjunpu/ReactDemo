import { Lyric, SongDetail } from "@/types/data";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { requestLyricListAction } from "./thunk";

export interface PlayerState {
  song?: SongDetail;
  index: number;
  state: "idle" | "loading" | "successed" | "failed";
  lyricList: Lyric[];
  error?: string;
}

const initialState: PlayerState = {
  song: undefined,
  index: 0,
  state: "idle",
  lyricList: [],
  error: undefined,
};

const slice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeSong: (state, action: PayloadAction<SongDetail>) => {
      state.song = action.payload;
    },
    changeIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestLyricListAction.pending, (state) => {
        state.state = "loading";
      })
      .addCase(requestLyricListAction.fulfilled, (state, action) => {
        state.state = "successed";
        state.lyricList = action.payload || [];
      })
      .addCase(requestLyricListAction.rejected, (state, action) => {
        state.state = "failed";
        state.error = action.error.message;
        console.log(action.error);
      });
  },
});

export const { changeSong, changeIndex } = slice.actions;

export const getLyricListSelector = (state: RootState) => state.player.lyricList?.slice(0, 10);
// export const getLyricListSelector = createSelector(
//   (state: RootState) => state.player.lyricList,
//   (lyricList: Lyric[]) => lyricList.slice(0, 10)
// );

export default slice.reducer;
