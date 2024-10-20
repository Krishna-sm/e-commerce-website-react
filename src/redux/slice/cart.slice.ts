import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cart } from "../../types/types";


const initialState:{cart:Cart[]}={cart:[]}

export const CartSlice = createSlice({
    initialState,
    name:'CartSlice',
    reducers:{}
})


export const {}  = CartSlice.actions;

export const CartSliceType = (store:RootState)=>store.CartSlice.cart;