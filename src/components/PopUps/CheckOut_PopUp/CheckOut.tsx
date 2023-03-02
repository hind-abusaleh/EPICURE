import React, { useEffect, useState } from 'react';
import { LogInButton } from "../SignIn_PopUp/styles";
import { CloseIcon } from "../Burger_PopUp/styles";
import { BIG_ICONS, ICONS } from '../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen_checkout } from '../../../slicers/isOpen_checkoutSlicer';
import { Order } from "../../../constants/interfaces";
import axios from 'axios';
import { createOrder, getLastHistoryOrder, getUserByEmailURL } from "../../../constants/URLs";
import { removeOrders } from "../../../slicers/ordersSlicer";
import { removeSavedOrders } from "../../../slicers/user_bagItemsSlicer";
import { Input } from "../Register_PopUp/styles";
import { PopupBox, Box, Paragraph, InputContainer, Titel, OrderContainer } from "./styles";
import { EndContainer, PriceContainer, IconImage } from "../Bag_PopUp/styles";
import OrderCard from '../../Cards/Mobile/OrderCard/OrderCar';
import CalcTotalPrice from '../../../helpers/CalcTotalPrice';
import { toast } from 'react-toastify';
import { createHistoryOrder, updateUsersBag } from "../../../constants/URLs";
import { reset } from "../../../slicers/itemsInBagSlicer";
import { Link } from 'react-router-dom';
import { setIsOpen_orderRecived } from "../../../slicers/isOpen_orderRecivedSlicer";

const CheckOut = function () {
    const dispatch = useDispatch();
    const orders = useSelector((state: any) => state.orders.value);
    const activeUser = useSelector((state: any) => state.activeUser.value);
    const saved_orders = useSelector((state: any) => state.user_bagItems.value);

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [CVV, setCVV] = useState("");
    const [expiryDate, setexpiryDate] = useState("");

    const [unable, setUnable] = useState(true);

    const handleClose = () => {
        dispatch(setIsOpen_checkout(false))
    }

    const set = (input: string, type: string) => {
        if (type === "fullName") { setFullName(input); }
        if (type === "address") { setAddress(input); }
        if (type === "phone") { setPhone(input); }
        if (type === "cardNumber") { setCardNumber(input); }
        if (type === "nameOnCard") { setNameOnCard(input); }
        if (type === "CVV") { setCVV(input); }
        else setexpiryDate(input);

        if (fullName === "" || address === "" ||
            phone === "" || cardNumber === "" ||
            nameOnCard === "" || CVV === "" ||
            expiryDate === "")
            setUnable(true);

        if (fullName !== "" && address !== "" &&
            phone !== "" && cardNumber !== "" &&
            nameOnCard !== "" && CVV !== "" &&
            expiryDate !== "")
            setUnable(false);
    }
    const total = CalcTotalPrice(orders) + CalcTotalPrice(saved_orders);

    const placeOrder = async () => {
        const creditCardValidateExpiry = require('credit-card-expiry-validator');
        if (creditCardValidateExpiry.isExpiryInvalid(expiryDate)) {
            toast.error(creditCardValidateExpiry.isExpiryInvalid(expiryDate));
            return
        }

        const validators = require('credit-card-validate');
        const card = new validators.cards.MasterCard(cardNumber, new Date(expiryDate), CVV);
        if (!card.isExpired() || !card.isNumberOfDigitsValid() || !card.isNumberOfCodeDigitsValid()) {
            toast.error("Card is invalid");
            return
        }
        else toast.success("successful payment");

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
        const user = await axios.post(getUserByEmailURL, { "email": activeUser.email });
        const updatedUser = user.data;
        const today = new Date();
        const date = today;
        
        const historyOrder = {
            orders_id: updatedUser.bag_items,
            date: date,
            total_price: total,
            user_email: updatedUser.email,
            full_name: fullName,
            address: address,
            phone: phone,
        }

        const res =  await axios.post(createHistoryOrder, historyOrder);
        const res2 = await axios.post(updateUsersBag, { "email": activeUser.email });
        dispatch(removeOrders());
        dispatch(removeSavedOrders());
        dispatch(reset(0));
        dispatch(setIsOpen_orderRecived(true));
        dispatch(setIsOpen_checkout(false));
    }

    return (
        <PopupBox>
            <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={handleClose} /> </CloseIcon>
            <Box>
                <Titel>delivery details</Titel>
                <InputContainer>
                    <Input type="fullName" placeholder="Full Name" onChange={(e) => set(e.target.value, "fullName")} />
                    <Input type="address" placeholder="Address" onChange={(e) => set(e.target.value, "address")} />
                    <Input type="phone" placeholder="Phone" onChange={(e) => set(e.target.value, "phone")} />
                </InputContainer>
                <Paragraph>payment details</Paragraph>
                <InputContainer>
                    <Input type="cardNumber" placeholder="Card Number" onChange={(e) => set(e.target.value, "cardNumber")} />
                    <Input type="nameOnCard" placeholder="Name On Card" onChange={(e) => set(e.target.value, "nameOnCard")} />
                    <Input type="CVV" placeholder="CVV" onChange={(e) => set(e.target.value, "CVV")} />
                    <Input type="expiryDate" placeholder="Expiry Date" onChange={(e) => set(e.target.value, "expiryDate")} />

                </InputContainer>
                <OrderContainer>
                    <Paragraph>My order</Paragraph>
                    {orders && orders.map((order: Order, index: number) => (
                        <OrderCard order={order} key={index} />
                    ))}
                    {saved_orders && saved_orders.map((order: Order, index: number) => (
                        <OrderCard order={order} key={index} />
                    ))}
                </OrderContainer>
                <EndContainer>
                    <PriceContainer>
                        Total  -
                        <IconImage>
                            <img src={BIG_ICONS.ils} />
                        </IconImage>
                        {total}
                    </PriceContainer>
                    <Link to='/'><LogInButton unable={unable} onClick={placeOrder}> Complete payment </LogInButton></Link>
                </EndContainer>
            </Box>
        </PopupBox>
    );
};

export default CheckOut; 
