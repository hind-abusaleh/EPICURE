import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDishes } from '../../../../services/index';
import { setPopularDishes } from './slicer';
import {DishCard} from '../../../Cards/Mobile';
import { Slider, InnerSlider, Item, MainContainer, Text, Navigate, Button } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';

export default function PopularDishes() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  //const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dishes = useSelector((state: any) => state.popular_dishes.value);
  const haf_len =  dishes.length/2 ;
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularDishes();
      dispatch(setPopularDishes(response));
    }
    fetchFunction();
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth -carousel.current.clientWidth);
  }, []);
  return (
    <MainContainer>
      <Text>Signature Dish Of:</Text>
      <Slider className='carousel'
        ref={carousel}
      //whileTap={{cursor: "grabbing"}}
      >
        <InnerSlider
          drag="x"
          dragConstraints={{ right: 0, left: haf_len*width }}>

          {dishes && dishes.map((dish: any, index: number) => (
            <Item key={index}>
              <DishCard dish={dish} />
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