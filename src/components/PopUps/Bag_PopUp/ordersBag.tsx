import React, { useEffect, useState } from 'react';
import { BIG_ICONS } from '../../../assets';
import { OrderBox, OrdersContainer, Titel, EndContainer, PriceContainer, IconImage, Button } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { AddOrder } from "../../../slicers/ordersSlicer";
import { Order } from '../../../constants/interfaces';
import OrderCard from "../../Cards/Mobile/OrderCard/OrderCar";
import CalcTotalPrice from "../../../helpers/CalcTotalPrice";
import { Link } from 'react-router-dom';
import { setIsThere_Order2Add } from '../../../slicers/isThere_Order2AddSlicer';
import { SetIsOpen_user } from "../../../slicers/isOpen_userSlicer";
import { setIsOpen_checkout } from "../../../slicers/isOpen_checkoutSlicer";
import { SetIsOpen_bag } from '../../../slicers/isOpen_bagSlicer';

const OrdersBag = function () {
  const dispatch = useDispatch();
  const dish = useSelector((state: any) => state.activeDish.value);
  const changes = useSelector((state: any) => state.changesOnDish.value);
  const side = useSelector((state: any) => state.sideOnDish.value);
  const quantityOfDish = useSelector((state: any) => state.quantityOfDish.value);
  const orders = useSelector((state: any) => state.orders.value);
  const needToAdd = useSelector((state: any) => state.isThere_Order2Add.value);
  const saved_orders = useSelector((state: any) => state.user_bagItems.value);
  const isLoged_in = useSelector((state: any) => state.isLoged_in.value);
  const isOpen_user = useSelector((state: any) => state.isOpen_user.value);
  const isOpen_bag = useSelector((state: any) => state.isOpen_bag.value);
  

  
  const order: Order = {
    dish_id: dish._id,
    dish_name: dish.name,
    changes: changes,
    side: side,
    quantity: quantityOfDish,
    dish_img: dish.img,
    price: dish.price
  };

  useEffect(() => {
    if (needToAdd) { dispatch(AddOrder(order)); dispatch(setIsThere_Order2Add(false)); }
  }, [])

  const total = CalcTotalPrice(orders) + CalcTotalPrice(saved_orders);

  const togglePopup_user = () => {
    dispatch(SetIsOpen_user(!isOpen_user));
  }

  const checkForSignIn = () => {
    if (!isLoged_in) {
      dispatch(SetIsOpen_bag(!isOpen_bag));
      togglePopup_user();
    }
    else {
      dispatch(setIsOpen_checkout(true));
      dispatch(SetIsOpen_bag(!isOpen_bag));
    }
  }

  return (
    <OrderBox>
      <Titel>My order</Titel>
      <OrdersContainer>
        {orders && orders.map((order: Order, index: number) => (
          <OrderCard order={order} key={index} />
        ))}
        {saved_orders && saved_orders.map((order: Order, index: number) => (
          <OrderCard order={order} key={index} />
        ))}
      </OrdersContainer>
      <EndContainer>
        <PriceContainer>
          Total  -
          <IconImage>
            <img src={BIG_ICONS.ils} />
          </IconImage>
          {total}
        </PriceContainer>
        <Link to='/Restaurants'><Button onClick={checkForSignIn} >Checkout </Button> </Link>
      </EndContainer>
    </OrderBox>
  );
};

export default OrdersBag;

