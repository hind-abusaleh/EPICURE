import React, { useEffect } from 'react';
import { BIG_ICONS} from '../../../assets';
import { OrderBox, OrdersContainer, Titel, EndContainer, PriceContainer, IconImage ,Button} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { AddOrder } from "../../../slicers/ordersSlicer";
import { Order } from '../../../constants/interfaces';
import OrderCard from "../../Cards/Mobile/OrderCard/OrderCar";
import CalcTotalPrice from "../../../helpers/CalcTotalPrice";
import { Link } from 'react-router-dom';


const OrdersBag = function () {
  const dispatch = useDispatch();
  const dish = useSelector((state: any) => state.activeDish.value);
  const changes = useSelector((state: any) => state.changesOnDish.value);
  const side = useSelector((state: any) => state.sideOnDish.value);
  const quantityOfDish = useSelector((state: any) => state.quantityOfDish.value);
  const itemsInBag = useSelector((state: any) => state.itemsInBag.value);
  const orders = useSelector((state: any) => state.orders.value);

  const order: Order = {
    dish_name: dish.name,
    changes: changes,
    side: side,
    quantity: quantityOfDish,
    dish_image: dish.img,
    price: dish.price
  };

  useEffect(() => {
    if (orders.length < itemsInBag) { dispatch(AddOrder(order)); }
  }, [])

  const total = CalcTotalPrice(orders);

  return (
    <OrderBox>
      <Titel>My order</Titel>
      <OrdersContainer>
        {orders && orders.map((order: Order, index: number) => (
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
        <Link to='/Restaurants'><Button >Checkout </Button></Link> 
      </EndContainer>
    </OrderBox>
  );
};

export default OrdersBag;

