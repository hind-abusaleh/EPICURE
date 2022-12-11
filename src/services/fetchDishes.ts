import {DISHES} from '../assets';
import { ICONS } from "../assets";
 
 async function fetchDishes() {
    return [
        {
            img: DISHES.pad_ki_mao,
            name: 'Pad Ki Mao',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegetarian,
            price: 88,
            popular : true,
            topchef_dish: false,
        },
        {
            img: DISHES.ta_ma_la_ko,
            name: 'Ta Ma La Ko',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.spicy,
            price: 90,
            popular : true,
            topchef_dish: false,
        },
        {
            img: DISHES.red_farm,
            name: 'Red Farm',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegan,
            price: 79,
            popular : true,
            topchef_dish: false,
        },

        {
            img: DISHES.onza,
            name: 'Onza',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegan,
            price: 79,
            popular : false,
            topchef_dish: true,
        },
        {
            img: DISHES.yellow_farm,
            name: 'Yellow Farm',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegan,
            price: 79,
            popular : false,
            topchef_dish: true,
        },
        {
            img: DISHES.Pas_ci_nar,
            name: 'Pas Ci Nar',
            content: 'Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce',
            icon: ICONS.vegan,
            price: 79,
            popular : false,
            topchef_dish: true,
        },
    ]
  };
  export default fetchDishes;