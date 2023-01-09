import {  createSlice } from '@reduxjs/toolkit'

export const sideOnDishSlice = createSlice({
  name: 'sideOnDish',

  initialState: {
    value: ""
  },
  
  reducers: {
    setSideOnDish: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSideOnDish } = sideOnDishSlice.actions

export default sideOnDishSlice.reducer
