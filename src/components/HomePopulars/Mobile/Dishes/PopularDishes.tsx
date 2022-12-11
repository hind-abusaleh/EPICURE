import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDishes } from '../../../../services/index';
import { setPopularDishes } from '../../../../slicers/PopularDishesSlicer';
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
          {dishes && dishes.map((dish: any, index: number) => (
            <SwiperSlide key={index}>
              <DishCard dish={dish} page={"home"}/>
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