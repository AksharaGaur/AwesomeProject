import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types';

export const fetchProducts = 
createAsyncThunk(
    'products/fetch',
    async(category: string)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        return response.data;
    }

);

const productSlice = createSlice({
    name:'products',
    initialState: {
        items:[],
        loading:false,
    },
   reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, 
            (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            builder.addCase(fetchProducts.rejected,
                (state) => {
                    state.loading = false;
                }
            )
    }
})



export default productSlice.reducer;
