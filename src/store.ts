import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './components/HomePopulars/Mobile/Restaurants/slicer';
import dishesReducer from "./components/HomePopulars/Mobile/Dishes/slicer";
import topChefDishesReducer from "./components/HomePopulars/Mobile/TopChefDishes/slicer";
import  topChefDataReducer  from "./components/HomeComponents/TopChef/slicer";
import CuisinesReducer from "./components/HomeComponents/Hero/CuisinesSlicer";


export default configureStore({
  reducer: {
      popular_restaurants: restaurantsReducer,
      popular_dishes: dishesReducer,
      topchef_dishes: topChefDishesReducer,
      topchef_data: topChefDataReducer,
      cuisines: CuisinesReducer,
  },
  
})