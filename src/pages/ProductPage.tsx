
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer"

import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"
import ProductList from "../components/Product/ProductList";
import Cart from "../components/Cart/Cart";
"use client"
export default  function ProductsPage() {
  return (
<div className="min-h-screen bg-slate-50/50">
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">StyleStore</h1>
          
          <nav className="flex items-center gap-4">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline" className="relative gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span>Cart</span>
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

      <main className="container py-8">
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