import React from 'react';
import { IMAGES, LINES} from '../../../assets';
import {PopupBox, Box} from './styles'

const EmptyBag = function () {
  return (
    
        <Box>
            <img src={IMAGES.bag} alt="bag"></img>
            <img src={LINES.empty_bag} alt="empty_bag"></img>
        </Box>
    
  );
};

export default EmptyBag;