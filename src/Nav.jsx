
import MovingText from 'react-moving-text'
import { Link, NavLink } from 'react-router-dom';



// ---------------theme
import { useEffect, useState } from 'react'
// -----------------------------------------


const Nav = () => {


  // ------------------------------------theme
  const [theme, setTheme] = useState('light')
  
  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
// --------------------------------------

    const links = <>
    
         <li><NavLink to="/" >Home</NavLink></li>
         <li><NavLink to="/about" >About</NavLink></li>
         <li><NavLink to="/ser" >service</NavLink></li>
         <li><NavLink to="/blog" >Blog</NavLink></li>
         <li><NavLink to="/contact" >Contact</NavLink></li>
    
    </>




    return (
        <div>

            <div>


                    <div className=" shadow-xl  navbar bg-base-100">
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
                      <img className=" h-[50px] " src="https://i.ibb.co/3YwcnDn/1714709739738-01.jpg" alt="" />
                      
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
                   <div className=" flex items-center gap-5 navbar-end">
                    
                    {/* ---------------------theme */}
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                    
                    <span className="relative">
                      <input onChange={handleToggle} id="Toggle1"  type="checkbox" className="hidden peer" />
                      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                    </span>
                    
                    </label>
                    {/* ------------------------------------                      */}

                    <Link to="/login" >
                        <a href="#_" className=" btn relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-900  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign In</span>
                    </a>
                    </Link>

                  
                   </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Nav;