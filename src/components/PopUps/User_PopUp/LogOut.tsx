import React from 'react';
import { PopupBox, Box, Button } from "../Register_PopUp/styles";
import { CloseIcon } from "../Burger_PopUp/styles";
import { ICONS } from '../../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoged_in } from "../../../slicers/isLoged_inSlicer";
import { removeOrders } from '../../../slicers/ordersSlicer';
import { removeSavedOrders } from '../../../slicers/user_bagItemsSlicer';
import { reset } from '../../../slicers/itemsInBagSlicer';
import { Order } from '../../../constants/interfaces';
import axios from 'axios';
import { createOrder } from '../../../constants/URLs';

const LogOut = function (props: { handleClose: any }) {
    const dispatch = useDispatch();
    const activeUser = useSelector((state: any) => state.activeUser.value);
    const orders = useSelector((state: any) => state.orders.value);

    const Logout = () => {
        orders.forEach(async (order: Order) => {
            const myOrder = {
                dish_id: order.dish_id,
                user_email: activeUser.email,
                dish_name: order.dish_name,
                changes: order.changes,
                side: order.side,
                quantity: order.quantity,
                dish_img: order.dish_img,
                price: order.price
            }
            const res = await axios.post(createOrder, myOrder);
        });
        dispatch(setIsLoged_in(false));
        dispatch(removeOrders());
        dispatch(removeSavedOrders());
        dispatch(reset(0));
        props.handleClose();
    }

    return (
        <PopupBox>
            <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={props.handleClose} /> </CloseIcon>
            <Box>
                <p> Hi, {activeUser.firstName}</p>
                <Button onClick={Logout}>Log Out</Button>
            </Box>
        </PopupBox>
    );
};

export default LogOut;