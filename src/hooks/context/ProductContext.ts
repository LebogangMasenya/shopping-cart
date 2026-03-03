import { createContext } from "react";
import { type ProductProp } from "../../utils/productData";
type CartState = { items: ProductProp[] };
type CartAction = 
  | { type: 'ADD'; product: ProductProp }
  | { type: 'REMOVE'; id: number }
  | { type: 'INCREASE_QUANTITY'; product: ProductProp }
  | { type: 'DECREASE_QUANTITY'; product: ProductProp };


export const ProductContext = createContext<CartState | null>(null);
export const ProductDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);