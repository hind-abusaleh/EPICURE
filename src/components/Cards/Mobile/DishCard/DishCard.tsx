import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DishCard_interface} from '../../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/styles";
import { CardInfo, BasicInfo, Name, Price } from './styles';
import { ICONS } from '../../../../assets';

const DishCard = function(props:{ dish:DishCard_interface , page:string})  {
    const dish = props.dish;
    return (
        <Card page= {props.page}>
            <CardImg im={dish.img} page= {props.page}> </CardImg>
            <CardInfo>
                <BasicInfo>
                    <Name>{dish.name}</Name>
                    {dish.content}
                </BasicInfo>
                <img src={dish.icon}/>
                <Price>
                    <img src={ICONS.ils}/>
                    {dish.price}
                </Price>
            </CardInfo>
    </Card>
    );
};
export default DishCard;