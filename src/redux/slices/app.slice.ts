// Define a type for the slice state
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
  createQuestionModal: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  createQuestionModal: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setQuestionModal: (state, action: PayloadAction<boolean>) => {
      state.createQuestionModal = action.payload;
    },
  },
})

export const { setQuestionModal } = appSlice.actions

export default appSlice.reducer;
