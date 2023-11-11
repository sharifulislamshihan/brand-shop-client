import { Link } from "react-router-dom";


const ViewMore = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/Gn0bmtk/pexels-kerde-severin-1542252.jpg')]">
                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="relative z-10 text-white text-center py-16">
                    <h2 className="text-2xl lg:text-3xl font-paragraph font-medium mb-12">Fiona Rosewood</h2>
                    <h3 className=" text-3xl lg:text-5xl font-heading font-bold mb-10 mx-5 lg:mx-32">"An all-in-one tech, offering the latest gadgets and personalized service for every digital need"</h3>

                    <Link to='/collection'>
                        <button type="button" className="btn px-8 py-3 font-semibold rounded-full ">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewMore;