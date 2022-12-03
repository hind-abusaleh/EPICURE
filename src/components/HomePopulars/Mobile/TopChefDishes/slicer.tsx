import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const topChefSlice = createSlice({
  name: 'topchef_dishes',

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
export const { setTopChefDishes } = topChefSlice.actions

export default topChefSlice.reducer

