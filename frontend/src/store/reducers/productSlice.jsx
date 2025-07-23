import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    products:[]
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        loadproduct:(state,action) => {
            state.carts = action.payload
        }
    }
})


export default productSlice.reducer
export const {loadproduct} = productSlice.actions