import {TOPCHEFDISHES} from '../assets';
 
 async function fetchTopChefDishes() {
    return [
        {
            img: TOPCHEFDISHES.onza,
            name: 'Onza',
        },
        {
            img: TOPCHEFDISHES.red_farm,
            name: 'Red Farm',
        },
        {
            img: TOPCHEFDISHES.pad_ki_mao,
            name: 'Pad Ki Mao',
        },
        
    ]
  };
  export default fetchTopChefDishes;