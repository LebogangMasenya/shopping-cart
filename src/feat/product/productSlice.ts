import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { type ProductProp } from '../../utils/productData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_SHOPPING_URL = import.meta.env.VITE_BASE_SHOPPING_URL;




 export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_SHOPPING_URL}/` }),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: () => 'products',
        }),
    })
})


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

    }
})


export const { } = productSlice.actions

export const selectProducts = (state: RootState) => state.products;
export const { useFetchAllProductsQuery } = productApi;
export default productSlice.reducer;