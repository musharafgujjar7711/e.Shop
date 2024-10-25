import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};


const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCard(state, action) {
      const newItem = action.payload
      const itemIndex = state.products.find((item) => item.id === newItem.id)
      if (itemIndex) {
        itemIndex.quantity++,
          itemIndex.totalPrice += newItem.price
      }
      else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image
        })
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++
    },
    removeItem(state, action) {
      const id = action.payload
      const findItem =state.products.find((item)=>item.id === id)
       if (findItem) {
          state.totalPrice -= findItem.totalPrice
          state.totalQuantity -= findItem.totalQuantity
          state.products = state.products.filter(item=>item.id !== id )
       }
    },

    inCreaseQuantity(state,action){
      const id = action.payload
      const findItem =state.products.find((item)=>item.id === id)
      if (findItem) {
          findItem.quantity++
          findItem.totalPrice += findItem.price
          state.totalQuantity++
          state.totalPrice += findItem.price
      }
    },

    deCreaseQuantity(state,action){
      const id = action.payload
      const findItem =state.products.find((item)=>item.id === id)
      if (findItem.quantity >1) {
        
      if (findItem) {
          findItem.quantity--
          findItem.totalPrice -= findItem.price
          state.totalQuantity--
          state.totalPrice -= findItem.price
      }
    }
    },
  }
});
export const { addToCard,removeItem ,inCreaseQuantity,deCreaseQuantity} = cartSlice.actions
export default cartSlice.reducer;
