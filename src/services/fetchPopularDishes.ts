import {POPULAR_DISHES} from '../assets';
import { ICONS } from "../assets";
 
 async function fetchPopularDishes() {
    return [
        {
            img: POPULAR_DISHES.pad_ki_mao,
            name: 'Pad Ki Mao',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegetarian,
            price: 88,
        },
        {
            img: POPULAR_DISHES.ta_ma_la_ko,
            name: 'Ta Ma La Ko',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.spicy,
            price: 90,
        },
        {
            img: POPULAR_DISHES.red_farm,
            name: 'Red Farm',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegan,
            price: 79,
        },
    ]
  };
  export default fetchPopularDishes;