import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMAGES, ICONS, BIG_ICONS } from '../../../assets';
import { HistoryOrder, Order } from '../../../constants/interfaces';
import { getHistoryOrdersByID, getLastHistoryOrder, getOrdersByID } from '../../../constants/URLs';
import { Box } from '../Bag_PopUp/styles'
import {
    MainContainer, InnerContainer, Titel
    , OrdersContainer, Info, PriceContainer, IconImage, Price, Paragraph
} from "./styles";
import CalcTotalPrice from "../../../helpers/CalcTotalPrice";
import CountDown from "./CountDown";

const OrderRecived = function () {
    
    const preparationTime_inMins = 55;
    const activeUser = useSelector((state: any) => state.activeUser.value);
    const [history_order, setHistory_order] = useState<HistoryOrder>();
    const [orders, setOrders] = useState<Order[]>();

    const fetch_last_order = useCallback(async () => {
        const res = await axios.post(getLastHistoryOrder, { "email": activeUser.email });
        const history_orderID = res.data;
        const res2 = await axios.post(getHistoryOrdersByID, { "id": history_orderID });
        const history_order = res2.data;
        setHistory_order(history_order);
        const ordersID = history_order.orders_id;
        const res3 = await axios.post(getOrdersByID, ordersID);
        const orders = res3.data;
        setOrders(orders);
    }, [])

    
    useEffect(() => {
        fetch_last_order();
    }, [fetch_last_order])

    const total = CalcTotalPrice(orders as Order[]);
    return (

        <Box>
            <MainContainer>
                <img src={IMAGES.nike} alt="nike"></img>
                <InnerContainer>
                    <Titel>order recived</Titel>
                    <Paragraph>Your food is in process</Paragraph>
                </InnerContainer>
                <CountDown preparationTime_inMins={preparationTime_inMins}/>
                <OrdersContainer>
                    {orders && orders.map((order: Order, index: number) => (
                        <Info key={index}>
                            {order.quantity}x {order.dish_name}
                            <Price>
                                <img src={ICONS.ils} />
                                {order.price}
                            </Price>
                        </Info>
                    ))}
                </OrdersContainer>
                <PriceContainer>
                    Total  -
                    <IconImage>
                        <img src={BIG_ICONS.ils} />
                    </IconImage>
                    {total}
                </PriceContainer>

            </MainContainer>
        </Box>

    );
};

export default OrderRecived;

