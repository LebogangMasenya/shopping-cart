
// show list of products
// show add to cart
// show remove to cart
// make it do backflips
import Product from "./Product"
import { type ProductListProps } from "../utils/productData";
import { ProductContext } from "../hooks/context/ProductContext";


export default function ProductList({products}: ProductListProps) {
   
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full">
         {products.map(p => (
            <Product key={p.id} {...p}/>
         ))}
      </div>
   )
}