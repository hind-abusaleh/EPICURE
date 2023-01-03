import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RestCard} from '../../../../constants/interfaces';
import {Card, CardImg, CardInfo, ResName, ChefName} from "./styles";
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setActiveRestaurant } from "../../../../slicers/activeRestaurantSlicer";

const RestaurantCard = function(props:{ res:RestCard, page:string})  {
    const dispatch = useDispatch();
    let res = props.res;
    const update = () => {
         dispatch(setActiveRestaurant(res));
         navigate('/RestaurantPage');
        };
    const navigate = useNavigate();
    return (
        <Card  page= {props.page} onClick={() => update() } >
            <CardImg im={require(`../../../../${res.img}`)} page= {props.page}> </CardImg>
            <CardInfo>
                <ResName> {res.name} </ResName>
                <ChefName> {res.chef} </ChefName>
            </CardInfo>
        </Card>
    );
};
export default RestaurantCard;