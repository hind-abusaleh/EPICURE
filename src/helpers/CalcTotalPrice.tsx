import { Order } from "../constants/interfaces";

export default function CalcTotalPrice(orders :Order[]):number{
    let total =0;
    {orders && orders.map((order: Order) => (
        total+= (order.price * order.quantity)
      ))}
    return total;
}