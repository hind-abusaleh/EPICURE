import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantsReducer,
  dishesReducer,
  chefsReducer,
  CuisinesReducer,
  TopChefReducer,
  TopChefDishesReducer,
  popularDishesReducer,
  popularRestaurantsReducer
} from './slicers';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer, //home //restaurant
      dishes: dishesReducer, //home
      chefs: chefsReducer, //home
      cuisines: CuisinesReducer, //home
      topChef: TopChefReducer, //home
      topChefDishes: TopChefDishesReducer, //home
      popularDishes: popularDishesReducer, //home
      popularRestaurants: popularRestaurantsReducer, //home
  },
  
})