import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantsReducer,
  dishesReducer,
  chefsReducer,
  CuisinesReducer
} from './slicers';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      dishes: dishesReducer,
      chefs: chefsReducer,
      cuisines: CuisinesReducer,
  },
  
})