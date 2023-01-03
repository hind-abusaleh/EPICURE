import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const lanchesSlice = createSlice({
  name: 'activeRestaurant_lanchDishes',

  initialState: {
    value: []
  },
  
  reducers: {
    setLanches: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLanches } = lanchesSlice.actions

export default lanchesSlice.reducer
