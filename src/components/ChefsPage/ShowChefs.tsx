import React from 'react';
import { useSelector } from 'react-redux';
import { ChefCard, ChefImage, TextBlock,MainContainer } from "./styles";
import { ChefsFilter, SetWindowSize } from "../../helpers";

const ShowChefs = function (props: { group: string }) {
    const chefs = useSelector((state: any) => state.chefs.value);
    const FilterdList = ChefsFilter(chefs, props.group);
    const windowSize = SetWindowSize();

    return (

        <MainContainer windowSize={windowSize}>
            
                {FilterdList && FilterdList.map((chef: any, index: number) => (
                    <ChefCard windowSize={windowSize} key={index}>
                    <ChefImage im={require(`../../${chef.img}`)} key={index}>
                        <TextBlock > {chef.name} </TextBlock>
                    </ChefImage>
                    </ChefCard>
                ))}
            
        </MainContainer>

    )
}
export default ShowChefs;