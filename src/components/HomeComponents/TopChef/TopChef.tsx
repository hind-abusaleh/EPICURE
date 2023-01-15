import React from 'react';
import { MainContainer, About, ChefCard, ChefImage, Text, TextBlock,Container } from './styles';
import { useSelector } from 'react-redux';
import TopChefDishes from '../../HomePopulars/Mobile/TopChefDishes/TopChefDishes';
import SetWindowSize from "../../../helpers/SetWindowSize";

function TopChef() {
  const chefs = useSelector((state: any) => state.topChef.value);
  const WindowSize = SetWindowSize();

  return (
    <MainContainer>
      <Text WindowSize={WindowSize}>Chef of the week:</Text>
      <Container WindowSize={WindowSize}>
        <ChefCard>
          {chefs && chefs.map((chef: any, index: number) => (
            <ChefImage im={require(`../../../${chef.img}`)} key={index}>
              <TextBlock> {chef.name} </TextBlock>
            </ChefImage>
          ))}
        </ChefCard>
        {chefs && chefs.map((chef: any, index: number) => (
          <About key={index}>{chef.about}</About>
        ))}
      </Container>
      <TopChefDishes />
    </MainContainer>
  );
}

export default TopChef;