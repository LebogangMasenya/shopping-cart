import { createContext, useContext } from "react";
import { type ProductProp } from "../../utils/productData";

type CartState = { items: ProductProp[] };
type CartAction = 
  | { type: 'ADD'; payload: ProductProp }
  | { type: 'REMOVE'; payload: ProductProp } // use ID
  | { type: 'INCREASE_QUANTITY'; payload: ProductProp }
  | { type: 'DECREASE_QUANTITY'; payload: ProductProp };


export const CartContext = createContext<CartState | null>(null);
export const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);


export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("useCartDispatch must be used within a CartProvider");
  return context;
}