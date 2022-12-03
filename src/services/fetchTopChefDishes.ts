import {POPULAR_RES} from '../assets';
 
 async function fetchTopChefDishes() {
    return [
        {
            img: POPULAR_RES.claro,
            name: 'Pad Ki Mao',
            chef: 'faff',
        },
        {
            img: POPULAR_RES.claro,
            name: 'Kab Kem',
            chef: 'Yariv Malili',
        },
        {
            img: POPULAR_RES.claro,
            name: 'Messa',
            chef: 'Aviv Moshe',
        },
        
    ]
  };
  export default fetchTopChefDishes;