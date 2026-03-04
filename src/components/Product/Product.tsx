import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../ui/card"
import { ShoppingCart } from "lucide-react";

import {
    Button,
} from "../../ui/button"

import { Badge } from "../../ui/badge"
import { type ProductProp } from "../../utils/productData";

import { useCartDispatch} from "../../hooks/context/ProductContext"

export default function Product(data: ProductProp) {
    const dispatch = useCartDispatch();

    function handleAddToCart() {
        dispatch({type: "ADD", payload: data})
    }

    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg m-2">
            <CardHeader>
                <div className="aspect-square relative bg-muted">
                    <img src={data.image} alt={data.title} className="object-contain w-full h-full p-6" />

                    <Badge className="absolute top-3 left-3"  variant="secondary">{data.category.toUpperCase()}</Badge>
                </div>
            </CardHeader>


            <CardContent className="p-4">
                <CardTitle className="font-semibold text-lg line-clamp-1">{data.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {data.description}
                </CardDescription>
            </CardContent>

            <CardFooter className="flex items-center p-4 pt-0 justify-between">
                <span className="text-xl font-bold">R{data.price}</span>
              
                    <Button onClick={handleAddToCart} className="flex items-center gap-2 hover:skew-1" variant="default" size="lg">
                          <ShoppingCart >
                            Add to Cart
                          </ShoppingCart>
                    </Button>
            
            </CardFooter>
            <div className="text-sm text-muted-foreground">Rating: {data.rating.rate} ({data.rating.count} reviews)</div>

        </Card>
    )
}