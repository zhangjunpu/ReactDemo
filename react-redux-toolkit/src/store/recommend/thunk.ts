import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestBanners } from "@/services/recommend";

export const requestBannersAction = createAsyncThunk("recommend/banners", async () => {
  const res = await requestBanners();
  return res.banners;
});
