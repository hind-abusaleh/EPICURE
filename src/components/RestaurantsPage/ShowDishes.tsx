import React from 'react';
import { useSelector } from 'react-redux';
import { DishCard_interface } from "../../constants/interfaces";
import { SetWindowSize } from '../../helpers';
import { DishCard } from "../Cards/Mobile/index";
import { MainContainer } from "./styles";

const ShowDishes = function (props: { group: string }) {
    const breakfast = useSelector((state: any) => state.activeRestaurant_breakfastDishes.value);
    const lanch = useSelector((state: any) => state.activeRestaurant_lanchDishes.value);
    const dinner = useSelector((state: any) => state.activeRestaurant_dinnerDishes.value);
    let dishes = breakfast;
    if(props.group === "lanch") dishes = lanch;
    else if(props.group === "dinner") dishes = dinner;
    const windowSize = SetWindowSize();

    return (
        <MainContainer windowSize={windowSize} >
            {dishes && dishes.map((dish:DishCard_interface, index: number) => (
                    <DishCard key={index} dish={dish} page={"restaurants"}/>
            ))}
        </MainContainer>
    )
}
export default ShowDishes;