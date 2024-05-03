



const Information = () => {
    return (
        <div className=" mt-10 mb-10  ml-36 mr-36">

            <div className=" flex justify-center items-center gap-10 bg-blue-900 text-white p-10 rounded-xl">
          
                <div className=" flex items-center gap-3 ">
                    <img className=" h-[50px]" src="https://i.ibb.co/1QYh55j/schedule.png" alt="" />
                    <div>
                    <h1 className=" text-xl font-bold">We are open monday-friday</h1>
                    <p className=" text-xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>


                <div className=" flex items-center gap-3">
                    <img className=" h-[50px]" src="https://i.ibb.co/RyJ2DJ0/phone.png" alt="" />
                    <div>
                    <h1 className=" text-xl font-bold">Have a question?</h1>
                    <p className=" text-xl font-bold">+2546 251 2658</p>
                    </div>
                </div>


                <div className=" flex items-center gap-3">
                    <img className=" h-[50px]" src="https://i.ibb.co/LCBD7CX/map-1.png" alt="" />
                    <div>
                    <h1 className=" text-xl font-bold">Need a repair? our address</h1>
                    <p className=" text-xl font-bold">Liza Street, New York</p>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Information;