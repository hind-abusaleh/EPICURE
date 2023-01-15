import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, TextBlock, SearchBox, Input,MainContainer} from './styles';
import { LINES, ICONS } from '../../../assets';
import { RestCard } from '../../../constants/interfaces';
import SearchResults from './SearchResults';
import { SetWindowSize } from '../../../helpers';

function Hero() {
  const [filteredData_restaurants, setFilteredData_restaurants] = useState([]);
  const [filteredData_cuisines, setFilteredData_cuisines] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const cuisines = useSelector((state: any) => state.cuisines.value);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter__restaurants = restaurants.filter((value: RestCard) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    const newFilter_cuisines = cuisines.filter((value: RestCard) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData_restaurants([]);
      setFilteredData_cuisines([]);
    } else {
      setFilteredData_restaurants(newFilter__restaurants);
      setFilteredData_cuisines(newFilter_cuisines);
    }
  };
  const WindowSize = SetWindowSize();

  return (
    <MainContainer>
      <Container WindowSize={WindowSize} >
        <TextBlock WindowSize={WindowSize}>
          <img src={LINES.hero} alt='hero' />
            <SearchBox WindowSize={WindowSize}>
              <img src={ICONS.search} alt="search" />
              <Input
                type="text" placeholder="Search for restaurant cuisine, chef"
                value={wordEntered}
                onChange={handleFilter}
              /></SearchBox>
          </TextBlock>
          </Container>
          <SearchResults
           rests ={filteredData_restaurants}
           cuisines ={filteredData_cuisines}
          />
    </MainContainer>
  );
}
export default Hero;