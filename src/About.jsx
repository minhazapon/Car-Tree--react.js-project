




const About = () => {
    return (
        <div className=" ml-3 mr-3 mt-10 mb-10 flex justify-center items-center gap-20 border-[1px]
        
         flex-col md:flex-row
        border-blue-900 p-3 rounded-xl ">

            <div>
             <img className=" h-[300px] w-[300px] rounded-xl" src="https://i.ibb.co/bz72PB0/image.png" alt="" />
             <img className=" ml-28 -mt-28 h-[250px] w-[250px] rounded-xl border-[6px]  border-blue-900 " src="https://i.ibb.co/d6nZfm1/image.png" alt="" />
            </div>


            <div> 
              <h1 className=" text-2xl text-blue-900 font-bold">About Us</h1>
              <p className=" text-7xl font-bold text-blue-900">We are qualified<br></br> & of experience<br></br> in this field</p>
              <p className=" text-2xl font-bold text-slate-500">Cars have always interested me. <br></br> Our genes have been influenced by cars. <br></br> It cannot be avoided.
              </p>
              
                         <a href="#_" className=" border-[1px] border-blue-900 btn mt-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
               <span className="w-48 h-48 rounded rotate-[-40deg]  bg-blue-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
               <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Get More Info</span>
               </a>
            </div>

            
        </div>
    );
};

export default About;