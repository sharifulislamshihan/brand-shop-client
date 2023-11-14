import { useContext, useEffect } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { onAuthStateChanged } from "firebase/auth";

const Register = () => {

    // for create user
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        co//nsole.log(name, email, password);

        // creating user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })


    }

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold lg:text-5xl">SIGN UP NOW!</h2>
                    <div className="text-lg text-slate-500">SIGN UP NOW AND GET EXCLUSIVE DISCOUNT</div>
                </div>
                <img src="https://i.ibb.co/t3dM5WG/register.jpg" alt="" className="p-6 h-full" />
            </div>
            <div>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input type="email" name="email" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label className="text-sm">Password</label>
                        <input type="password" name="password" className="w-full p-3 rounded " />
                    </div>
                    <button type="submit" className="w-full p-3 text-lg font-bold bg-black text-white rounded ">SIGN UP</button>
                </form>

                <div className="flex items-center pt-4 space-x-1 space-y-6">
                    <div className="flex-1 h-px sm:w-16 "></div>
                    <p className="px-3 text-xl">Signup with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 "></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="btn text-2xl"><FaGoogle></FaGoogle> </button>


                    <button className="btn text-2xl"><FaTwitter></FaTwitter> </button>


                    <button className="btn text-2xl"><FaGithub></FaGithub> </button>


                </div>
                <p className="text-medium text-center font-heading font-semibold sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to='/signin'><span className="underline text-blue-600">Sign in</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;