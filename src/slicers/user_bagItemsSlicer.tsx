import { createSlice } from '@reduxjs/toolkit'
import { Order } from "../constants/interfaces";

export const user_bagItemsSlice = createSlice({
  name: 'user_bagItems',

  initialState: {
    value: [] as Order[],
    //status: null
  },
  
  reducers: {
    /*SetOrders: (state, action) => {
      state.value = action.payload;
    },*/
    AddOrder: (state, action) => {
        state.value.push(action.payload);
  },
}})

// Action creators are generated for each case reducer function
export const { AddOrder } = user_bagItemsSlice.actions

export default user_bagItemsSlice.reducer
