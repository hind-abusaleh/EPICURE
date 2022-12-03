import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularRestaurants } from '../../../../services/index';
import { setPopularRestaurants } from './slicer';
import RestaurantCard from '../../../Cards/Mobile/RestaurantCard';
import { Slider, InnerSlider, Item, MainContainer, Text, Navigate, Button } from './styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';

export default function PopularRestaurants() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  //const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularRestaurants();
      dispatch(setPopularRestaurants(response));
    }
    fetchFunction();
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
//console.log(carousel.current.scrollWidth);
  const restaurants = useSelector((state: any) => state.popular_restaurants.value);
  const max = restaurants.length - 1;
  return (
    <MainContainer>
      <Text>popular restaurant in epicure:</Text>
      <Slider className='carousel'
        ref={carousel}
      //whileTap={{cursor: "grabbing"}}
      >
        <InnerSlider
          drag="x"
          //dragConstraints={{ right: 0, left: -max * 245 }}>
          dragConstraints={{ right: 0, left: -width }}>
          
          {restaurants && restaurants.map((restaurant: any, index: number) => (
            <Item key={index}>
              <RestaurantCard res={restaurant} />
            </Item>
          ))}
        </InnerSlider>
      </Slider>
      <Navigate>
        <p> All Restaurants</p>
        <Button  > <Link to='/Restaurants'>
          <img src={ICONS.navigate} alt="res" />
        </Link></Button>
      </Navigate>
    </MainContainer>
  )
}

