import { ICONS } from '../../../assets/index';
import { useState } from "react";
import { Burger, Search, Bag, User, CheckOut, OrderRecived } from '../../../components/PopUps/index'
import { Link } from "react-router-dom";
import { Navbar, Button, RightSide, Logo, Burger_Style } from './styles';
import React from 'react';
import { SetIsOpen_bag } from "../../../slicers/isOpen_bagSlicer";
import { SetIsOpen_user } from "../../../slicers/isOpen_userSlicer";
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen_orderRecived } from "../../../slicers/isOpen_orderRecivedSlicer";

function MobileHeader() {
  const dispatch = useDispatch();
  const isOpen_bag = useSelector((state: any) => state.isOpen_bag.value);
  const isOpen_user = useSelector((state: any) => state.isOpen_user.value);
  const isOpen_checkout = useSelector((state: any) => state.isOpen_checkout.value);
  const isOpen_orderRecived = useSelector((state: any) => state.isOpen_orderRecived.value);

  const [isOpen_burger, setIsOpen_burger] = useState(false);

  const togglePopup_burger = () => {
    dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
    setIsOpen_burger(!isOpen_burger);
  }

  //const [isOpen_user, setIsOpen_user] = useState(false);

  const togglePopup_user = () => {
    dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
    //setIsOpen_user(!isOpen_user);
    dispatch(SetIsOpen_user(!isOpen_user));
  }


  const [isOpen_search, setIsOpen_search] = useState(false);

  const togglePopup_search = () => {
    dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
    setIsOpen_search(!isOpen_search);
  }

  const togglePopup_bag = () => {
    dispatch(SetIsOpen_bag(!isOpen_bag));
    dispatch(setIsOpen_orderRecived(false));

  }
const closeAll =() =>{
  dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
}
  return (
    <>

      <Navbar>
        <Burger_Style><img src={ICONS.burger} alt="burger" onClick={togglePopup_burger} /></Burger_Style>
        {isOpen_burger && <Burger
          handleClose={togglePopup_burger}
        />}

        <Logo> <Link to='/'>
          <img src={ICONS.logo} alt="user" onClick={closeAll}/>
        </Link> </Logo>

        <RightSide>
          <Button><img src={ICONS.search} alt="search" onClick={togglePopup_search} /></Button>
          {isOpen_search && <Search
            handleClose={togglePopup_search}
          />}

          <Button> <img src={ICONS.user} alt="user" onClick={togglePopup_user} /></Button>
          {isOpen_user && <User
            handleClose={togglePopup_user}
          />}


          <Button><img src={ICONS.bag} alt="bag" onClick={togglePopup_bag} /></Button>
          {isOpen_bag && <Bag />}

          {false ?
          <Button><img src={ICONS.admin} alt="bag" /></Button>
          :
          <></>
          }

        </RightSide>


      </Navbar>

      {isOpen_checkout && <CheckOut />}


      {isOpen_orderRecived && <OrderRecived/>}


    </>

  );
}

export default MobileHeader;