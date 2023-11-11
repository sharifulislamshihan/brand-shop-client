
const Brands = () => {
    return (
        <div className=" my-16">
            <h3 className="text-5xl font-heading font-extrabold text-center">BRANDS</h3>
            <div className="grid grid-cols-5 mx-5 gap-5 my-12">
                {/* Apple */}
                <div className="mx-auto">
                    <img className="w-28 rounded-full" src="https://i.ibb.co/NtsgGTf/apple.jpg" alt="" />
                    <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600">APPLE</h3>
                </div>
                {/* samsung */}
                <div className="mx-auto">
                    <img className="w-32 rounded-full" src="https://i.ibb.co/hf53ZZB/samsung2.jpg" alt="" />
                    <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600">SAMSUNG</h3>
                </div>
                {/* sony */}
                <div className="mx-auto">
                    <img className="w-36 rounded-full" src="https://i.ibb.co/r2H81h8/Sony2.png" alt="" />
                    <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600">SONY</h3>
                </div>
                {/* Google */}
                <div className="mx-auto">
                    <img className="w-32 rounded-full" src="https://i.ibb.co/h19TwVC/google.png" alt="" />
                    <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600">GOOGLE</h3>
                </div>
                {/* Oppo */}
                <div className="mx-auto">
                    <img className="w-32 rounded-full" src="https://i.ibb.co/6Z1FXhT/oppo.jpg" alt="" />
                    <h3 className=" my-5 text-2xl font-paragraph font-bold text-center hover:text-red-600">OPPO</h3>
                </div>
            </div>
        </div>
    );
};

export default Brands;