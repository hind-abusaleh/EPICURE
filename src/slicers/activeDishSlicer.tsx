import {  createSlice } from '@reduxjs/toolkit'

export const activeDishSlice = createSlice({
  name: 'activeDish',

  initialState: {
    value: {}
  },
  
  reducers: {
    setActiveDish: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveDish } = activeDishSlice.actions

export default activeDishSlice.reducer
