


const Check = () => {
    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>

            <div className=" flex justify-center flex-col md:flex-row border-[6px] border-blue-900 rounded-xl">

            <div className="  flex-col md:flex-row bg-no-repeat bg-cover h-[300px] w-full " style={{backgroundImage: 'url(https://i.ibb.co/LQC2cYD/image.png)'}}>
                <h1 className="  flex-col md:flex-row text-5xl font-bold text-white mt-20 ml-10 bg-gradient-to-r from-black p-3">Check Out</h1>
            </div>
            </div>
{/* ---------------------------------------- */}
               

            <div className=" mt-10 mb-10">

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-blue-900 text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Check Out</h2>
			<div className=" text-white text-2xl ">One of my biggest dreams is to own a car collection.</div>
		</div>
		<img className="p-6  h-[300px] w-[400px] rounded-full " src="https://img.freepik.com/free-photo/detailed-shot-car-wheels-tires_157027-4311.jpg?t=st=1714916941~exp=1714920541~hmac=a28a9d5c2762f8cb2db5de677916dcf01f88bff82022bd366803b0d39053bb5f&w=996" alt=""  />
	</div>
	<form noValidate="" className="space-y-6">


		<div>
		<label htmlFor="name" className="text-sm">First Name</label>
		<input id="name" type="text" placeholder="First Name" className="w-full p-3 rounded bg-white " />
		</div>

{/* --------------------- */}

        <div>
		<label htmlFor="name" className="text-sm">Last name</label>
		<input id="name" type="text" placeholder="Last name" className="w-full p-3 rounded bg-white " />
		</div>


{/* --------------------- */}

{/* --------------------- */}

        <div>
		<label htmlFor="name" className="text-sm">Your Name</label>
		<input id="name" type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white " />
		</div>


{/* --------------------- */}


		<div>
			<label htmlFor="email" className="text-sm">Your Phone</label>
            <input type="email" name="email" placeholder="Your Phone" id="" className="w-full p-3 rounded bg-white "  />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Product Description</label>
			<textarea id="message" rows="3" placeholder="Product Description" className="w-full p-3 text-black rounded bg-white"></textarea>
        		</div>
        		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn border-[2px] border-black  bg-white text-gray-900">Order Confirm</button>
        	</form>
        </div>
             
            </div>

            </div>
            
        </div>
    );
};

export default Check;