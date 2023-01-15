import { ICONS } from '../../../assets/index';
import { useState } from "react";
import { Search, Bag, User, CheckOut, OrderRecived } from '../../../components/PopUps/index'
import { Link } from "react-router-dom";
import { Navbar, Button, RightSide, Logo, Paragraph, LeftSide, LogoContainer } from './styles';
import React from 'react';
import { SetIsOpen_bag } from "../../../slicers/isOpen_bagSlicer";
import { SetIsOpen_user } from "../../../slicers/isOpen_userSlicer";
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen_orderRecived } from "../../../slicers/isOpen_orderRecivedSlicer";

function DesktopHeader() {
  const dispatch = useDispatch();
  const isOpen_bag = useSelector((state: any) => state.isOpen_bag.value);
  const isOpen_user = useSelector((state: any) => state.isOpen_user.value);
  const isOpen_checkout = useSelector((state: any) => state.isOpen_checkout.value);
  const isOpen_orderRecived = useSelector((state: any) => state.isOpen_orderRecived.value);


  const togglePopup_user = () => {
    dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
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
  const closeAll = () => {
    dispatch(SetIsOpen_bag(false));
    dispatch(setIsOpen_orderRecived(false));
  }
  return (
    <>

      <Navbar>
        <LeftSide>
          <LogoContainer>
            <Logo> <Link to='/'>
              <img src={ICONS.logo} alt="user" onClick={closeAll} />
            </Link> </Logo>
            <Paragraph> EPICURE </Paragraph>
          </LogoContainer>
          <Link to="/restaurants"  >Restaurants </Link>
          <Link to="/chefs"  >Chefs</Link>
        </LeftSide>

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

        </RightSide>


      </Navbar>

      {isOpen_checkout && <CheckOut />}


      {isOpen_orderRecived && <OrderRecived />}


    </>

  );
}

export default DesktopHeader;