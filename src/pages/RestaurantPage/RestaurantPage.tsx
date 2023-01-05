import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBreakfasts } from "../../slicers/breakfastsSlicer";
import { setLanches } from "../../slicers/lanchesSlicer";
import { setDinners } from "../../slicers/dinnersSlicer";
import { fetchRestaurantDishes } from '../../services/fetchData';
import { BarButton } from "../Restaurants/MobileRestaurants/styels";
import {
    RestaurantDishes,
    OpenContainer,
    ChefName,
    ResName,
    InfoContainer,
    ResImage,
    ResContainer,
    MainContainer,
    DishesBar
} from "./styles";
import { ICONS } from "../../assets/index";
import { OpenOrClosed } from "../../helpers/index";
import ShowDishes from "../../components/RestaurantsPage/ShowDishes";

export default function RestaurantPage() {
    const dispatch = useDispatch();
    const restaurant = useSelector((state: any) => state.activeRestaurant.value);
    const fetchRestaurantData = useCallback(async (restaurant: string) => {
        const breakfasts = await fetchRestaurantDishes([restaurant, "breakfast"]);
        if (breakfasts) {
            dispatch(setBreakfasts(breakfasts));
        }
        const lanches = await fetchRestaurantDishes([restaurant, "lanch"]);
        if (lanches) {
            dispatch(setLanches(lanches));
        }
        const dinners = await fetchRestaurantDishes([restaurant, "dinner"]);
        if (dinners) {
            dispatch(setDinners(dinners));
        }
    }, [])

    useEffect(() => {
        fetchRestaurantData(restaurant.name);
    }, [fetchRestaurantData])

    const [Group, setGroup] = useState("breakfast");
    const ChangeGroup = (g: string) => {
        setGroup(g);
    }
    const CheckActive = (state: string) => {
        if (Group === state) return true;
        else return false;
    }
    return (
        <MainContainer>
            <ResContainer>
                <ResImage img={require(`../../${restaurant.img}`)} />
                <InfoContainer>
                    <ResName>{restaurant.name}</ResName>
                    <ChefName>{restaurant.chef}</ChefName>
                    <OpenContainer>
                        <img src={ICONS.clock} alt="clock" />
                        {OpenOrClosed(restaurant.opening_hour, restaurant.closing_hour)}
                    </OpenContainer>
                </InfoContainer>
            </ResContainer>
            <RestaurantDishes>
                <DishesBar>
                    <BarButton active={CheckActive("breakfast")} onClick={() => ChangeGroup("breakfast")}>Breakfast</BarButton>
                    <BarButton active={CheckActive("lanch")} onClick={() => ChangeGroup("lanch")}>Lanch</BarButton>
                    <BarButton active={CheckActive("dinner")} onClick={() => ChangeGroup("dinner")}>Dinner</BarButton>
                </DishesBar>
                <ShowDishes group = {Group}/>
            </RestaurantDishes>
        </MainContainer>
    )
}