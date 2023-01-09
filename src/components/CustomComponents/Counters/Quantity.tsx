import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { increment, decrement, setQuantity } from "../../../slicers/quantityOfDishSlicer";
import { Container, Botton, TheNumber } from "./styles";

export default function Quantity() {
    const dispatch = useDispatch();
    const [value, setVal] = useState<boolean>(true);
    const counter = useSelector((state: any) => state.quantityOfDish.value);
    let c : Number;

    function update(minus : boolean){
        
        if(minus) {
            if(!value){ 
                dispatch(decrement())
                c= counter-1;
                if(c < 2 ) setVal(true);
            }
        }
        else {
            dispatch(increment())
            c= counter+1;
            if(c >= 2 ) setVal(false);
        }
    }
    const updateQuantity = useCallback(()=>{
      dispatch(setQuantity());
    },[])
    useEffect(() => {
      updateQuantity();
    }, [updateQuantity])
    
    return(
  <Container>
    <Botton disable={value} minus={true} onClick={() =>update(true)}>
    -
    </Botton>
    <TheNumber>{counter}</TheNumber>
  <Botton disable={false} minus={false} onClick={() =>update(false)}>
    +
  </Botton>
</Container>
    );
}