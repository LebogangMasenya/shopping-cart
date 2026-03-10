import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feat/cart/cartSlice'
import productReducer from '../feat/product/productSlice'
import {productApi}  from '../feat/product/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(productApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
// export type AppThunk = ThunkAction<void, RootState, unknown, Action>