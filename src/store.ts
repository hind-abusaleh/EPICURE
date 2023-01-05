import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantsReducer,
  dishesReducer,
  chefsReducer,
  CuisinesReducer,
  TopChefReducer,
  TopChefDishesReducer,
  popularDishesReducer,
  popularRestaurantsReducer,
  activeRestaurantReducer,
  activeRestaurant_breakfastsReducer,
  activeRestaurant_lanchesReducer,
  activeRestaurant_dinnersReducer,
  activeDishReducer
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
      activeRestaurant: activeRestaurantReducer, //RestaurantCard_ onClick()
      activeRestaurant_breakfastDishes: activeRestaurant_breakfastsReducer, //RestaurantCard_ onClick()
      activeRestaurant_lanchDishes : activeRestaurant_lanchesReducer, //RestaurantCard_ onClick()
      activeRestaurant_dinnerDishes : activeRestaurant_dinnersReducer, //RestaurantCard_ onClick()
      activeDish: activeDishReducer, //DishCard_ onClick()
  },
  
})