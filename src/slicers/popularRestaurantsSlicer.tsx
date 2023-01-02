import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const popularRestaurantsSlice = createSlice({
  name: 'popularRestaurants',

  initialState: {
    value: []
  },
  
  reducers: {
    setPopularRestaurants: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPopularRestaurants } = popularRestaurantsSlice.actions

export default popularRestaurantsSlice.reducer
