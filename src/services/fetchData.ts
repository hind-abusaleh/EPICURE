import axios from "axios";
import { getCuisinesURL, 
    getRestaurantsURL, 
    getDishesURL,
    getTopChefURL,
    getTopChefDishesURL,
    getPopularDishesURL,
    getPopularRestaurantsURL,
    getDishesByType_ResName,
    getChefsURL}
     from "../constants/URLs";

export const fetchRestaurantDishes = async (params: any) => {
        try {
            const response = await axios.post( getDishesByType_ResName, params);
            return response.data; 
        } catch (error:any){
            console.log(error);
        }
};


export const fetchTopChefDishes = async (params: any) => {
    try {
        const response = await axios.post( getTopChefDishesURL, params);
        return response.data; 
    } catch (error:any){
        console.log(error);
    }
};


export const fetchRestaurantsData = async () => {
    try {
        const response = await fetch( getRestaurantsURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};


export const fetchChefsData = async () => {
    try {
        const response = await fetch( getChefsURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};


export const fetchDishesData = async () => {
    try {
        const response = await fetch( getDishesURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};
export const fetchCuisinesData = async () => {
    try {
        const response = await fetch( getCuisinesURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};
export const fetchTopChefData = async () => {
    try {
        const response = await fetch( getTopChefURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};

export const fetchPopularRestaurants = async () => {
    try {
        const response = await fetch( getPopularRestaurantsURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};

export const fetchPopularDishes = async () => {
    try {
        const response = await fetch( getPopularDishesURL
        ).then((data) =>{
            return data.json();
        });
        return response; 
    } catch (error:any){
        console.log(error);
    }
};