import {  createSlice } from '@reduxjs/toolkit'

export const activeRestaurantSlice = createSlice({
  name: 'activeRestaurant',

  initialState: {
    value: {}
  },
  
  reducers: {
    setActiveRestaurant: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveRestaurant } = activeRestaurantSlice.actions

export default activeRestaurantSlice.reducer
