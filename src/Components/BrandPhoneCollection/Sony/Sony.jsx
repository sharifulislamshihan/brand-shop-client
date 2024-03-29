import { Link, useLoaderData } from "react-router-dom";
import SonySlider from "./SonySlider";
import { useState } from "react";

const Sony = () => {

    const phonesData = useLoaderData();
    console.log(phonesData);
    const filterSonyData = phonesData.filter(item => item.brandName == 'Sony');
    console.log(filterSonyData);

    const itemsPerPage = 10;
    const [visible, setVisible] = useState(itemsPerPage);
    const loadMore = () => {
        setVisible(visible => visible + itemsPerPage)
    }

    return (
        <div>
            <SonySlider></SonySlider>
            <div className="mt-12">
                <h3 className="text-4xl md:text-6xl font-bold font-paragraph text-center my-7">SONY XPERIA FOR YOU</h3>
                <p className="text-2xl font-heading text-center font-heading text-slate-500">Discover the ideal choice</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-20 mx-10 md:mx-20">
                {
                    filterSonyData.slice(0, visible).map(item => (
                        <div key={item.id} >
                            <div className="card bg-base-100 h-full hover:shadow-xl my-4">
                                <figure><img className="w-48" src={item.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-bold font-heading text-black">{item.name}</h2>
                                    <h3 className="text-lg font-bold font-heading text-slate-600">Brand: <span className="text-xl">{item.brandName}</span></h3>
                                    <h3 className="text-lg font-bold font-heading text-slate-600">Price: <span className="text-xl">{item.price}</span></h3>
                                    <div className="card-actions flex justify-between mt-4 ">
                                        <Link to={`/phoneDetails/${item._id}`}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                visible < filterSonyData.length && (
                    <div className="flex justify-center mb-10">
                        <button onClick={loadMore} className="btn btn-neutral bg-black text-white">Load More</button>
                    </div>
                )
            }
        </div>
    );
};

export default Sony;