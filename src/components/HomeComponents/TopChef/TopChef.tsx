import React, { useEffect} from 'react';
import { MainContainer, About, ChefCard, ChefImage, Text, TextBlock } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopChefData } from '../../../services/index';
import { setTopChefData } from './slicer';
import { ChefData } from '../../../constants/interfaces';
import TopChefDishes from '../../HomePopulars/Mobile/TopChefDishes/TopChefDishes';

function TopChef() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchTopChefData();
      dispatch(setTopChefData(response));
    }
    fetchFunction();
  }, []);

  const topChefData = useSelector((state: any) => state.topchef_data.value);
  let chef: ChefData = topChefData;
  return (
    <MainContainer>
      <ChefCard>
        <Text>Chef of the week:</Text>
        <ChefImage im={chef.img}>
          <TextBlock> {chef.name} </TextBlock>
        </ChefImage>
      </ChefCard>
      <About>{chef.about}</About>
      <TopChefDishes/>
    </MainContainer>
  );
}

export default TopChef;