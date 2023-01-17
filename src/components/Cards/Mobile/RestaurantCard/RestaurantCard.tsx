import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RestCard} from '../../../../constants/interfaces';
import {Card, CardImg, CardInfo, ResName, ChefName} from "./styles";
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setActiveRestaurant } from "../../../../slicers/activeRestaurantSlicer";
import { IMAGES } from "../../../../assets";
import { SetWindowSize } from '../../../../helpers';

const RestaurantCard = function(props:{ res:RestCard, page:string})  {
    const dispatch = useDispatch();
    let res = props.res;
    const update = () => {
         dispatch(setActiveRestaurant(res));
         navigate('/RestaurantPage');
        };
    let stars: string;
    if(res.rating === 1) stars = IMAGES.stars_1;
    if(res.rating === 2) stars = IMAGES.stars_2;
    if(res.rating === 3) stars = IMAGES.stars_3;
    if(res.rating === 4) stars = IMAGES.stars_4;
    else stars = IMAGES.stars_5;
    const WindowSize = SetWindowSize();

    const navigate = useNavigate();
    return (
        <Card  page= {props.page} onClick={() => update() } >
            <CardImg im={require(`../../../../${res.img}`)} page= {props.page}> </CardImg>
            <CardInfo WindowSize={WindowSize}>
                <ResName> {res.name} </ResName>
                <ChefName> {res.chef} </ChefName>
                {WindowSize >= 769 && 
                <img src={stars} />
                }
            </CardInfo>
        </Card>
    );
};
export default RestaurantCard;