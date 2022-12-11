import React, { useEffect} from 'react';
import { MainContainer, About, ChefCard, ChefImage, Text, TextBlock } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChefs } from '../../../services';
import { setChefs } from '../../../slicers/ChefsSlicer';
import TopChefDishes from '../../HomePopulars/Mobile/TopChefDishes/TopChefDishes';
import {ChefsFilter} from '../../../helpers';
import { Chefs_interface } from "../../../constants/interfaces";
function TopChef() {
  const dispatch = useDispatch();
  const chefs = useSelector((state: any) => state.chefs.value);
  const FilterdList = ChefsFilter(chefs,"top_chef");
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchChefs();
      dispatch(setChefs(response));
    }
    fetchFunction();
   }, []);
  
  //const chef: Chefs_interface = FilterdList?.at(0);
  return (
    <MainContainer>
      <ChefCard>
        <Text>Chef of the week:</Text>
        {FilterdList && FilterdList.map((chef: any, index: number) => (
        <ChefImage im={chef.img} key={index}>
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