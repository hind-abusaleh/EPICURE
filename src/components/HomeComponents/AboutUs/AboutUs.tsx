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
                Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit. In a {"\n"} lacus vel justo fermentum{"\n"} bibendum non 
                {"\n"}eu ipsum. Cras porta malesuada{"\n"} eros, eget blandit{"\n"}
turpis suscipit at.  Vestibulum sed {"\n"}massa in magna sodales porta.{"\n"} Vivamus elit urna, {"\n"}
dignissim a vestibulum.{"\n"}
Lorem ipsum dolor sit amet, {"\n"}consectetur adipiscing elit. In a{"\n"} lacus vel justo fermentum{"\n"} bibendum no
{"\n"}eu ipsum. Cras porta {"\n"}malesuada eros.
            </About>
        </Main_Container>
    );
}

export default HomeSignatures;