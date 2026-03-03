import {ProductContext, ProductDispatchContext} from "../context/ProductContext"
import productReducer from "../reducers/productReducer";
import { useReducer, type ReactNode } from "react";

export default function CartProvider({children}: {children: ReactNode}) {
    const [products, dispatch] = useReducer(productReducer, {items: []} );

    return (
        <ProductContext value={products}>
            <ProductDispatchContext value={dispatch}>
                {children}
            </ProductDispatchContext>
        </ProductContext>
    )
}