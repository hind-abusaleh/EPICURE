import {  createSlice } from '@reduxjs/toolkit'

export const changesOnDishSlice = createSlice({
  name: 'changesOnDish',

  initialState: {
    value: {
      Whithout_peanuts: false,
      Sticky_Less_spicy: false
    }
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
