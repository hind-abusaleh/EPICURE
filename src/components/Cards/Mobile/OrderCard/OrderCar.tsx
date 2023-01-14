import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Order } from '../../../../constants/interfaces';
import { Card, Image, Info, NameAndQuantity, SideAndChanges, Price } from './styles';
import { ICONS } from '../../../../assets';

const OrderCard = function (props: { order: Order }) {
    const order = props.order;
    let Sticky_Less_spicy = "";
    let Whithout_peanuts = "";
    if(order.changes.Whithout_peanuts) Whithout_peanuts = "| Whithout peanuts";
    if(order.changes.Sticky_Less_spicy) Sticky_Less_spicy ="| Sticky Less spicy";
    return (
        <Card>
            <Image im={require(`../../../../${order.dish_img}`)}/>
            <Info> 
                <NameAndQuantity>{order.quantity}x {order.dish_name}</NameAndQuantity>
                <SideAndChanges>
                    {order.side} 
                    {Whithout_peanuts}
                    {Sticky_Less_spicy}
                </SideAndChanges>
                <Price>
                <img src={ICONS.ils}/>
                {order.price}
                </Price>
            </Info>
        </Card>
    );
};
export default OrderCard;