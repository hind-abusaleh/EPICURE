import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isLoged_inSlice = createSlice({
  name: 'isLoged_in',

  initialState: {
    value: false,
  },
  
  reducers: {
    setIsLoged_in: (state, action) => {
      state.value = action.payload;
    },
  },
})
// Action creators are generated for each case reducer function
export const { setIsLoged_in } = isLoged_inSlice.actions

export default isLoged_inSlice.reducer
