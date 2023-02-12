import { Lyric, SongDetail } from "@/types/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestLyricListAction } from "./thunk";

export interface PlayerState {
  song?: SongDetail;
  index: number;
  state: "idle" | "loading" | "failed";
  lyricList?: Lyric[];
}

const initialState: PlayerState = {
  song: undefined,
  index: 0,
  state: "idle",
  lyricList: [],
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
        state.state = "idle";
        state.lyricList = action.payload;
      })
      .addCase(requestLyricListAction.rejected, (state, action) => {
        state.state = "failed";
        console.log(action.error.message);
      });
  },
});

export const { changeSong, changeIndex } = slice.actions;

export default slice.reducer;
