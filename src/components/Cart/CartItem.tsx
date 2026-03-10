import {
    Card,

} from "../../ui/card"

import {
    Button
} from "../../ui/button"

import { type ProductProp } from "../../utils/productData";
import { useAppDispatch } from "../../app/hooks";
import {  increase_quantity, decrease_quantity, remove } from "../../feat/cart/cartSlice";

export default function CartItem({ p }: { p: ProductProp }) {
    const dispatch = useAppDispatch();

    function handleRemoveFromCart() {
        dispatch(remove(p));
    }

    function handleIncrease() {
        dispatch(increase_quantity(p));
    }

    function handleDecrease() {
        dispatch(decrease_quantity(p))
    }


    return (
        <Card key={p.id} className="flex items-center gap-4 p-4 m-2">

            <div className="h-20 w-20 overflow-hidden rounded-md border bg-muted">
                <img src={p.image} alt={p.title} className="h-full w-full object-contain p-2" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm text-muted-foreground">R{p.price}</p>
            </div>


            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border rounded-md mr-1">
                    <Button onClick={handleDecrease} variant="ghost" size="icon" className="h-7 w-7 rounded-none">-</Button>
                    <span className="text-xs w-6 text-center">{p.quantity || 1}</span>
                    <Button onClick={handleIncrease}  variant="ghost" size="icon" className="h-7 w-7 rounded-none">+</Button>
                </div>
                <Button onClick={handleRemoveFromCart}  variant="link" size="sm" className="h-auto p-0 text-destructive text-xs">
                    Remove
                </Button>
            </div>

        </Card>
    )
}