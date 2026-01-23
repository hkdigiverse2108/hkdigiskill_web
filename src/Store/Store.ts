import { configureStore } from "@reduxjs/toolkit";
import VideoModalSlice from "./Slices/VideoModalSlice"
import ModalSlice from "./Slices/ModalSlice"
import UserSlice from "./Slices/UserSlice"

export const Store = configureStore({
  reducer: {
    videoModal: VideoModalSlice,
    Modal: ModalSlice,
    user: UserSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
