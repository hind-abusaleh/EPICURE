import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const topChefSlice = createSlice({
  name: 'topChef',

  initialState: {
    value: []
  },
  
  reducers: {
    setTopChef: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTopChef } = topChefSlice.actions

export default topChefSlice.reducer

