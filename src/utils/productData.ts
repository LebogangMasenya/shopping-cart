export interface ProductProp {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
        rate: number,
        count: number
    }
    quantity?: number;
}

export interface ProductListProps {
  products: ProductProp[]; 
}

const BASE_SHOPPING_URL = import.meta.env.VITE_BASE_SHOPPING_URL;

async function fetchProducts(): Promise<ProductProp[]> {
    const response = await fetch(BASE_SHOPPING_URL + "/products");
    if(response.ok) {
        const data = await response.json();
        return data;  
    } else {
        throw new Error("Failed to fetch products");
    }
}

export async function getProducts() : Promise<ProductProp[]> {
  const dataArray = await fetchProducts(); 

  dataArray.map((item: ProductProp) => { 
    return item;
  });

  return dataArray;
}
