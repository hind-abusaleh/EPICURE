import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularRestaurants } from '../../../../services/index';
import { setPopularRestaurants } from './slicer';
import { RestaurantCard } from '../../../Cards/Mobile';
import { Slider, MainContainer, Text, Navigate, Button } from './styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'


export default function PopularRestaurants() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state: any) => state.popular_restaurants.value);
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularRestaurants();
      dispatch(setPopularRestaurants(response));
    }
    fetchFunction();
  }, []);

  return (
    <MainContainer>
      <Text>popular restaurant in epicure:</Text>
      <Slider>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.4}
        >
          {restaurants && restaurants.map((restaurant: any, index: number) => (
            <SwiperSlide key={index}>
              <RestaurantCard res={restaurant} />
            </SwiperSlide>
          ))}

        </Swiper>
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