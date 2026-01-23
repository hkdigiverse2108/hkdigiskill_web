import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isModalOpen: false,
    isLogoutModalOpen: false,
}

const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        },
        setLogoutModalOpen: (state, action) => {
            state.isLogoutModalOpen = action.payload
        },

    }
})

export const { setModalOpen, setLogoutModalOpen } = ModalSlice.actions;

export default ModalSlice.reducer