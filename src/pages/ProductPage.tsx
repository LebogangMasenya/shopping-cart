
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer"

import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"
import ProductList from "../components/Product/ProductList";
import Cart from "../components/Cart/Cart";
import { useCart } from "../hooks/context/ProductContext";
"use client"

export default function ProductsPage() {
  const cartItemsState = useCart();
  const totalQuantity = cartItemsState.items.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-slate-50/50">

      <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between w-full">
          <h1 className="text-xl font-bold tracking-tight">StyleStore</h1>

          <nav className="flex items-center gap-4">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline" className="relative gap-2">
                 
                    <ShoppingBag className="h-4 w-4" />
                    {totalQuantity > 0 && (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-10 font-bold text-primary-foreground">
                        {totalQuantity}
                      </span>
                    )}
                 
                </Button>
              </DrawerTrigger>

              <DrawerContent className="fixed inset-y-0 right-0 h-full w-full sm:w-400 mt-0 rounded-none">
                <div className="h-full">
                  <Cart />
                </div>
              </DrawerContent>
            </Drawer>
          </nav>
        </div>
      </header>

      <main className="container py-8 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Our Collection</h2>
            <p className="text-muted-foreground">
              Discover our curated selection of premium products.
            </p>
          </div>

          <ProductList />
        </div>
      </main>
    </div>
  );
}