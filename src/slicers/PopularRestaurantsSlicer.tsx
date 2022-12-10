import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const restaurantsSlice = createSlice({
  name: 'popular_restaurants',

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
export const { setPopularRestaurants } = restaurantsSlice.actions

export default restaurantsSlice.reducer

