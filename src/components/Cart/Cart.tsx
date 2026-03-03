
import {
    Card,
    CardHeader,
    CardContent,

} from "@/ui/card"

import {
    Button,
} from "@/ui/button"

import { type ProductListProps} from "../../utils/productData";
import { useCartDispatch} from "../../hooks/context/ProductContext"
import CartItem from "./CartItem";

export default function Cart({ products }: ProductListProps) {
    const dispatch = useCartDispatch();

    
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
                <div className="flex justify-between text-base font-medium mb-4">
                    <span>Total</span>
                    <span>R{products.reduce((sum, p) => sum + p.price, 0)}</span>
                </div>
            </div>

        </div>
    )
}