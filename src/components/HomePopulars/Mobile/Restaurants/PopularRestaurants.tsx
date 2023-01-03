import React from 'react';
import { useSelector } from 'react-redux';
import { RestaurantCard } from '../../../Cards/Mobile';
import { Slider, MainContainer, Text, Navigate, Button } from './styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import { RestCard } from "../../../../constants/interfaces";

export default function PopularRestaurants() {
  const restaurants = useSelector((state: any) => state.popularRestaurants.value);
  return (
    <MainContainer>
      <Text>popular restaurant in epicure:</Text>
      <Slider>
        <Swiper
        //pagination={{ clickable: true }}
        spaceBetween={24}
          breakpoints={{
            // when window width is >= 280px
            280: {
              width: 280,
              slidesPerView: 1,
            },
            // when window width is >= 360px
            360: {
              width: 360,
              slidesPerView: 1.4,
            },
            // when window width is >= 540px
            540: {
              width: 540,
              slidesPerView: 2,
            },
          }}
        >
          { restaurants && restaurants.map((res: RestCard, index: number) => (
            <SwiperSlide key={index} >
              <RestaurantCard res={res} page={"home"} />
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