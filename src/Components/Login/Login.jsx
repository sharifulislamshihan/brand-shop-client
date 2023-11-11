import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-center mb-10">SIGN IN</h1>
            <form className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label className="text-xl font-heading font-semibold">Username</label>
                    <input type="text" name="name" placeholder="Username" className="w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="text-xl font-heading font-semibold">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" />
                    <div className="flex justify-end text-sm">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block btn w-full p-3 bg-black hover:bg-black text-white hover:text-white text-lg text-center rounded-lg">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-xl">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button className="btn text-2xl"><FaGoogle></FaGoogle> </button>


                <button className="btn text-2xl"><FaTwitter></FaTwitter> </button>


                <button className="btn text-2xl"><FaGithub></FaGithub> </button>


            </div>
            <p className="text-medium text-center font-heading font-semibold sm:px-6 dark:text-gray-400">Don't have an account?
                <Link to='/signup'><span className="underline text-blue-600">Sign up</span></Link>
            </p>
        </div>
    );
};

export default Login;