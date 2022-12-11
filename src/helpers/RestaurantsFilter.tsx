
import { RestCard } from "../constants/interfaces";

export default function RestaurantsFilter(restaurants:RestCard[], filter:string){
  if(filter === "new"){
    const FilterdList = restaurants.filter((value:RestCard) => {
        return value.new === true;
      });
      return FilterdList;
  }
  else if(filter === "popular"){
    const FilterdList = restaurants.filter((value: RestCard) => {
        return value.popular === true;
      });
      return FilterdList;
  }
  else if(filter === "open_now"){
    const today = new Date();
    const time = today.getHours();
    const FilterdList = restaurants.filter((value: RestCard) => {
      return value.opening_hour <= time && value.closing_hour>= time;
    });
    return FilterdList;
  }
  if(filter === "all" ){return restaurants;}
}