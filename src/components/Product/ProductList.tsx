
// show list of products
// show add to cart
// show remove to cart
// make it do backflips
import type { ProductProp } from "../../utils/productData";
import Product from "./Product"
import { Skeleton } from "../../ui/skeleton";
import { getProducts} from "../../utils/productData";

import { useState } from "react";

export default function ProductList() {
   const [products, setProducts] = useState<ProductProp[]>([]);

   // needs to be async to fetch products from api: products = await getProducts(); 
     async function handleFetchProducts() {
         try {
            setProducts(await getProducts())
         }catch (error) {
            console.error("error")
         } 
      }
  
     handleFetchProducts();
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full">
         {!products ? (
            [...Array(8)].map(( i) => (
               <Skeleton key={i}  className="flex h-150 w-full rounded-xl" />
            ))
         ) : ( 
         products.map(p => (
            <Product key={p.id} {...p} />
         ))
      )
      }
      </div>
   )
}