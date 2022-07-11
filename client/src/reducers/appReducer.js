import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateLoadingState: (state, action)=>{
      state.isLoading = action.payload
    }
  },
})


export const { updateLoadingState } = appReducer.actions

// Action creators are generated for each case reducer function

export default appReducer.reducer