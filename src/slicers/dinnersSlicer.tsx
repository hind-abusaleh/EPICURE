import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dinnersSlice = createSlice({
  name: 'activeRestaurant_dinnerDishes',

  initialState: {
    value: []
  },
  
  reducers: {
    setDinners: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDinners } = dinnersSlice.actions

export default dinnersSlice.reducer
