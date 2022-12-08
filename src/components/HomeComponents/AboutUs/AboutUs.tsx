import React from 'react';
import { Main_Container , About, Titel} from './styles';
import {BIG_ICONS} from '../../../assets';
function HomeSignatures() {
    return (
        <Main_Container>
            <img src={BIG_ICONS.logo}/>
            <img src={BIG_ICONS.app_store}/>
            <About>
                <Titel>About us:</Titel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a  lacus vel justo fermentum bibendum non 
                eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta. Vivamus elit urna, 
dignissim a vestibulum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.
            </About>
        </Main_Container>
    );
}

export default HomeSignatures;