
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer"

import {
  Button
} from "@/ui/button"

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
export default function ProductsPage() {
  return (
    <div>
      <h1>Product Page</h1>

      <ProductList />

<Drawer direction="right">
  <DrawerTrigger><Button>View Cart</Button></DrawerTrigger>
  <DrawerContent className="h-full w-[400px] ml-auto p-6">
   
      <Cart />
     
      </DrawerContent>
</Drawer>
    </div>
  );
}