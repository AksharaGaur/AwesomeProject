// src/types.ts

export type Product = {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
  };
  
  export type RootStackParamList = {
    CategoryScreen: undefined;
    ProductListScreen: { category: string };
    ProductDetailScreen: { product: Product };
  };
  