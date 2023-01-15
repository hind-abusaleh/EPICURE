import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurantsData } from '../../services/fetchData';
import { setRestaurants } from '../../slicers/RestaurantsSlicer';
import { MainContainer, ConstContainer, Title, ResBar, BarButton } from "./styels";
import  ShowRestaurants from "../../components/RestaurantsPage/ShowRestaurants";
import { SetWindowSize } from '../../helpers';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const fetchRestaurantPageData = useCallback(async ()=>{
    const restaurants = await fetchRestaurantsData();
      if(restaurants){
          dispatch(setRestaurants(restaurants));
      }
  },[])
  
  useEffect(() => {
    fetchRestaurantPageData();
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
  }, [fetchRestaurantPageData])

  const [Group, setGroup] = useState("all");
  const ChangeGroup = (g:string) => {
    setGroup(g);
  }
  const CheckActive = (state: string) => {
      if(Group === state) return true;
      else return false;
  }
  const windowSize = SetWindowSize();
  let text ="";
if(windowSize <  769) text ="Restaurants";
  return (
    <MainContainer>
        <ConstContainer>
          <Title>{text}</Title>
          <ResBar windowSize={windowSize}>
            <BarButton active={CheckActive("all")}  onClick={() =>ChangeGroup("all")}>All</BarButton>
            <BarButton active={CheckActive("new")}  onClick={() =>ChangeGroup("new")}>New</BarButton>
            <BarButton active={CheckActive("popular")}  onClick={() =>ChangeGroup("popular")}>Most Popular</BarButton>
            <BarButton active={CheckActive("open_now")}  onClick={() =>ChangeGroup("open_now")}>Open Now</BarButton>
          </ResBar>
        </ConstContainer>
        <ShowRestaurants group = {Group}/>
      </MainContainer>
  )
}

