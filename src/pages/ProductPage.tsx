
import {
  Drawer,
  DrawerContent,

  DrawerTrigger,
} from "@/ui/drawer"

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

import productReducer from "../hooks/reducers/productReducer";
import type { ProductProp } from "../utils/productData";
import { getProducts } from "../utils/productData";
import { useReducer } from "react";
import {useState} from "react";

export default function ProductsPage() {
    const [cart, dispatch] = useReducer(productReducer, []);
    const products =  getProducts();

    function addToCart(product: ProductProp) {
        dispatch({type: "ADD", payload: product})
    }

    function removeFromCart(product: ProductProp) {
        dispatch({type: "REMOVE", payload: product})
    }

    function increaseQuantity(product: ProductProp) {
        dispatch({type: "INCREASE_QUANTITY", payload: product})
    }

    function decreaseQuantity(product: ProductProp) {
        dispatch({type: "DECREASE_QUANTITY", payload: product})
    }

  return (
    <div className="w-full ">
      <h1>Product Page</h1>

      <ProductList products={products} />

      <Drawer direction="right">
        <DrawerTrigger className="border border-black-500 bg-accent">View Cart</DrawerTrigger>

        <DrawerContent className="h-full w-400 ml-auto p-6">
          <Cart products={products}/>
        </DrawerContent>
      </Drawer>
    </div>
  );
}