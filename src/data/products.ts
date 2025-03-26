export const categories = [
    {id:'1', name:'Clothing'},
    {id:'2', name:'Electronics'},
    {id:'3',name:'Footwear'}
]

type Product = {
    id: string;
    name: string;
    image: string;
    price:string;
    discription:string
  };
  
  type ProductsData = {
    [key: string]: Product[]; // Define an index signature
  };

export const products : ProductsData= {
    Clothing: [{id:'101', name:"Dress", price:'₹1,099', image:'https://img.freepik.com/free-photo/clothes-store-with-mannequin_23-2148929528.jpg?semt=ais_hybrid', discription:'A beautiful dress'}],
    Electronics: [{id:'102', name:'Smart Pnone', price:'₹25,000', image:'https://www.shutterstock.com/image-generated/close-photo-smartphone-held-hand-businesswoman-we-2564472239', discription:'Latest smartphone model'}],
    Footwear:[{id:'103', name:'Shoes', price:'₹999', image:'https://www.shutterstock.com/image-photo/trendy-sports-shoes-on-white-background-men', discription:'Comfortable Shoes'}]
}