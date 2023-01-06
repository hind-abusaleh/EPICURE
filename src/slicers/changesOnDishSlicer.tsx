import {  createSlice } from '@reduxjs/toolkit'

export const changesOnDishSlice = createSlice({
  name: 'changesOnDish',

  initialState: {
    value: ""
  },
  
  reducers: {
    setChangesOnDish: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setChangesOnDish } = changesOnDishSlice.actions

export default changesOnDishSlice.reducer
