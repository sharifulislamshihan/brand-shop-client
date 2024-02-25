import { Link } from "react-router-dom";

const Brands = () => {
    return (
        <div className=" my-16">
            <h3 className="text-5xl font-heading font-extrabold text-center">BRANDS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-5 gap-5 my-12">
                {/* Apple */}
                <Link to='/apple'>
                    <div>
                        <img className="w-28 rounded-full mx-auto hover:w-32" src="https://i.ibb.co/NtsgGTf/apple.jpg" alt="" />
                        <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600 hover:text-3xl">APPLE</h3>
                    </div>
                </Link>
                {/* samsung */}
                <Link to='/samsung'>
                    <div>
                        <img className="w-32 rounded-full mx-auto hover:w-36" src="https://i.ibb.co/hf53ZZB/samsung2.jpg" alt="" />
                        <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600 hover:text-3xl">SAMSUNG</h3>
                    </div>
                </Link>
                {/* sony */}
                <Link to='/sony'>
                    <div>
                        <img className="w-36 rounded-full mx-auto hover:w-40" src="https://i.ibb.co/r2H81h8/Sony2.png" alt="" />
                        <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600 hover:text-3xl">SONY</h3>
                    </div>
                </Link>
                {/* Google */}
                <Link to='/google'>
                    <div>
                        <img className="w-32 rounded-full mx-auto hover:w-36" src="https://i.ibb.co/h19TwVC/google.png" alt="" />
                        <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600 hover:text-3xl">GOOGLE</h3>
                    </div>
                </Link>
                {/* Oppo */}
                <Link to='/oppo'>
                    <div>
                        <img className="w-32 rounded-full mx-auto hover:w-36" src="https://i.ibb.co/6Z1FXhT/oppo.jpg" alt="" />
                        <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600 hover:text-3xl">OPPO</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;