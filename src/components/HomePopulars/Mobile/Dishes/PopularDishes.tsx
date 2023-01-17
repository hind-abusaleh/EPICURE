import React from 'react';
import { useSelector } from 'react-redux';
import { DishCard } from '../../../Cards/Mobile';
import { Slider, MainContainer, Text, Navigate, Button, DesktopCardContainer } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { SetWindowSize } from '../../../../helpers';

export default function PopularDishes() {
  const dishes = useSelector((state: any) => state.popularDishes.value);
  const WindowSize = SetWindowSize();

  return (
    <MainContainer>
      <Text WindowSize={WindowSize}>Signature Dish Of:</Text>
      {WindowSize < 769 &&
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
                <DishCard dish={dish} page={"home"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Slider>
      }
      {WindowSize >= 769 &&
        <DesktopCardContainer>
          {dishes && dishes.map((dish: any, index: number) => (
            <DishCard key={index} dish={dish} page={"home"} />
          ))}
        </DesktopCardContainer>
      }
      <Navigate WindowSize={WindowSize}>
        <p> All Restaurants</p>
        <Button  > <Link to='/Restaurants'>
          <img src={ICONS.navigate} alt="res" />
        </Link></Button>
      </Navigate>
    </MainContainer>
  )
}