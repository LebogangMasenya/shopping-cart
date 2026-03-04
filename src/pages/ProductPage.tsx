
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/ui/drawer"

import ProductList from "../components/Product/ProductList";
import Cart from "../components/Cart/Cart";
"use client"
export default  function ProductsPage() {
  return (
    <div className="w-full ">
      <h1>Product Page</h1>
      <Drawer direction="right">
        <DrawerTrigger className="border border-black-500 bg-accent">View Cart</DrawerTrigger>

        <DrawerContent className="h-full w-400 ml-auto p-6">
          <Cart />
        </DrawerContent>
      </Drawer>
      
      <ProductList  />

    
    </div>
  );
}