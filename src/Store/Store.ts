import { configureStore } from "@reduxjs/toolkit";
import VideoModalSlice from "./Slices/VideoModalSlice"

export const Store = configureStore({
  reducer: {
    videoModal: VideoModalSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
