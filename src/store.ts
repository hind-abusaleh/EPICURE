import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './components/HomePopulars/Mobile/Restaurants/slicer';
import dishesReducer from "./components/HomePopulars/Mobile/Dishes/slicer";
import topChefDishesReducer from "./components/HomePopulars/Mobile/TopChefDishes/slicer";
import  topChefDataReducer  from "./components/HomeComponents/TopChef/slicer";
// const serviceApi = createServiceApi('/some/url');

export default configureStore({
  reducer: {
      popular_restaurants: restaurantsReducer,
      popular_dishes: dishesReducer,
      topchef_dishes: topChefDishesReducer,
      topchef_data: topChefDataReducer,
  },
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware()
})