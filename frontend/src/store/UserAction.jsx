import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";


export const asyncgetuser = () => async (dispatch,getstate) => {
    try {

        console.log("Current data>>>>",getstate());

       const res = await axios.get('/users') 
       dispatch(loaduser(res.data))
    } catch (error) {
        console.log(error);
        
    }
}