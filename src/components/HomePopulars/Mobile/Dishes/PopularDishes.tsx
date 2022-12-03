import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularDishes } from '../../../../services/index';
import { setPopularDishes } from './slicer';
import RestaurantCard from '../../../Cards/Mobile/RestaurantCard';
import { Slider, InnerSlider, Item, MainContainer, Text, Navigate, Button } from '../Restaurants/styels';
import { Link } from "react-router-dom";
import { ICONS } from '../../../../assets';

export default function PopularDishes() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);
  //const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularDishes();
      dispatch(setPopularDishes(response));
    }
    fetchFunction();
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const dishes = useSelector((state: any) => state.popular_dishes.value);
const max = dishes.length-1;
  return (
    <MainContainer>
      <Text>Signature Dish Of:</Text>
      <Slider className='carousel'
        ref={carousel}
      //whileTap={{cursor: "grabbing"}}
      >
        <InnerSlider
          drag="x"
          //dragConstraints={{ right: 0, left: -width }}>
          dragConstraints={{ right: 0, left: -max*245 }}>
          {dishes && dishes.map((dish: any, index: number) => (
            <Item key={index}>
              <RestaurantCard res={dish} />
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