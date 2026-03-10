
// show list of products
// show add to cart
// show remove to cart
// make it do backflips
import Product from "./Product"
import { useEffect } from "react";
import { Skeleton } from "../../ui/skeleton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import  { selectProducts , fetchProducts } from "../../feat/product/productSlice"

export default function ProductList() {
   const dispatch = useAppDispatch();
   const allProducts = useAppSelector(selectProducts);
   const products = allProducts.products;

   useEffect(() => {
      dispatch(fetchProducts())
  }, [dispatch, products])

  
     
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full">
         {!products || products.length === 0 ? (
            [...Array(12)].map(( i) => (
               <Skeleton key={i}  className="flex h-150 w-full rounded-xl" />
            ))
         ) : ( 
         products.map(p => (
            <Product key={p.id} {...p} />
         ))
      )}
      </div>
   )
}