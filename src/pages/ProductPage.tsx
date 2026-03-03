
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/ui/drawer"

import ProductList from "../components/Product/ProductList";
import Cart from "../components/Cart/Cart";

export default  function ProductsPage() {
  return (
    <div className="w-full ">
      <h1>Product Page</h1>

      <ProductList  />

      <Drawer direction="right">
        <DrawerTrigger className="border border-black-500 bg-accent">View Cart</DrawerTrigger>

        <DrawerContent className="h-full w-400 ml-auto p-6">
          <Cart />
        </DrawerContent>
      </Drawer>
    </div>
  );
}