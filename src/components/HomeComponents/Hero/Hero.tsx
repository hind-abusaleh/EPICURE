import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularRestaurants } from '../../../services';
import { setPopularRestaurants } from '../../HomePopulars/Mobile/Restaurants/slicer';
import { Container, TextBlock, SearchBox, Input, DataResult, InputContainer,MainContainer,Category,Item } from './styles';
import { LINES, ICONS } from '../../../assets';
import { RestCard } from '../../../constants/interfaces';
import { Link } from "react-router-dom";

function Hero() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.popular_restaurants.value);
  useEffect(() => {
    async function fetchFunction() {
      const response = await fetchPopularRestaurants();
      dispatch(setPopularRestaurants(response));
    }
    fetchFunction();
  }, []);
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: RestCard) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <MainContainer>
      <Container>
        <TextBlock>
          <img src={LINES.hero} alt='hero' />
            <SearchBox>
              <img src={ICONS.search} alt="search" />
              <Input
                type="text" placeholder="Search for restaurant cuisine, chef"
                value={wordEntered}
                onChange={handleFilter}
              /></SearchBox>
          </TextBlock>
          </Container>
          <InputContainer>
          {filteredData.length != 0 && (
              <DataResult>
                <Category> Restaurants: </Category>
               {filteredData.map((value: RestCard, key: any) => {
                  return (
                    <Item key={key}>
                       <Link to="/restaurants">{value.name} </Link>
                      </Item>
                  );
                })}
              </DataResult>
            )}
            </InputContainer>
    </MainContainer>
  );
}
export default Hero;
