import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isOpen_orderRecivedSlice = createSlice({
  name: 'isOpen_orderRecived',

  initialState: {
    value: false,
  },
  
  reducers: {
    setIsOpen_orderRecived: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsOpen_orderRecived } = isOpen_orderRecivedSlice.actions

export default isOpen_orderRecivedSlice.reducer
