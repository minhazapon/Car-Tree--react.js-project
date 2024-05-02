
import MovingText from 'react-moving-text'
import { NavLink } from 'react-router-dom';


const Nav = () => {

    const links = <>
    
         <li><NavLink to="/" >Home</NavLink></li>
         <li><NavLink to="/about" >About</NavLink></li>
         <li><NavLink to="/service" >service</NavLink></li>
         <li><NavLink to="/blog" >Blog</NavLink></li>
         <li><NavLink to="/contact" >Contact</NavLink></li>
    
    
    
    
    </>




    return (
        <div>

            <div>


                             <div className=" -ml-5 -mt-10 navbar bg-base-100">
                   <div className="navbar-start">
                     <div className="dropdown">
                       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                       </div>
                       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {links}
                       </ul>
                     </div>
                     <div className=" flex items-center">
                      <img className=" h-[150px] " src="https://img.freepik.com/premium-vector/car-service-icon_602006-1928.jpg?w=740" alt="" />
                      
                          <MovingText
                          type="spin"
                          duration="1000ms"
                          delay="0s"
                          direction="normal"
                          timing="ease"
                          iteration="5"
                          fillMode="none">
                          <a className=" text-2xl font-bold text-blue-900"> <span className=" text-red-600 text-4xl">Car </span>Tree</a>

                         </MovingText>



                     <img className=" h-[40px]" src="https://i.ibb.co/Q6NR8y4/tree.png" alt="" />
                     </div>



                   </div>
                   <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal px-1">
                        {links}
                     </ul>
                   </div>
                   <div className="navbar-end">
                     <a className="btn bg-blue-900  text-white">Sign In</a>
                   </div>
                 </div>
                 

            </div>
            
        </div>
    );
};

export default Nav;