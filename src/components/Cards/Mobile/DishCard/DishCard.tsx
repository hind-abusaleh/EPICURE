import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DishCard_interface} from '../../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/styles";
import { CardInfo, BasicInfo, Name, Price } from './styles';
import { ICONS } from '../../../../assets';
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setActiveDish } from "../../../../slicers/activeDishSlicer";
import { SetWindowSize } from '../../../../helpers';

const DishCard = function(props:{ dish:DishCard_interface , page:string})  {
    const dish = props.dish;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const update = () => {
        dispatch(setActiveDish(dish));
        navigate('/DishPage');
       };
       const WindowSize = SetWindowSize();

    return (
        <Card page= {props.page} onClick={() => update() }>
            <CardImg im={require(`../../../../${dish.img}`)} page= {props.page}> </CardImg>
            <CardInfo WindowSize={WindowSize}>
                <BasicInfo WindowSize={WindowSize}>
                    <Name>{dish.name}</Name>
                   {dish.content}
                </BasicInfo>
                <img src={require(`../../../../${dish.icon}`)}/>
                <Price>
                    <img src={ICONS.ils}/>
                    {dish.price}
                </Price>
            </CardInfo>
    </Card>
    );
};
export default DishCard;