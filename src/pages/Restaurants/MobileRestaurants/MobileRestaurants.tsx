import React, { useState } from 'react';
import { MainContainer, ConstContainer, Title, ResBar, BarButton } from "./styels";
import  ShowRestaurants from "../../../components/RestaurantsPage/ShowRestaurants";
function MobileRestaurants() {
  const [Group, setGroup] = useState("all");
  const ChangeGroup = (g:string) => {
    setGroup(g);
  }
    return (
      <MainContainer>
        <ConstContainer>
          <Title>Restaurants</Title>
          <ResBar>
            <BarButton  onClick={() =>ChangeGroup("all")}>All</BarButton>
            <BarButton  onClick={() =>ChangeGroup("new")}>New</BarButton>
            <BarButton  onClick={() =>ChangeGroup("popular")}>Most Popular</BarButton>
            <BarButton  onClick={() =>ChangeGroup("open_now")}>Open Now</BarButton>
          </ResBar>
        </ConstContainer>
        <ShowRestaurants group = {Group}/>
      </MainContainer>
  
    );
  }
  
  export default MobileRestaurants;