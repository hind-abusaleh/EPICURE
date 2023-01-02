import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const TopChefDishesSlice = createSlice({
  name: 'topChefDishes',

  initialState: {
    value: []
  },
  
  reducers: {
    setTopChefDishes: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTopChefDishes } = TopChefDishesSlice.actions

export default TopChefDishesSlice.reducer
