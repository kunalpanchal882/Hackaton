import axios from "axios";
import { loaduser } from "./UserSlice";


export const asyncgetuser = () => async (dispatch,getstate) => {
 

    try {

        console.log(getstate());

       const res = await axios.get('./users') 
       dispatch(loaduser(res.data))
    } catch (error) {
        console.log(error);
        
    }
}