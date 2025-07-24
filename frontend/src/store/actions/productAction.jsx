import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";


export const asynloadproduct = () => async (dispatch,getstate) => {
    try {
        const {data} = await axios.get("/products")
        dispatch(loadproduct(data))
            
    } catch (error) {
        console.log(error);
    }
}


export const asyncreateproducts = (product) => async (dispatch,getstate) => {
    try {
        await axios.post("/products",product)
        dispatch(asynloadproduct())
            
    } catch (error) {
        console.log(error);
    }
}

export const asynupdateproducts = (id,product) => async (dispatch,getstate) => {
    try {
        await axios.patch("/products/"+ id,product)
        dispatch(asynloadproduct())
            
    } catch (error) {
        console.log(error);
    }
}
export const asyndeleteproducts = (id) => async (dispatch,getstate) => {
    try {
        await axios.delete("/products/"+ id)
        dispatch(asynloadproduct())
            
    } catch (error) {
        console.log(error);
    }
}

