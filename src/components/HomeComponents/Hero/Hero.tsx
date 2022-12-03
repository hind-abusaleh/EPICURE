
import React from 'react';
import { Container, TextBlock, SearchBox, Input } from './styles';
import { LINES, ICONS } from '../../../assets';

function Hero() {
  return (
    <>
      <Container>
        <TextBlock>
          <img src={LINES.hero} alt='hero' />
          <SearchBox>
            <img src={ICONS.search} alt="search" />
            <Input
            type="text" placeholder="Search for restaurant cuisine, chef"
            />
          </SearchBox>
        </TextBlock>
      </Container>
    </>

  );
}

export default Hero;