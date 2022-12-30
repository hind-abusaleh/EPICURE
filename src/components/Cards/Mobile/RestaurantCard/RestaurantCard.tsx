import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RestCard} from '../../../../constants/interfaces';
import {Card, CardImg, CardInfo, ResName, ChefName} from "./styles";

const RestaurantCard = function(props:{ res:RestCard, page:string})  {
    let res = props.res;
    return (
        <Card  page= {props.page}>
            <CardImg im={require(`../../../../${res.img}`)} page= {props.page}> </CardImg>
            <CardInfo>
                <ResName> {res.name} </ResName>
                <ChefName> {res.chef} </ChefName>
            </CardInfo>
        </Card>
    );
};
export default RestaurantCard;