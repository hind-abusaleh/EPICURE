import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isOpen_bagSlice = createSlice({
  name: 'isOpen_bag',

  initialState: {
    value: false,
  },
  
  reducers: {
    SetIsOpen_bag: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetIsOpen_bag } = isOpen_bagSlice.actions

export default isOpen_bagSlice.reducer
