interface Product {
    id: number;
    title: string;
    price: number;
    discription: string;
    image: string;
    rate: number;
    count: number
}

const BASE_SHOPPING_URL = import.meta.env.VITE_BASE_SHOPPING_URL;

export async function getProducts() {

    const response = await fetch(BASE_SHOPPING_URL + "/products");
    let products: Product[] | null;
    
    if(response.ok) {
        const data = await response.json();
    }
}