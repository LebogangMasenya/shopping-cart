
import {
    CardHeader,
    CardContent,

} from "../../ui/card"

import { useCart} from "../../hooks/context/ProductContext"
import CartItem from "./CartItem";

export default function Cart() {
    const cartItemsState = useCart();
    const products = cartItemsState.items;

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
                    <span>R{products.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0)}</span>
                    {
                        products.length === 0 ? <span className="text-sm text-muted-foreground">Your cart is empty</span> : <span>Number of Items: {products.reduce((count, p) => count + (p.quantity || 1), 0)}</span>
                    }
                    
                </div>
            </div>

        </div>
    )
}