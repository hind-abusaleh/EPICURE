
import React from 'react';
import { ICONS, IMAGES } from '../../../assets';
import { CloseIcon, SearchBox, Input, Box } from './styles';
import { PopupBox } from '../Burger_PopUp/styles';


const Search = function (props: { handleClose: any }) {
  return (
    <PopupBox>
      <Box>
        <CloseIcon> <img src={ICONS.close_icon} alt="close" onClick={props.handleClose} /> Search </CloseIcon>
        <SearchBox>
          <img src={ICONS.search} alt="search" />
          <img src={IMAGES.search_line} alt="searchLine" />
          <Input
            type="text" placeholder="Search for restaurant cuisine, chef"
            />
        </SearchBox>
      </Box>
    </PopupBox>
  );
};

export default Search;