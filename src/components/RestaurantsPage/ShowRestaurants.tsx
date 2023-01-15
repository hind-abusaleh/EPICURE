import React from 'react';
import { useSelector } from 'react-redux';
import { RestCard } from "../../constants/interfaces";
import { RestaurantsFilter, SetWindowSize } from "../../helpers/index";
import { RestaurantCard } from "../Cards/Mobile/index";
import { MainContainer } from "./styles";

const ShowRestaurants = function (props: { group: string }) {
    const windowSize = SetWindowSize();
    const restaurants = useSelector((state: any) => state.restaurants.value);
    const FilterdList = RestaurantsFilter(restaurants, props.group);

    return (
        <MainContainer  windowSize={windowSize}>
            {FilterdList && FilterdList.map((res: RestCard, index: number) => (
                
                    <RestaurantCard key={index} res={res} page={"restaurants"}/>
                
            ))}
        </MainContainer>
    )
}
export default ShowRestaurants;