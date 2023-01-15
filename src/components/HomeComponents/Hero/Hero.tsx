import React from 'react';
import {MainContainer} from './styles';
import SetWindowSize from "../../../helpers/SetWindowSize";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

function Hero() {
  const WindowSize = SetWindowSize();
  
  return (
    <MainContainer>
      {WindowSize < 769 ? 
          <MobileHero/>
          :
          <DesktopHero/>
      }
    </MainContainer>
  );
}
export default Hero;
