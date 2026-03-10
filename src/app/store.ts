import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import cartReducer from '../feat/cart/cartSlice'
import productReducer from '../feat/product/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type AppThunk = ThunkAction<void, RootState, unknown, Action>