import React from 'react';
import { useSelector } from 'react-redux';
import { RestCard } from "../../constants/interfaces";
import { RestaurantsFilter } from "../../helpers/index";
import { RestaurantCard } from "../Cards/Mobile/index";
import { MainContainer } from "./styles";

const ShowRestaurants = function (props: { group: string }) {
    const restaurants = useSelector((state: any) => state.restaurants.value);
    const FilterdList = RestaurantsFilter(restaurants, props.group);
    return (
        <>
            {FilterdList && FilterdList.map((res: RestCard, index: number) => (
                <MainContainer key={index}>
                    <RestaurantCard res={res} page={"restaurants"}/>
                </MainContainer>
            ))}
        </>
    )
}
export default ShowRestaurants;