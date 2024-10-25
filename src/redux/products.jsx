import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products:[],
  searchTerm:'',
  filterData:[]
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state,actions){
        state.products=actions.payload
    },
    setSearchTerm(state,action){ 
      state.searchTerm=action.payload
      state.filterData=state.products.filter(product=>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }
  }
});


export const { setProducts,setSearchTerm } = productsSlice.actions;


export default productsSlice.reducer;
