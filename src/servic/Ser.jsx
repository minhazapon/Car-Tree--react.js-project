



const Ser = () => {
    return (
        <div className=" mb-10 mt-10 mr-5 ml-5">

            <div className=" flex justify-center flex-col md:flex-row border-[6px] border-blue-900 rounded-xl">

            <div className="  flex-col md:flex-row bg-no-repeat bg-cover h-[300px] w-full " style={{backgroundImage: 'url(https://i.ibb.co/LQC2cYD/image.png)'}}>
                <h1 className="  flex-col md:flex-row text-5xl font-bold text-white mt-20 ml-10 bg-gradient-to-r from-black p-3">Service Details</h1>
            </div>
            </div>
            {/* ----------------------------------------------------------- */}



            <div className=" mt-10 mb-10">


            <div>
            <img className=" h-[400px] w-[600px] rounded-xl" src="https://i.ibb.co/QnHCcmJ/image.png" alt="" />
            </div>

            <div className=" mt-5">
             <h1 className=" text-4xl font-bold text-blue-900">Unique Car Engine Service</h1>
             <p className=" text-slate-400 mt-3">There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered alteration in some form, by injected humour, or<br></br> randomised words which don't look even slightly believable. <br></br> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't <br></br> anything embarrassing hidden in the middle of text. </p>
            </div>


            <div className=" mt-2">
                
            <div className=" flex items-center gap-2">
            <div className="card w-[300px] bg-blue-900 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Instant Car Services</h2>
                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
               
              </div>
            </div>

            <div className="card w-[300px] bg-blue-900 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">24/7 Quality Service</h2>
                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
               
              </div>
            </div>
            </div>
             {/* -------------------------------- */}


            <div className=" flex items-center gap-2 mt-2">
            <div className="card w-[300px] bg-blue-900 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Easy Customer Service</h2>
                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
               
              </div>
            </div>

            <div className="card w-[300px] bg-blue-900 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Quality Cost Service</h2>
                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
               
              </div>
            </div>
            </div>


            </div>

              <div className=" mt-3">
                 <p className=" text-xl text-slate-400">There are many variations of passages of <br></br> Lorem Ipsum available, but the majority have suffered<br></br> alteration in some form, by injected humour, or randomised  <br></br>words which don't look even slightly believable. <br></br> If you are going to use a passage of Lorem Ipsum,  <br></br>you need to be sure there isn't anything embarrassing  <br></br>hidden in the middle of text. </p>

              </div>

            {/* ---------------------------------------------- */}
            <h1 className=" mt-3 text-5xl font-bold text-blue-900">3 Simple Steps to Process</h1>

            <div className=" flex items-center gap-14 mt-5">

          
            <div className=" ">
              <h1 className="   bg-blue-900 text-white h-[70px] w-[70px] text-4xl font-bold p-3 rounded-full">01</h1>
              <p className=" text-xl font-bold">Step One</p>
              <p className=" text-xl text-slate-400">It uses a  <br></br>dictionary<br></br> of over 200 .</p>

            </div>

            <div className=" ">
              <h1 className="   bg-blue-900 text-white h-[70px] w-[70px] text-4xl font-bold p-3 rounded-full">02</h1>
              <p className=" text-xl font-bold">Step Two</p>
              <p className=" text-xl text-slate-400">It uses a  <br></br>dictionary<br></br> of over 200 .</p>

            </div>

            <div className=" ">
              <h1 className="   bg-blue-900 text-white h-[70px] w-[70px] text-4xl font-bold p-3 rounded-full">03</h1>
              <p className=" text-xl font-bold">Step Three</p>
              <p className=" text-xl text-slate-400">It uses a  <br></br>dictionary<br></br> of over 200 .</p>

            </div>


            </div>

            <div>
            </div>


           




            </div>




{/* last file of video ------------------------------------------------ */}
         
         <div>

         <video className=" mt-5 h-full w-full rounded-lg" controls>
              <source src="https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-72-large.mp4" type="video/mp4" />
            
            </video>


         </div>


        </div>
    );
};

export default Ser;