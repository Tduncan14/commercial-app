import { createSlice } from "@reduxjs/toolkit";



// store in the local storage

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')): {cartItems:[]}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{}
})





// export reducers as well



export default cartSlice.reducer