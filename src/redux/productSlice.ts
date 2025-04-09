import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api/api';
import { Product } from '../types';

interface ProductState {
    items: Product[];
    status: 'idle' | 'loading' | 'success' | 'error';
    loading: boolean;
  }
  
  const initialState: ProductState = {
    items: [],
    status: 'idle',
    loading: false,
  };


export const fetchProducts = createAsyncThunk ('products/fetchProducts', async(category:string)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json();
});



const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
       builder.addCase(fetchProducts.pending, 
        (state)=>{
            state.status='loading';
            state.loading=true;
        }
       )
       builder.addCase(fetchProducts.fulfilled,
        (state,action)=>{
            state.status="success",
            state.items=action.payload,
            state.loading=false
        }
       )
       builder.addCase(fetchProducts.rejected,
        (state,action)=>{
            state.status="error"
            state.loading=false
        }
       )
    }
})

export default productSlice.reducer;