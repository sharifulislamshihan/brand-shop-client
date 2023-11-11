import { useState } from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const NavLinks = <>
        <NavLink to="/" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">HOME</li></NavLink>

        <NavLink to="/collection" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">COLLECTION</li></NavLink>

        <NavLink to="/addProduct" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">ADD PRODUCT</li></NavLink>

        <NavLink to="/aboutUs" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">ABOUT US</li></NavLink>

        <NavLink to="/myCart" activeClassName="active"><li className="text-lg  font-semibold font-heading my-2 mx-5 hover:text-red-600 ">MY CART</li></NavLink>

    </>
    return (
        <div className="">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown relative overflow-visible">
                        <label tabIndex={0} onClick={toggleMenu} className="btn btn-ghost lg:hidden menu-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 absolute z-10  ${isMenuOpen ? 'visible' : 'hidden'}`}>
                            {NavLinks}
                        </ul>
                    </div>
                    <img className="w-24 mx-auto mr-10 md:ml-12 " src="https://i.ibb.co/RHGsT6D/logo-removebg.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ? <div className="flex">
                            <img className="w-16 h-16 mt-5 rounded-lg" src={user?.photoURL} alt="no img" />
                            <span className="mr-5 text-2xl font-pacifico hidden md:block">Hey!! {user?.displayName}</span>
                            <Link to='/login'><a className="btn border-black font-heading font-bold text-base md:text-xl">Logout</a></Link>
                        </div>
                            :
                            <Link to='/login'><a className="btn border-black font-heading font-bold text-base md:text-xl">LogIn</a></Link>
                            
                    } */}
                    <Link to='/register'><a className="font-heading font-semibold text-base mx-3 md:text-xl hover:text-red-500">Register</a></Link>
                    <Link to='/login'><a className="font-heading font-semibold text-base mx-5 md:text-xl hover:text-red-500">LogIn</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;