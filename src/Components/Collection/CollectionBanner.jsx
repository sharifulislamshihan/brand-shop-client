import { FaSearch } from "react-icons/fa";

const CollectionBanner = () => {
    return (
        <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/ZGQkzw0/Collection-banner.jpg')] max-h-screen">
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 text-white text-center py-16 py-10 lg:py-52">
                <h2 className="text-2xl md:text-4xl font-heading font-medium mb-12">SEARCH YOUR PHONE NOW</h2>
                <div>
                    {/* <div className="form-control"> */}
                    <div className="input-group flex justify-center ">
                        <input className="input input-bordered text-black join-item" placeholder="Search..." />
                        <button className="btn join-item rounded-r-full"><FaSearch className="text-xl"></FaSearch></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionBanner;