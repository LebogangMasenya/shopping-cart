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
            
        case 'REMOVE':
            
        case 'INCREASE_QUANTITY':
          
        case 'DECREASE_QUANTITY':
            
        default:
            return state;
    }
}
