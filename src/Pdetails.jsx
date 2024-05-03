

import 'animate.css';


const Pdetails = ({products}) => {

     const {image, rating, name, Price} = products


    return (
        <div>

            <div>

            <div className=" animate__animated animate__flip  animate__repeat-2">
            <div>
            <div className="max-w-xs h-[400px] p-6 rounded-md shadow-md  bg-blue-900 text-gray-50">
            <img src={image} alt="" className="object-cover object-center w-full h-[200px] rounded-md  bg-gray-500" />
            <img className=" h-[50px]" src={rating} alt="" />
            <div className="mt-6 mb-2">
             <h2 className="text-xl font-semibold tracking-wide"> {name} </h2>
            </div>
            <p className="text-gray-100 text-2xl"> {Price}  </p>
            </div>
            </div>
            </div>


            </div>
            
        </div>
    );
};

export default Pdetails;