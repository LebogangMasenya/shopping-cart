import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { type ProductProp } from '../../utils/productData'
import { createAsyncThunk } from '@reduxjs/toolkit'
const BASE_SHOPPING_URL = import.meta.env.VITE_BASE_SHOPPING_URL;


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(`${BASE_SHOPPING_URL}/products`);

    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch products");
    }
});

export interface ProductState {
    products: ProductProp[]
}


const initialState: ProductState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.products = [];
            })
    }
})


export const { } = productSlice.actions

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;