import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const isOpen_userSlice = createSlice({
  name: 'isOpen_user',

  initialState: {
    value: false,
  },
  
  reducers: {
    SetIsOpen_user: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetIsOpen_user } = isOpen_userSlice.actions

export default isOpen_userSlice.reducer
