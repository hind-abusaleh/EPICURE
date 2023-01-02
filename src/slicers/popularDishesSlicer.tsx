import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const popularDishesSlice = createSlice({
  name: 'popularDishes',

  initialState: {
    value: []
  },
  
  reducers: {
    setPopularDishes: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPopularDishes } = popularDishesSlice.actions

export default popularDishesSlice.reducer
