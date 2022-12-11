
import { DishCard_interface } from "../constants/interfaces";

export default function DishesFilter(dishes:DishCard_interface[], filter:string){
  if(filter === "popular"){
    const FilterdList = dishes.filter((value: DishCard_interface) => {
        return value.popular === true;
      });
      return FilterdList;
  }
  else if(filter === "top_chef"){
    const FilterdList = dishes.filter((value: DishCard_interface) => {
        return value.topchef_dish === true;
      });
      return FilterdList;
  }
  if(filter === "all" ){return dishes;}
}