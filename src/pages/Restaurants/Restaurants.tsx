import React from 'react';
import {SetWindowSize} from '../../helpers/index';
import DesktopRestaurants from './DesktopResturants/DesktopRestaurants';
import  MobileRestaurants  from "./MobileRestaurants/MobileRestaurants";


export default function RestaurantsPage() {

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