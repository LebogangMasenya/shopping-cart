import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "../../ui/card"
import { ShoppingCart, Star } from "lucide-react";

import {
    Button,
} from "../../ui/button"

import { Badge } from "../../ui/badge"
import { type ProductProp } from "../../utils/productData";

import { useCartDispatch } from "../../hooks/context/ProductContext"

export default function Product(data: ProductProp) {
    const dispatch = useCartDispatch();

    function handleAddToCart() {
        dispatch({ type: "ADD", payload: data })
    }

    return (
        <Card className="group relative flex h-100 w-full flex-col justify-end overflow-hidden border-none transition-all hover:shadow-2xl m-2">           
        
             <img src={data.image} alt={data.title} className="absolute inset-0 h-full w-full object-cover z-0" />

            <div className="absolute  inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10">
            <div className="relative z-20 flex h-full flex-col justify-end p-5">
                <div className="gap-2 flex items-center justify-between">
                    <span>
                <Badge 
                    className="absolute text-black max-w-27 top-4 left-4 bg-white/20 backdrop-blur-md border-white/20  hover:bg-white/30 line-clamp-1" 
                    variant="outline"
                >
                    {data.category.toUpperCase()}
                </Badge>
        </span>
                      <span className="text-xs text-zinc-foreground absolute top-4 right-4 bg-white/20 backdrop-blur-md border-white/20 px-2 py-1 rounded-md">
                        <Star className="inline-block fill-yellow-400 text-yellow-400 w-3 h-3" />
                        {data.rating.rate} ({data.rating.count} reviews)
                    </span>

                </div>

                <CardContent className="p-4 text-white">
                    <CardTitle className="font-semibold text-lg line-clamp-1">{data.title}</CardTitle>
                    <CardDescription className="text-sm text-white mt-2 line-clamp-2">
                        {data.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="flex items-center p-4 pt-2 justify-between text-white">
                    <span className="text-xl font-bold">R{data.price}</span>
              
                    <Button onClick={handleAddToCart} className="bg-white text-black hover:bg-zinc-200 transition-colors rounded-full px-4" variant="default" size="lg">
                        <ShoppingCart >
                            Add to Cart
                        </ShoppingCart>
                    </Button>

                </CardFooter>
            </div>
           </div>
        </Card>
    )
}