import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDishes } from '../../../../services/index';
import { setPopularDishes } from './slicer';
import {DishCard} from '../../../Cards/Mobile';
import { Slider, MainContainer, Text, Navigate, Button } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'

export default function PopularDishes() {
  const dispatch = useDispatch();
  const dishes = useSelector((state: any) => state.popular_dishes.value);
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularDishes();
      dispatch(setPopularDishes(response));
    }
    fetchFunction();
     }, []);
  return (
    <MainContainer>
      <Text>Signature Dish Of:</Text>
      <Slider>
      <Swiper
          spaceBetween={5}
          slidesPerView={1.4}
        >
          {dishes && dishes.map((dish: any, index: number) => (
            <SwiperSlide key={index}>
              <DishCard dish={dish} />
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