import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopChefDishes } from '../../../../services';
import { setTopChefDishes } from './slicer';
import {TopChefDishCard} from '../../../Cards/Mobile';
import { Slider, InnerSlider, Item, MainContainer, Text, Navigate, Button } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';

export default function TopChefDishes() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  //const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;
  const topChefDishes = useSelector((state: any) => state.topchef_dishes.value);
  const haf_len = topChefDishes.length/2;
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchTopChefDishes();
      dispatch(setTopChefDishes(response));
    }
    fetchFunction();
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth -carousel.current.clientWidth);
  }, []);

  return (
    <MainContainer>
      <Text>Chef of the week:</Text>
      <Slider className='carousel'
        ref={carousel}
      //whileTap={{cursor: "grabbing"}}
      >
        <InnerSlider
          drag="x"
          dragConstraints={{ right: 0, left: haf_len*width }}>
          {topChefDishes && topChefDishes.map((dish: any, index: number) => (
            <Item key={index}>
              <TopChefDishCard dish={dish} />
            </Item>
          ))}
        </InnerSlider>
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