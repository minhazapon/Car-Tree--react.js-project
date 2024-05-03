import { useEffect } from "react";
import { useState } from "react";
import ServiceDetails from "./ServiceDetails";



const Service = () => {


    const [car, setCar] = useState([])


    useEffect( () => {

       fetch('https://mocki.io/v1/11c54faa-da62-4f4c-8f0d-5dcdc7371689')
       .then(res => res.json())
       .then(data => setCar(data) )

    } ,[]  )




    return (
        <div>

            <div>

            <div className=" text-center">
               <h1 className=" text-2xl font-bold text-blue-900">Service </h1>
               <p className=" text-6xl font-bold  text-blue-900">Our Service Area</p>
               <p className=" text-5xl text-slate-400">My sole vice is fast automobiles</p>
            </div>

            </div>
            
           <div className=" flex justify-center items-center">
           <div className=" grid  md:grid-cols-3 gap-5 mt-10 mb-10">
                   {

                      car.map( car => <ServiceDetails key={car.id} car={car}></ServiceDetails>)

                   }

           </div>
           </div>

        </div>
    );
};

export default Service;