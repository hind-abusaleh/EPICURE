import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantsReducer,
  dishesReducer,
  topChefDishesReducer,
  topChefDataReducer,
  CuisinesReducer
} from './slicers';

export default configureStore({
  reducer: {
      popular_restaurants: restaurantsReducer,
      popular_dishes: dishesReducer,
      topchef_dishes: topChefDishesReducer,
      topchef_data: topChefDataReducer,
      cuisines: CuisinesReducer,
  },
  
})