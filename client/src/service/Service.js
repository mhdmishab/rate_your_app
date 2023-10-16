import axios from "../config/Api";

export const addDataService=async({formData})=>{
    try{
        const response = await axios.post('/ratings',formData);
        return response;
    }catch(error){
        throw error;
    }
}

export const getDataService=async(page)=>{
    try{
        const response = await axios.get(`/ratings/${page}`);
        return response;
    }catch(error){
        throw error;
    }
}
