import React from 'react';
import {PopupBox} from './styles'
import {useSelector} from 'react-redux';
import EmptyBag from "./emptyBag";
import  OrdersBag  from "./ordersBag";

const Bag = function () {
  const items = useSelector((state: any) => state.itemsInBag.value);
  return (
    <PopupBox>
      {items < 1 ? 
          <EmptyBag/>
          :
          <OrdersBag/>
      }
    </PopupBox>
  );
};

export default Bag;