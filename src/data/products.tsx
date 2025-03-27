export const categories = [
    {id:'1', name:'Clothing'},
    {id:'2', name:'Electronics'},
    {id:'3',name:'Footwear'},
    {id:'4', name:'Appliances'},
    {id:'5', name:'Sports'}
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

export const products : Record<string, { id: string; name: string; image: string; price:string; discription:string }[]>= {
    Clothing: [{id:'101', name:"Dress", price:'₹1,099', image:'https://img.freepik.com/free-photo/clothes-store-with-mannequin_23-2148929528.jpg?semt=ais_hybrid', discription:'A beautiful dress'}],

    Electronics: [{id:'102', name:'Smart Pnone', price:'₹25,000', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxy562Qd1Z_5rR62jhsLJLZ4fnBzfXIBLYOwUlKG3vt3cFDrZGUijv68&s', discription:'Latest smartphone model'}],

    Footwear:[{id:'103', name:'Shoes', price:'₹999', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiA9PG4i2mNefPfRNZMkDVzASqXKNENaCZk4BwoZcGfBXmwLgqqF-3I54&s', discription:'Comfortable Shoes'}],

    Appliances: [{id:'104', name:"Television", price:'₹9,999', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhBa1UIRGxTV0y24HryftN1sgA0rX3jpGlLKJ5PlnKnIEc7YICQvmAVE&s', discription:'Smart T.V'}],

    Sports: [{id:'101', name:"Football", price:'₹2,299', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIMZrwVES15MdprGY_Lw5d-pEMhouQIAiY6ws1pbSS5kUEj5XtE2H-nE&s', discription:'Best Quality'}],
}

//export const products: Record<string, { id: string; name: string; image: string }[]> = {