import { requestLyric, requestSongDetail } from "@/services/player";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeSong } from ".";
import type { AppThunk } from "..";
import { parseLyric } from "@/utils/lyric-utils";

export const requestSongDetailAction = (id: number): AppThunk => {
  return async (dispatch, getState) => {
    const res = await requestSongDetail(id);
    const song = res && res.songs && res.songs[0];
    dispatch(changeSong(song));
  };
};

/**
 * createAsyncThunk，包含 start，success，failed
 */
export const requestLyricListAction = createAsyncThunk("player/lyricList", async (id: number) => {
  const res = await requestLyric(id);
  const lyric = res && res.lrc && res.lrc.lyric;
  if (!lyric) return;
  return parseLyric(lyric);
});
