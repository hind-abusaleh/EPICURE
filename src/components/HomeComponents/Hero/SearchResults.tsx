import React from 'react';
import { InputContainer, MainContainer, Category, Item, DataResult } from './styles';
import { RestCard } from '../../../constants/interfaces';
import { Link } from "react-router-dom";

const SearchResults = function (props: { rests: RestCard[], cuisines: RestCard[] }) {
  const rests = props.rests;
  const cuisines = props.cuisines;
  return (
    <MainContainer>
      <InputContainer>
        {rests.length != 0 && (
          <DataResult>
            <Category> Restaurants: </Category>
            {rests.map((value: RestCard, key: any) => {
              return (
                <Item key={key}>
                  <Link to="/restaurants">{value.name} </Link>
                </Item>
              );
            })}
              <Category> Cuisines: </Category>
              {cuisines.map((value: RestCard, key: any) => {
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
export default SearchResults;
