import React from 'react';
import { SignIn } from "../index";
import LogOut from "./LogOut";
import { useSelector } from 'react-redux';

const User = function (props: { handleClose: any }) {
    const isLoged_in = useSelector((state: any) => state.isLoged_in.value);

    return (
        <>
            {isLoged_in ?
                <LogOut  handleClose={props.handleClose} />
                :
                <SignIn handleClose={props.handleClose} />
            }
        </>
    );
};

export default User;