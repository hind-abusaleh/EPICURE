import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isOpen_checkoutSlice = createSlice({
  name: 'isOpen_checkout',

  initialState: {
    value: false,
  },
  
  reducers: {
    setIsOpen_checkout: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsOpen_checkout } = isOpen_checkoutSlice.actions

export default isOpen_checkoutSlice.reducer
