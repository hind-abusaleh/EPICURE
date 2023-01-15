import React from 'react';
import { Main_Container, About, Titel, Apps_Container, Container } from './styles';
import { BIG_ICONS } from '../../../assets';
import { SetWindowSize } from '../../../helpers';

function HomeSignatures() {
    const WindowSize = SetWindowSize();

    return (
        <Main_Container WindowSize={WindowSize}>
            <img src={BIG_ICONS.logo} />
            <Container WindowSize={WindowSize}>
                <Apps_Container WindowSize={WindowSize}>
                    <img src={BIG_ICONS.google_play} />
                    <img src={BIG_ICONS.app_store} />
                </Apps_Container>
                <About >
                    <Titel>About us:</Titel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a  lacus vel justo fermentum bibendum non
                    eu ipsum. Cras porta malesuada eros, eget blandit
                    turpis suscipit at.  Vestibulum sed massa in magna sodales porta. Vivamus elit urna,
                    dignissim a vestibulum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                    eu ipsum. Cras porta malesuada eros.
                </About>
            </Container>
        </Main_Container>
    );
}

export default HomeSignatures;