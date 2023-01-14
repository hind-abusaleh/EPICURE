import React from 'react';
import { Link } from "react-router-dom";
import { PopupBox, Box, CloseIcon, BurgerContent, FooterContent } from './styles';
import { ICONS } from '../../../assets';

const Burger = function (props: { handleClose: any }) {
  return (


    <PopupBox>
      <Box>
        <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={props.handleClose} /> </CloseIcon>
        <BurgerContent>
          <p><Link to="/restaurants" onClick={props.handleClose} >Restaurants </Link></p>
          <p><Link to="/chefs" onClick={props.handleClose} >Chefs</Link></p>
        </BurgerContent>
        <FooterContent>
          <p><Link to="/" onClick={props.handleClose}>Contact Us</Link></p>
          <p><Link to="/" onClick={props.handleClose}>Term of Use</Link></p>
          <p><Link to="/" onClick={props.handleClose}>Privacy Policy</Link></p>
        </FooterContent>
      </Box>
    </PopupBox>

  );
};

export default Burger;