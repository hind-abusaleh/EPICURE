import { createSlice } from '@reduxjs/toolkit'

export const CuisinesSlice = createSlice({
  name: 'Cuisines',

  initialState: {
    value: []
  },
  
  reducers: {
    setCuisines: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCuisines } = CuisinesSlice.actions

export default CuisinesSlice.reducer
