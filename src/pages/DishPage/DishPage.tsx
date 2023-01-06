import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MainContainer,
    DishContainer,
    DishImage,
    InfoContainer,
    DishName,
    Content,
    SideContainer,
    Titel,
    Button
} from "./style";
import { RadioButton, CheckBox, Quantity } from "../../components/CustomComponents/index";
import { incrementByAmount } from "../../slicers/itemsInBagSlicer";
import { setQuantity } from "../../slicers/quantityOfDishSlicer";
import { useNavigate} from "react-router-dom";

export default function DishPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dish = useSelector((state: any) => state.activeDish.value);
    const quantity = useSelector((state: any) => state.quantityOfDish.value);
    const items = useSelector((state: any) => state.itemsInBag.value);
    const SideOptions = ["White bread", "Sticky rice"];
    console.log(items);
    function update(){
        dispatch(incrementByAmount(quantity));
        setQuantity();
        //navigate('/RestaurantPage');
    }
    return (
        <MainContainer>
            <DishContainer>
                <DishImage img={require(`../../${dish.img}`)} />
                <InfoContainer>
                    <DishName>{dish.name}</DishName>
                    <Content>{dish.content}</Content>
                </InfoContainer>
            </DishContainer>
            <SideContainer>
                <Titel>Choose a side</Titel>
                <RadioButton options={SideOptions}></RadioButton>
            </SideContainer>
            <SideContainer>
                <Titel>Changes</Titel>
                <CheckBox/>
            </SideContainer>
            <SideContainer>
                <Titel>Quantity</Titel>
                <Quantity/>
            </SideContainer>
            <Button onClick={() =>update()}>Add to bag</Button>
        </MainContainer>
    )
}