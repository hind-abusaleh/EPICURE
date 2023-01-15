import React, { useCallback, useEffect, useState } from 'react';
import { MainContainer, ConstContainer, Title, ResBar, BarButton } from "../Restaurants/styels";
import ShowChefs from "../../components/ChefsPage/ShowChefs";
import { fetchChefsData } from '../../services/fetchData';
import { setChefs } from '../../slicers/ChefsSlicer';
import { useDispatch } from 'react-redux';
import { SetWindowSize } from '../../helpers';

export default function Chefs() {
    const dispatch = useDispatch();

    const fetchChefsPageData = useCallback(async ()=>{
        const chefs = await fetchChefsData();
      if(chefs){
        dispatch(setChefs(chefs));
    }
      },[])
      
      useEffect(() => {
        fetchChefsPageData();
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
      }, [fetchChefsPageData])

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
if(windowSize <  769) text ="Chefs";
    return (
      <MainContainer>
        <ConstContainer>
          <Title>{text}</Title>
          <ResBar windowSize={windowSize}>
            <BarButton active={CheckActive("all")}  onClick={() =>ChangeGroup("all")}>All</BarButton>
            <BarButton active={CheckActive("new")}  onClick={() =>ChangeGroup("new")}>New</BarButton>
            <BarButton active={CheckActive("most_viewd")}  onClick={() =>ChangeGroup("most_viewd")}>Most Viewd</BarButton>
          </ResBar>
        </ConstContainer>
        <ShowChefs group = {Group}/>
      </MainContainer>
  
    );
  }