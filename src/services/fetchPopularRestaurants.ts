import {POPULAR_RES} from '../assets';
 
 async function fetchPopularRestaurants() {
    return [
        {
            img: POPULAR_RES.claro,
            name: 'Claro',
            chef: 'Ram Shmueli',
        },
        {
            img: POPULAR_RES.kab_kem,
            name: 'Kab Kem',
            chef: 'Yariv Malili',
        },
        {
            img: POPULAR_RES.messa,
            name: 'Messa',
            chef: 'Aviv Moshe',
        },
        {
            img: POPULAR_RES.nithan_thai,
            name: 'Nitan Thai',
            chef: 'Shahaf Shabtay',
        },
    ]
  };
  export default fetchPopularRestaurants;