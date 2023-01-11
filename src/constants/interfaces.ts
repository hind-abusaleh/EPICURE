export interface RestCard {
  img: string,
  name: string,
  chef: string,
  opening_hour: number,
  closing_hour: number,
  new: boolean,
  popular: boolean
}
export interface User{
  firstName: string,
  lastName: string,
  email: string,
  bag_items: Order[],
  history_orders: HistoryOrder[]
}
export interface HistoryOrder{
  order: Order[],
  date: Date,
  TotalPrice: number
}
export interface Order{
  dish_id: string,
  dish_name: string,
  changes: ChangesOnDish,
  side: string,
  quantity: number,
  dish_image: string,
  price: number
}

export interface ChangesOnDish {
  Whithout_peanuts: boolean,
  Sticky_Less_spicy: boolean
}

export interface Chefs_interface {
  img: string,
  name: string,
  about: string,
  new: boolean,
  most_viewd: boolean,
  top_chef: boolean,
}

export interface DishCard_interface {
  img: string,
  name: string,
  content: string,
  icon: string,
  price: number,
  popular: boolean
}

