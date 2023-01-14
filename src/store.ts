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
  activeDishReducer,
  changesOnDishReducer,
  sideOnDishReducer,
  quantityOfDishReducer,
  itemsInBagReducer,
  isOpen_bagReducer,
  ordersReducer,
  user_bagItemsReducer,
  isThere_Order2AddReducer,
  activeUserReducer,
  isLoged_inReducer,
  isOpen_userReducer,
  isOpen_checkoutReducer,
  isOpen_orderRecivedReducer
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
      changesOnDish: changesOnDishReducer, //ChekBox
      sideOnDish: sideOnDishReducer,  //RadioButton
      quantityOfDish: quantityOfDishReducer, //Counters/Quantity
      itemsInBag: itemsInBagReducer, //DishPage, onclick() //sign in, saved user orders
      isOpen_bag: isOpen_bagReducer, //bagPopup, dishPage, Header
      orders: ordersReducer, //bag_popup
      user_bagItems: user_bagItemsReducer, //sign in
      isThere_Order2Add: isThere_Order2AddReducer, //DishPage, onclick() //ordersBag
      activeUser: activeUserReducer,
      isLoged_in: isLoged_inReducer,
      isOpen_user: isOpen_userReducer, //userpopup, orderbag , Header
      isOpen_checkout: isOpen_checkoutReducer, //checkoutpopup, orderbag , Header
      isOpen_orderRecived: isOpen_orderRecivedReducer, //checkoutpopup, orderRecived , Header
  },
  
})