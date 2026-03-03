
import {
    Card,
    CardHeader,
    CardContent,

} from "@/ui/card"

import {
    Button,
} from "@/ui/button"

import { type ProductListProps } from "../utils/productData";

export default function Cart({ products }: ProductListProps) {
    return (
        <div className="flex flex-col h-full">
            <div className=" flex-1 overflow-y-auto py-6 space-y-4">
                <CardHeader className="text-2xl font-bold ">Items in cart</CardHeader>
                <CardContent>
                    {products.map(p => (
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
                                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-none">-</Button>
                                    <span className="text-xs w-6 text-center">1</span>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-none">+</Button>
                                </div>
                                <Button variant="link" size="sm" className="h-auto p-0 text-destructive text-xs">
                                    Remove
                                </Button>
                            </div>

                        </Card>
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