
import {
    CardHeader,
    CardContent,
} from "../../ui/card"

import { useAppSelector } from "../../app/hooks";
import { selectcart } from "../../feat/cart/cartSlice";

import CartItem from "./CartItem";

export default function Cart() {
    const cartItemsState = useAppSelector(selectcart)
    const products = cartItemsState.cartItems;

    const productCount =products.reduce((count, p) => count + (p.quantity || 1), 0);
    const productTotal = products.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0).toFixed(2);
    
    return (
        <div className="flex flex-col h-full">
            <div className=" flex-1 overflow-y-auto py-6 space-y-4">
                <CardHeader className="text-2xl font-bold ">Items in cart</CardHeader>
                <CardContent>
                    {products.map(p => (
                       <CartItem key={p.id} p={p} />
                    ))}
                </CardContent>
            </div>

            <div className="border-t pt-6 pb-2 bg-background">
                <div className="flex justify-between text-base font-medium mb-4 p-2">
                    <span>Total</span>
                    <span>R{productTotal}</span>
                    {
                        productCount === 0 ? <span className="text-sm text-muted-foreground">Your cart is empty</span> : <span># Items: {productCount}</span>
                    }
                    
                </div>
            </div>

        </div>
    )
}