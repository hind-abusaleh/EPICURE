export interface RestCard{
    img: string,
    name: string,
    chef: string,
    opening_hour : number,
    closing_hour : number,
    new: boolean,
    popular: boolean
  }
    
  export interface ChefData{
    img: string,
    name: string,
    about: string
  }

  export interface DishCard_interface{
    img: string,
    name: string,
    content: string,
    icon: string,
    price: number
  }

  export interface TopChefDishCard_interface{
    img: string,
    name: string
  }