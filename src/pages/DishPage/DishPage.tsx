import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
    MainContainer,
    DishContainer,
    DishImage,
    InfoContainer,
    DishName,
    Content,
    SideContainer,
    Titel,
    Button
} from "./style";
import { RadioButton, CheckBox, Quantity } from "../../components/CustomComponents/index";
import { incrementByAmount } from "../../slicers/itemsInBagSlicer";
import { Bag } from "../../components/PopUps/index";
import { ChangesOnDish } from '../../constants/interfaces';
import { setChangesOnDish } from '../../slicers/changesOnDishSlicer';
import { setSideOnDish } from '../../slicers/sideOnDishSlicer';
import { SetIsOpen_bag } from '../../slicers/isOpen_bagSlicer';
import { setIsThere_Order2Add } from "../../slicers/isThere_Order2AddSlicer";
import { SetWindowSize } from '../../helpers';

export default function DishPage() {
    useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);
    const dispatch = useDispatch();
    const dish = useSelector((state: any) => state.activeDish.value);
    const quantity = useSelector((state: any) => state.quantityOfDish.value);
    const SideOptions = ["White bread", "Sticky rice"];
    //const [isOpen_bag, setIsOpen_bag] = useState(false);
    const isOpen_bag = useSelector((state: any) => state.isOpen_bag.value);

    const [state_checkBox, setState] = useState<ChangesOnDish>({
        Whithout_peanuts: false,
        Sticky_Less_spicy: false
      });
    
      const handleChange_checkBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state_checkBox,
          [event.target.name]: event.target.checked,
        });
      };

      const [value_Radio, setValue] = useState<String>(SideOptions[0]);

      const handleChange_Radio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };

    function update(){
        dispatch(setSideOnDish(value_Radio));
        dispatch(setChangesOnDish(state_checkBox));
        dispatch(setIsThere_Order2Add(true));
        dispatch(incrementByAmount(quantity));
        dispatch(SetIsOpen_bag(!isOpen_bag));
    }
    const windowSize = SetWindowSize();

    return (
        <MainContainer windowSize={windowSize}>
            <DishContainer>
                <DishImage img={require(`../../${dish.img}`)} windowSize={windowSize} />
                <InfoContainer >
                    <DishName windowSize={windowSize}>{dish.name}</DishName>
                    <Content windowSize={windowSize}>{dish.content}</Content>
                </InfoContainer>
            </DishContainer>
            <SideContainer windowSize={windowSize}>
                <Titel>Choose a side</Titel>
                <RadioButton options={SideOptions} handleChange={handleChange_Radio} value={value_Radio}></RadioButton>
            </SideContainer>
            <SideContainer windowSize={windowSize}>
                <Titel>Changes</Titel>
                <CheckBox  handleChange={handleChange_checkBox} state={state_checkBox}/>
            </SideContainer>
            <SideContainer windowSize={windowSize}>
                <Titel>Quantity</Titel>
                <Quantity/>
            </SideContainer>
            <Link to='/Restaurants'><Button onClick={() =>update()} >Add to bag </Button></Link> 
            {isOpen_bag && <Bag/>}
        </MainContainer>
    )
}