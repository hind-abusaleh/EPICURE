import React, { useState } from 'react';
import { MainContainer, ConstContainer, Title, ResBar, BarButton } from "./styels";
import  ShowRestaurants from "../../../components/RestaurantsPage/ShowRestaurants";
function MobileRestaurants() {
  const [Group, setGroup] = useState("all");
  const ChangeGroup = (g:string) => {
    setGroup(g);
  }
  const CheckActive = (state: string) => {
      if(Group === state) return true;
      else return false;
  }
    return (
      <MainContainer>
        <ConstContainer>
          <Title>Restaurants</Title>
          <ResBar>
            <BarButton active={CheckActive("all")}  onClick={() =>ChangeGroup("all")}>All</BarButton>
            <BarButton active={CheckActive("new")}  onClick={() =>ChangeGroup("new")}>New</BarButton>
            <BarButton active={CheckActive("popular")}  onClick={() =>ChangeGroup("popular")}>Most Popular</BarButton>
            <BarButton active={CheckActive("open_now")}  onClick={() =>ChangeGroup("open_now")}>Open Now</BarButton>
          </ResBar>
        </ConstContainer>
        <ShowRestaurants group = {Group}/>
      </MainContainer>
  
    );
  }
  
  export default MobileRestaurants;