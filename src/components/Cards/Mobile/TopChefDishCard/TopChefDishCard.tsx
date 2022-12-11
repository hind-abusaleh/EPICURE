import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopChefDishCard_interface} from '../../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/styles";
import {CardInfo} from './styles';

const TopChefDishCard = function(props:{ dish:TopChefDishCard_interface,  page:string})  {
    let dish = props.dish;
    return (
        <Card page= {props.page}>
            <CardImg im={dish.img} page= {props.page}></CardImg>
            <CardInfo> {dish.name} </CardInfo>
        </Card>
    );
};
export default TopChefDishCard;