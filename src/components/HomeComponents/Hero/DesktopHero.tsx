import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DesktopContainer, DesktopTextBlock, DesktopSearchBox, Input,MainContainer} from './styles';
import { LINES, ICONS, IMAGES } from '../../../assets';
import { RestCard } from '../../../constants/interfaces';
import SearchResults from './SearchResults';
import SetWindowSize from "../../../helpers/SetWindowSize";
 
function DesktopHero() {
  const WindowSize = SetWindowSize();
  const [filteredData_restaurants, setFilteredData_restaurants] = useState([]);
  const [filteredData_cuisines, setFilteredData_cuisines] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const cuisines = useSelector((state: any) => state.cuisines.value);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter__restaurants = restaurants.filter((value: RestCard) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    const newFilter_cuisines = cuisines.filter((value: RestCard) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData_restaurants([]);
      setFilteredData_cuisines([]);
    } else {
      setFilteredData_restaurants(newFilter__restaurants);
      setFilteredData_cuisines(newFilter_cuisines);
    }
  };
  let imgURL:string;
if(WindowSize < 769) imgURL = IMAGES.hero;
else imgURL = IMAGES.hero_desk;
  return (
    <MainContainer 
    >
      <DesktopContainer >
        <DesktopTextBlock>
          <img src={LINES.hero} alt='hero' />
            <DesktopSearchBox >
              <img src={ICONS.search} alt="search" />
              <Input
                type="text" placeholder="Search for restaurant cuisine, chef"
                value={wordEntered}
                onChange={handleFilter}
              /></DesktopSearchBox>
          </DesktopTextBlock>
          </DesktopContainer>
          <SearchResults
           rests ={filteredData_restaurants}
           cuisines ={filteredData_cuisines}
          />
    </MainContainer>
  );
}
export default DesktopHero;
