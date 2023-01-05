import React from 'react';
import { useSelector } from 'react-redux';
import {
    MainContainer,
    DishContainer,
    DishImage,
    InfoContainer,
    DishName,
    Content,
    SideContainer,
    Titel
} from "./style";
import { RadioButton } from "../../components/CustomComponents/index";
import { CheckBox } from "../../components/CustomComponents/index";
export default function DishPage() {
    const dish = useSelector((state: any) => state.activeDish.value);
    const SideOptions = ["White bread", "Sticky rice"];
    const ChangesOptions = ["Whithout peanuts", "Sticky Less spicy"];
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
                <CheckBox options={ChangesOptions}></CheckBox>
            </SideContainer>
        </MainContainer>
    )
}