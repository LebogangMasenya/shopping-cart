import {CartContext, CartDispatchContext} from "../context/ProductContext"
import productReducer from "../reducers/productReducer";
import { useReducer, type ReactNode } from "react";

export default function CartProvider({children}: {children: ReactNode}) {
    const [products, dispatch] = useReducer(productReducer, {items: []} );

    return (
        <CartContext value={products}>
            <CartDispatchContext value={dispatch}>
                {children}
            </CartDispatchContext>
        </CartContext>
    )
}