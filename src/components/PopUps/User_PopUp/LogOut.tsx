import React from 'react';
import { PopupBox, Box, Button} from "../Register_PopUp/styles";
import { CloseIcon } from "../Burger_PopUp/styles";
import { ICONS } from '../../../assets';
import { useSelector,useDispatch } from 'react-redux';
import { setIsLoged_in } from "../../../slicers/isLoged_inSlicer";

const LogOut = function (props: { handleClose: any }) {
    const dispatch = useDispatch();
    const activeUser = useSelector((state: any) => state.activeUser.value);

   const Logout =() => {
    dispatch(setIsLoged_in(false));
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