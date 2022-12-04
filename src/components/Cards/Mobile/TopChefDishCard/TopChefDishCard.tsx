import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopChefDishCard_interface} from '../../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/styles";
import {CardInfo} from './styles';

const TopChefDishCard = function(props:{ dish:TopChefDishCard_interface})  {
    let dish = props.dish;
    return (
        <Card>
            <CardImg im={dish.img}></CardImg>
            <CardInfo> {dish.name} </CardInfo>
        </Card>
    );
};
export default TopChefDishCard;