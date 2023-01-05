import { Chefs_interface } from "../constants/interfaces";

export default function ChefsFilter(chefs :Chefs_interface[], filter:string){
  if(filter === "most_viewd"){
    const FilterdList = chefs.filter((value: Chefs_interface) => {
        return value.most_viewd === true;
      });
      return FilterdList;
  }
  else if(filter === "new"){
    const FilterdList = chefs.filter((value: Chefs_interface) => {
        return value.new === true;
      });
      return FilterdList;
  }
  else if(filter === "all" ){return chefs;}
}