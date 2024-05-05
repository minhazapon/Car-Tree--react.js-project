



const AddNew = () => {
    return (
        <div className="  animate__animated animate__backInRight animate__repeat-2 mt-10 mb-10 ml-10 mr-10">

            <div>

            <div className=" flex justify-center flex-col md:flex-row border-[6px] border-blue-900 rounded-xl">

            <div className="  flex-col md:flex-row bg-no-repeat bg-cover h-[300px] w-full " style={{backgroundImage: 'url(https://i.ibb.co/LQC2cYD/image.png)'}}>
                <h1 className="  flex-col md:flex-row text-5xl font-bold text-white mt-20 ml-10 bg-gradient-to-r from-black p-3">Add New Service</h1>
            </div>
            </div>
{/* ---------------------------------------- */}
               

            <div className=" mt-10 mb-10">

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-blue-900 text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">ADD NEW CAR</h2>
			<div className=" text-white text-2xl ">Wheels for feels!</div>
		</div>
		<img className="p-6 h-[300px] w-[400px] rounded-full " src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1714915600~exp=1714919200~hmac=f1abb1a333d81ff2ea21e315ec134ca1234559757197b98e72d05a9714f00d5c&w=740" alt=""  />
	</div>
	<form noValidate="" className="space-y-6">


		<div>
		<label htmlFor="name" className="text-sm">Service Name</label>
		<input id="name" type="text" placeholder="Service Name" className="w-full p-3 rounded bg-white " />
		</div>

{/* --------------------- */}

        <div>
		<label htmlFor="name" className="text-sm">Service Price</label>
		<input id="name" type="text" placeholder="Service Price" className="w-full p-3 rounded bg-white " />
		</div>


{/* --------------------- */}

{/* --------------------- */}

        <div>
		<label htmlFor="name" className="text-sm">Text here</label>
		<input id="name" type="text" placeholder="Text here" className="w-full p-3 rounded bg-white " />
		</div>


{/* --------------------- */}


		<div>
			<label htmlFor="email" className="text-sm">Service Type</label>
            <input id="name" type="text" placeholder="Service Type" className="w-full p-3 rounded bg-white " />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Product Description</label>
			<textarea id="message" rows="3" placeholder="Product Description" className="w-full p-3 text-black rounded bg-white"></textarea>
        		</div>
        		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn border-[2px] border-black  bg-white text-gray-900">ADD</button>
        	</form>
        </div>
             
            </div>

            </div>
            
        </div>
    );
};

export default AddNew;