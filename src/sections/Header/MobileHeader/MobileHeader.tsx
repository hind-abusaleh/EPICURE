import { ICONS } from '../../../assets/index';
import { useState } from "react";
import { Burger, Search, Bag } from '../../../components/PopUps/index'
import { Link } from "react-router-dom";
import { Navbar, Button, RightSide, Logo, Burger_Style } from './styles';
import React from 'react';
import { SetIsOpen_bag } from "../../../slicers/isOpen_bagSlicer";
import { useDispatch, useSelector } from 'react-redux';

function MobileHeader() {
  const dispatch = useDispatch();
  const isOpen_bag = useSelector((state: any) => state.isOpen_bag.value);

  const [isOpen_burger, setIsOpen_burger] = useState(false);

  const togglePopup_burger = () => {
    dispatch(SetIsOpen_bag(false));
    setIsOpen_burger(!isOpen_burger);
  }

  const [isOpen_search, setIsOpen_search] = useState(false);

  const togglePopup_search = () => {
    dispatch(SetIsOpen_bag(false));
    setIsOpen_search(!isOpen_search);
  }
  
  const togglePopup_bag = () => {
    dispatch(SetIsOpen_bag(!isOpen_bag));
  }

  return (
    <>

      <Navbar>
        <Burger_Style><img src={ICONS.burger} alt="burger" onClick={togglePopup_burger} /></Burger_Style>
        {isOpen_burger && <Burger
          handleClose={togglePopup_burger}
        />}

        <Logo> <Link to='/'>
            <img src={ICONS.logo} alt="user" />
          </Link> </Logo>

        <RightSide>
          <Button><img src={ICONS.search} alt="search" onClick={togglePopup_search} /></Button>
          {isOpen_search && <Search
            handleClose={togglePopup_search}
          />}

          <Button  > <Link to='/'>
            <img src={ICONS.user} alt="user" />
          </Link></Button>


          <Button><img src={ICONS.bag} alt="bag" onClick={togglePopup_bag} /></Button>
          {isOpen_bag && <Bag/>}

        </RightSide>


      </Navbar>

    </>

  );
}

export default MobileHeader;