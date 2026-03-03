import type { ProductProp } from "../../utils/productData";

type CartState = { items: ProductProp[] };
type CartAction = 
  | { type: 'ADD'; payload: ProductProp }
  | { type: 'REMOVE'; payload: ProductProp } // use ID
  | { type: 'INCREASE_QUANTITY'; payload: ProductProp }
  | { type: 'DECREASE_QUANTITY'; payload: ProductProp };

export default function productReducer(state: CartState, action: CartAction): CartState { 
    switch (action.type) {
        case 'ADD':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if(!existingItem) {
                return {
                    ...state,
                    items: [...state.items, action.payload]
                }
            } else {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id 
                            ? { ...item, quantity: (item.quantity || 1) + 1 } 
                            : item
                    ),
                }
            }
        case 'REMOVE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id 
                        ? { ...item, quantity: (item.quantity || 1) + 1 } 
                        : item
                ),
            }
        case 'DECREASE_QUANTITY':
             return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && (item.quantity || 1) > 1
                        ? { ...item, quantity: (item.quantity || 1) - 1 } 
                        : item
                ),
            }
            
        default:
            return state;
    }
}
