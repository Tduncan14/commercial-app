import { createSlice } from "@reduxjs/toolkit";



// store in the local storage

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')): {cartItems:[]}


const addDecimals = (num) => {

    return( Math.round(num*100) / 100).toFixed(2)
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            const item = action.payload;

             const existItem = state.cartItems.find((x) =>x._id === item._id)


             if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)

             }

             else{
                state.cartItems = [...state.cartItems, item]
             }

            //  calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty,0))
          
            // shipping price (if order is over 100 dollars its free else 10 shipping)

            state.shippingPrice =  addDecimals(state.itemsPrice > 100 ? 0 : 10)

            // tax price the tax price is 15 percent

            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

            // total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)

            localStorage.setItem('cart',JSON.stringify(state))
        }
    }
})




//  any function needs to be exported as action

export const {addToCart} = cartSlice.actions



// export reducers as well



export default cartSlice.reducer