import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const breakfastsSlice = createSlice({
  name: 'activeRestaurant_breakfastDishes',

  initialState: {
    value: []
  },
  
  reducers: {
    setBreakfasts: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBreakfasts } = breakfastsSlice.actions

export default breakfastsSlice.reducer
