
// show list of products
// show add to cart
// show remove to cart
// make it do backflips
import Product from "./Product"
import { getProducts } from "../utils/productData";

export default function ProductList() {
   const products = getProducts();

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
         {products.map(p => (
            <Product key={p.id} {...p}/>
         ))}
      </div>
   )
}