export type Product = {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    
}

// export interface ProductState {
//     products: Product[];
//     status:'idle' | 'loading' | 'success' | 'error';
// }

export type RootStackParamList = {
    CategorySlide:undefined;
    ProductListSlide: {category : string};
    ProductDetailSlide: {product:Product};
};