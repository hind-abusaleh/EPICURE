import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../constants/interfaces';

export const activeUserSlice = createSlice({
  name: 'activeUser',

  initialState: {
    value: {} as User,
  },
  
  reducers: {
    setActiveUser: (state, action) => {
      state.value = action.payload;
    },
  },
})
// Action creators are generated for each case reducer function
export const { setActiveUser } = activeUserSlice.actions

export default activeUserSlice.reducer
