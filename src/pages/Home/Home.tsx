import React, { useCallback, useEffect } from 'react';
import { Hero,HomeSignatures,TopChef,AboutUS } from '../../components/HomeComponents';
import { MainContainer } from './styels';
import { PopularRestaurants, PopularDishes } from '../../components/HomePopulars/Mobile/index';
import { setCuisines } from "../../slicers/CuisinesSlicer";
import { setTopChef } from "../../slicers/TopChefSlicer";
import { setPopularDishes } from "../../slicers/popularDishesSlicer";
import { setPopularRestaurants } from "../../slicers/popularRestaurantsSlicer";
import { setRestaurants } from "../../slicers/RestaurantsSlicer";
import { setTopChefDishes } from "../../slicers/TopChefDishesSlicer";
import { useDispatch} from 'react-redux';
import { fetchCuisinesData,
    fetchRestaurantsData,
    fetchTopChefData,
    fetchTopChefDishes,
    fetchPopularRestaurants,
    fetchPopularDishes} from '../../services/fetchData';

export default function HomePage() {
  const dispatch = useDispatch();

const fetchHomePageData = useCallback(async ()=>{
  const restaurants = await fetchRestaurantsData();
      if(restaurants){
          dispatch(setRestaurants(restaurants));
      }
  
      const cuisines = await fetchCuisinesData();
      if(cuisines){
        dispatch(setCuisines(cuisines));
      }
  
      const popularDishes = await fetchPopularDishes();
      if(popularDishes){
        dispatch(setPopularDishes(popularDishes));
      }
  
      const popularRestaurants = await fetchPopularRestaurants();
      if(popularRestaurants){
        dispatch(setPopularRestaurants(popularRestaurants));
      }
  
      const topChef = await fetchTopChefData();
      if(topChef){
        dispatch(setTopChef(topChef));
      }
      
      const topChefDishes = await fetchTopChefDishes(topChef[0].chefsDishes);
      if(topChefDishes){
        dispatch(setTopChefDishes(topChefDishes));
      }
},[])


useEffect(() => {
  fetchHomePageData();
  // 👇️ scroll to top on page load
  window.scrollTo({top: 0, left: 0, behavior: "auto"});
}, [fetchHomePageData])


  return (
    <MainContainer>
      <Hero />
      <PopularRestaurants />
      <PopularDishes />
      <HomeSignatures />
      <TopChef />
      <AboutUS/>
    </MainContainer>
  )
}



