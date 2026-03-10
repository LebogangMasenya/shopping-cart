import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { type ProductProp } from '../../utils/productData'
// Define a type for the slice state
export interface CartState {
    cartItems: ProductProp[]
}

const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductProp>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (!existingItem) {
                state.cartItems.push(action.payload)
            } else {
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 1) + 1;
                }
            }
        },
        remove: (state, action: PayloadAction<ProductProp>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        increase_quantity: (state, action: PayloadAction<ProductProp>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            }
        },
        decrease_quantity: (state, action: PayloadAction<ProductProp>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem && existingItem.quantity === 1) {
               state.cartItems =  state.cartItems.filter(item => item.id !== action.payload.id)
            } else if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) - 1;
            }
        }

    }
})

export const { add, remove, increase_quantity, decrease_quantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectcart = (state: RootState) => state.cart;

export default cartSlice.reducer;