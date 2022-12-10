import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopChefDishes } from '../../../../services';
import { setTopChefDishes } from './slicer';
import {TopChefDishCard} from '../../../Cards/Mobile';
import { Slider, MainContainer, Text, Navigate, Button } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function TopChefDishes() {
  const dispatch = useDispatch();
  const topChefDishes = useSelector((state: any) => state.topchef_dishes.value);
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchTopChefDishes();
      dispatch(setTopChefDishes(response));
    }
    fetchFunction();
   }, []);

  return (
    <MainContainer>
      <Text>Chef of the week:</Text>
      <Slider>
      <Swiper
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
          {topChefDishes && topChefDishes.map((dish: any, index: number) => (
           <SwiperSlide key={index}>
              <TopChefDishCard dish={dish} />
            </SwiperSlide>
          ))}
          </Swiper>
      </Slider>
      <Navigate>
        <p> All Chefs</p>
        <Button  > <Link to='/Restaurants'>
          <img src={ICONS.navigate} alt="res" />
        </Link></Button>
      </Navigate>
    </MainContainer>
  )
}