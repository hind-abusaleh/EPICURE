import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const topChefDataSlice = createSlice({
  name: 'topchef_data',

  initialState: {
    value: {}
  },
  
  reducers: {
    setTopChefData: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTopChefData } = topChefDataSlice.actions

export default topChefDataSlice.reducer

