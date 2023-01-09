import { createSlice } from '@reduxjs/toolkit'
import { Order } from "../constants/interfaces";

export const ordersSlice = createSlice({
  name: 'orders',

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
export const { AddOrder } = ordersSlice.actions

export default ordersSlice.reducer
