import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import schema from "./validateInputs";
import { PopupBox, Box, SignUpContainer, Titel, Input, Button } from "./styles";
import { CloseIcon } from "../Burger_PopUp/styles";
import { ICONS } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { registerURL } from '../../../constants/URLs';

const Register = function (props: { handleClose: any }) {
    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onRegisterClick = async () => {

        const args = {
            email,
            firstName,
            lastName,
            password
        };
        if (!schema.validate(password)) {
            const errors: any = schema.validate(password, { details: true });
            errors.forEach((error: any) => {
                toast.error(error.message);
            });
            console.log(errors);
            return errors;
        }
        if (password !== confirmPassword) {
            toast.error("password don't match");
            return;
        }
        const response = await axios.post(registerURL, args);
        if (response.data.status === "failure") {
            toast.error(response.data.message);
            return;
        }
        toast.success("successful registration");
        props.handleClose();
    }
    return (
        <PopupBox>
            <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={props.handleClose} /> </CloseIcon>
            <Box>
            <SignUpContainer>
                <Titel>Sign up</Titel>
                create your EPICURE account
            </SignUpContainer>
                <Input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <Input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button onClick={onRegisterClick}>Register</Button>
            </Box>
        </PopupBox>
    );
};

export default Register;