import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <NavLink to="/" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">HOME</li></NavLink>

        <NavLink to="/collection" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">COLLECTION</li></NavLink>

        <NavLink to="/addPhone" activeClassName="active"><li className="text-lg  font-semibold font-heading  my-2 mx-5 hover:text-red-600 ">ADD PHONE</li></NavLink>

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
                    {
                        user ? <div>
                            <Link onClick={handleSignOut} to='/signin'><a className="font-heading font-semibold text-sm mx-2 md:mx-16 md:text-xl hover:text-red-500">Log Out</a></Link>
                        </div>
                            :
                            <>
                                <Link to='/signup'><a className="font-heading font-semibold text-base mx-3 md:text-xl hover:text-red-500">Register</a></Link>
                                <Link to='/signin'><a className="font-heading font-semibold text-base mx-5 md:text-xl hover:text-red-500">LogIn</a></Link>
                            </>

                    }
                    {/* <Link to='/signup'><a className="font-heading font-semibold text-base mx-3 md:text-xl hover:text-red-500">Register</a></Link>
                    <Link to='/signin'><a className="font-heading font-semibold text-base mx-5 md:text-xl hover:text-red-500">LogIn</a></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;