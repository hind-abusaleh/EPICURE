import React from 'react';
import { Hero,HomeSignatures,TopChef,AboutUS } from '../../../components/HomeComponents';
import { MainContainer } from './styels';
import { PopularRestaurants, PopularDishes } from '../../../components/HomePopulars/Mobile/index';

function Home() {
  return (
    <MainContainer>
      <Hero />
      <PopularRestaurants />
      <PopularDishes />
      <HomeSignatures />
      <TopChef />
      <AboutUS/>
    </MainContainer>

  );
}

export default Home;