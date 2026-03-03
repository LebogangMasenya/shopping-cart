import { getProducts } from "../utils/productData";

import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardAction
} from "@/ui/card"

import {
    Button,
    buttonVariants
} from "@/ui/button"

export default function Cart() {
    const products = getProducts();

    return (
        <>
            <div>
                <Card>
                    <CardHeader>Items in cart</CardHeader>
                    <CardContent>
                        {products.map(p => (
                            <div key={p.id}>
                                <div id="Img">
                                    <img src={p.image} alt={p.title} width={50} height={50}/>
                                </div>
                                {p.title} - R{p.price}
                            </div>))}
                    </CardContent>
                </Card>
                <Button variant="default" size="sm">Increase quantity</Button>
                <Button variant="default" size="sm">Decrease quantity</Button>
                <Button variant="default" size="sm">Remove from cart</Button>
            </div>
            <div>
                <Card>
                    <CardHeader>Price summary</CardHeader>
                    <CardContent>
                        Total: R{products.reduce((sum, p) => sum + p.price, 0)}
                    </CardContent>
                </Card>
            </div>

        </>
    )
}