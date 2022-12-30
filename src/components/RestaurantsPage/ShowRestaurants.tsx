import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RestCard } from "../../constants/interfaces";
import { setRestaurants } from "../../slicers/RestaurantsSlicer";
import { RestaurantsFilter } from "../../helpers/index";
import { RestaurantCard } from "../Cards/Mobile/index";
import { MainContainer } from "./styles";

const ShowRestaurants = function (props: { group: string }) {
    const dispatch = useDispatch();
    const restaurants = useSelector((state: any) => state.restaurants.value);
    const FilterdList = RestaurantsFilter(restaurants, props.group);
    useEffect(() => {
        async function fetchFunction() {
            const response:any = await(await fetch('http://localhost:3001/api/restaurants/getRestaurants')).json();
            dispatch(setRestaurants(response));
        }
        fetchFunction();
    }, []);

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