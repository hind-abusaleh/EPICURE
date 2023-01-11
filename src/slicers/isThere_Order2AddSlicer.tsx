import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isThere_Order2AddSlice = createSlice({
  name: 'isThere_Order2Add',

  initialState: {
    value: false,
  },
  
  reducers: {
    setIsThere_Order2Add: (state, action) => {
      state.value = action.payload;
    },
  },
})
// Action creators are generated for each case reducer function
export const { setIsThere_Order2Add } = isThere_Order2AddSlice.actions

export default isThere_Order2AddSlice.reducer
