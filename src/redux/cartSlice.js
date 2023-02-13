import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{cartProductIds:[]},
    reducers:{

    }
})

export let {} = cartSlice.actions;
export default cartSlice;