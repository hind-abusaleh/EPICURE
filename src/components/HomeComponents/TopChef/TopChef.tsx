import React from 'react';
import { MainContainer, About, ChefCard, ChefImage, Text, TextBlock } from './styles';
import { useSelector } from 'react-redux';
import TopChefDishes from '../../HomePopulars/Mobile/TopChefDishes/TopChefDishes';
function TopChef() {
  const chefs = useSelector((state: any) => state.topChef.value);
  
  return (
    <MainContainer>
      <ChefCard>
        <Text>Chef of the week:</Text>
        {chefs && chefs.map((chef: any, index: number) => (
        <ChefImage im={require(`../../../${chef.img}`)} key={index}>
          <TextBlock> {chef.name} </TextBlock>
        </ChefImage>
        ))}
      </ChefCard>
      {chefs && chefs.map((chef: any, index: number) => (
      <About key={index}>{chef.about}</About>
      ))}
      <TopChefDishes/>
    </MainContainer>
  );
}

export default TopChef;