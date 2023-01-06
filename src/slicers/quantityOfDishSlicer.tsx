import {  createSlice } from '@reduxjs/toolkit'

export const quantityOfDishSlice = createSlice({
  name: 'quantityOfDish',

  initialState: {
    value: 1,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    setQuantity: state => {
      state.value = 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setQuantity } = quantityOfDishSlice.actions

export default quantityOfDishSlice.reducer
