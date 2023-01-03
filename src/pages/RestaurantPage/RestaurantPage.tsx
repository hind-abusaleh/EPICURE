import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBreakfasts } from "../../slicers/breakfastsSlicer";
import { setLanches } from "../../slicers/lanchesSlicer";
import { setDinners } from "../../slicers/dinnersSlicer";
import { fetchRestaurantDishes } from '../../services/fetchData';
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

    return (
        <>
            <h1>{restaurant.name}</h1>
        </>
    )
}