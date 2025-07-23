/* eslint-disable no-undef */
import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

export const asyncurrentuser = () => async (dispatch,getstate) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loaduser(user))
            else console.log("user is not login");
            
    } catch (error) {
        console.log(error);
    }
}

export const asynloginuser = (user) => async (dispatch,getState) => {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data[0]))
    } catch (error) {
        console.log(error);
    }
}

export const asynlogoutuser = (user) => async (dispatch,getState) => {
    try {
        localStorage.removeItem("user")
        console.log("user is logout");
        
    } catch (error) {
        console.log(error);
    }
}


export const asynregisteruser = (user) => async(dispatch,getState) =>{
    try {
        const res =  await axios.post("/users",user)
        console.log(res);
        
    } catch (error) {
        console.log(error);    
    }
}