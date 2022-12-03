import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
  name: 'popular_dishes',

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
export const { setPopularDishes } = dishesSlice.actions

export default dishesSlice.reducer

