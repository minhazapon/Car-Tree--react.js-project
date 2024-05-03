import { useEffect } from "react";
import { useState } from "react";
import Pdetails from "./Pdetails";


const Products = () => {


    const [products, setProducts] = useState([]);

    useEffect( () => {

       fetch('https://mocki.io/v1/1515946f-258e-4af6-90c9-e1e8f094b036')
       .then(res => res.json())
       .then(data =>setProducts(data))

    } , [])




    return (
        <div className=" mb-10 mt-10">

            <div>

            <div className=" text-center">
               <h1 className=" text-2xl font-bold text-blue-900">Popular Products</h1>
               <p className=" text-6xl font-bold text-blue-900">Browse Our Products</p>
               <p className=" text-8xl text-slate-400">I care a lot about my car</p>

            </div>


            <div className=" flex justify-center items-center">
            <div className=" grid  md:grid-cols-3 gap-5 mt-10 mb-10">


               {

               products.map( products =>  <Pdetails key={products.id} products={products}  ></Pdetails> )

               }


            </div>
            </div>






            </div>
            
        </div>
    );
};

export default Products;

