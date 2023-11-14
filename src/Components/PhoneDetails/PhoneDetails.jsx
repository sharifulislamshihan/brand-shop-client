import { useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
    const phoneData = useLoaderData();
    const { name, brandName, type, price, details, photo } = phoneData
    return (
        <div className="my-20">
            <div className=" md:flex justify-center gap-20 mt-24 mb-10">
                <img className="h-72 mx-auto md:mx-0" src={photo} alt="" />
                <div className="space-y-7 text-center">
                    <h3 className="text-6xl font-rancho font-semibold text-[#331A15]">BEST DEAL</h3>
                    <div className="space-y-2">
                        {/* // name, chef, price, taste, category, details, photo */}
                        <h3 className="text-xl font-raleway font-semibold">Name: <span className="text-slate-500">{name}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Brand Name: <span className="text-slate-500">{brandName}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Price: $ <span className="text-slate-500">{price}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Type: <span className="text-slate-500">{type}</span></h3>

                        
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-raleway font-semibold mx-10 mb-10">Details: <span className="text-slate-500">{phoneData?.details}</span></h3>
        </div>
    );
};

export default PhoneDetails;