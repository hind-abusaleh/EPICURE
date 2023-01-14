import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { PopupBox, Box, SignUpContainer, Titel, Input } from "../Register_PopUp/styles";
import { CloseIcon } from "../Burger_PopUp/styles";
import { ICONS, IMAGES } from '../../../assets';
import { ButtonsContainer, InnerContainer, ForgetPassword, SignUpButton, LogInButton } from "./styles";
import {Register} from "../index";
import { getOrdersByID, getUserByEmailURL, logInURL } from '../../../constants/URLs';
import { useDispatch } from 'react-redux';
import { AddOrder } from "../../../slicers/user_bagItemsSlicer";
import { Order } from '../../../constants/interfaces';
import { incrementByAmount } from '../../../slicers/itemsInBagSlicer';
import { setActiveUser } from "../../../slicers/activeUserSlicer";
import {  setIsLoged_in} from "../../../slicers/isLoged_inSlicer";

const SignIn = function (props: { handleClose: any }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [unable, setUnable] = useState(true);

    const [isOpen_register, setIsOpen_register] = useState(false);

    const togglePopup_register = () => {
        setIsOpen_register(!isOpen_register);
    }

    const set = (input: string, type: string) => {
        if (type === "email") {
            setEmail(input);
        }
        else setPassword(input);
        if (email === "" || password === "") setUnable(true);
        if (email !== "" && password !== "") setUnable(false);
    }

    const onSignInClick = async () => {
        const args = {
            email,
            password
        };
        const response = await axios.post(logInURL, args);
        if (response.data.status === "failure") {
            toast.error(response.data.message);
            return;
        }
        toast.success("successful signIn");
        
        //fetch+dispatch for the user bag items
        const user = await axios.post(getUserByEmailURL, {"email":email});
        //cookie
        //document.cookie = `${user.data.firstName}`;
        // update active user
        dispatch(setActiveUser(user.data));
        dispatch(setIsLoged_in(true));
        const ordersID = user.data.bag_items;
        const orders = await axios.post(getOrdersByID, ordersID);
        if(ordersID.length !== 0) {
            dispatch(incrementByAmount(ordersID.length));
              orders.data.forEach((order : Order) => {
                dispatch(AddOrder(order));
              });
        } 
        //fetch+ dispatch for the history orders
        props.handleClose();
    }
    return (
        <PopupBox>
            <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={props.handleClose} /> </CloseIcon>
            <Box>
                <SignUpContainer>
                    <Titel>Sign in</Titel>
                    To continue the order, please sign in
                </SignUpContainer>
                <Input type="email" placeholder="Email" onChange={(e) => set(e.target.value, "email")} />
                <Input type="password" placeholder="Password" onChange={(e) => set(e.target.value, "password")} />
                <ButtonsContainer>
                    <InnerContainer>
                        <LogInButton unable={unable} onClick={onSignInClick}>login</LogInButton>
                        <ForgetPassword onClick={onSignInClick}>Forget password?</ForgetPassword>
                    </InnerContainer>
                    <img src={IMAGES.or} />
                    <SignUpButton onClick={togglePopup_register}>sign up</SignUpButton>
                    {isOpen_register && <Register
                        handleClose={togglePopup_register}
                    />}
                </ButtonsContainer>
            </Box>
        </PopupBox>
    );
};

export default SignIn;