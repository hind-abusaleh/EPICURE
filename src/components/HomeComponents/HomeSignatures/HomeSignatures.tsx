import React from 'react';
import { Main_Container, Icons_Container, Icon, Main_Text } from './styles';
import {BIG_ICONS} from '../../../assets';
function HomeSignatures() {



    return (
        <Main_Container>
            <Main_Text>Signature Dish Of:</Main_Text>
            <Icons_Container>
                <Icon><img src={BIG_ICONS.spicy}/> Spicy </Icon>
                <Icon><img src={BIG_ICONS.vegetarian}/> Vegitarian </Icon>
                <Icon><img src={BIG_ICONS.vegan}/> Vegan </Icon>
            </Icons_Container>
        </Main_Container>
    );
}

export default HomeSignatures;