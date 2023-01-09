import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurantsData } from '../../services/fetchData';
import {SetWindowSize} from '../../helpers/index';
import { setRestaurants } from '../../slicers/RestaurantsSlicer';
import DesktopRestaurants from './DesktopResturants/DesktopRestaurants';
import  MobileRestaurants  from "./MobileRestaurants/MobileRestaurants";

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const fetchRestaurantPageData = useCallback(async ()=>{
    const restaurants = await fetchRestaurantsData();
      if(restaurants){
          dispatch(setRestaurants(restaurants));
      }
  },[])
  
  useEffect(() => {
    fetchRestaurantPageData();
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
  }, [fetchRestaurantPageData])

  const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize < 769 ? 
          <MobileRestaurants/>
          :
          <DesktopRestaurants/>
      }
    </div>
  )
}

