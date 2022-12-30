import React, { useEffect} from 'react';
import { MainContainer, About, ChefCard, ChefImage, Text, TextBlock } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setChefs } from '../../../slicers/ChefsSlicer';
import TopChefDishes from '../../HomePopulars/Mobile/TopChefDishes/TopChefDishes';
import {ChefsFilter} from '../../../helpers';

function TopChef() {
  const dispatch = useDispatch();
  const chefs = useSelector((state: any) => state.chefs.value);
  const FilterdList = ChefsFilter(chefs,"top_chef");
  useEffect(() => {
    async function fetchFunction() {
      const response:any = await(await fetch('http://localhost:3001/api/chefs/getChefs')).json();
      dispatch(setChefs(response));
    }
    fetchFunction();
   }, []);
  
  return (
    <MainContainer>
      <ChefCard>
        <Text>Chef of the week:</Text>
        {FilterdList && FilterdList.map((chef: any, index: number) => (
        <ChefImage im={require(`../../../${chef.img}`)} key={index}>
          <TextBlock> {chef.name} </TextBlock>
        </ChefImage>
        ))}
      </ChefCard>
      {FilterdList && FilterdList.map((chef: any, index: number) => (
      <About key={index}>{chef.about}</About>
      ))}
      <TopChefDishes/>
    </MainContainer>
  );
}

export default TopChef;