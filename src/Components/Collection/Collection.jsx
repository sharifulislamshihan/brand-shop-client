import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { FaBitbucket, FaEye, FaPen, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

const Collection = () => {
    const phonesData = useLoaderData();
    // to count rest of the data after delete one
    const [phones, setPhones] = useState(phonesData);
    console.log(phones);
    const itemsPerPage = 12;

    // this useState useed for load more button visibility
    const [visible, setVisible] = useState(itemsPerPage);
    // this useState using for searching phone/accesories
    const [searchPhones, setSearchPhones] = useState('');
    // loadmore funtion
    const loadMore = () => {
        setVisible(visible => visible + itemsPerPage)
    }

    //search funtion
    const handleSearchPhones = e => {
        setSearchPhones(e.target.value);
    }

    const filterData = phonesData.filter(
        item =>
            item.name.toLowerCase().includes(searchPhones.toLowerCase()) ||
            item.brandName.toLowerCase().includes(searchPhones.toLowerCase())
    );

    //const { _id } = filterData;
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://phone-crud-server.vercel.app/phones/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                            const remaining = phones.filter(phone => phone._id !== id);
                            setPhones(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/ZGQkzw0/Collection-banner.jpg')] max-h-screen">
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative z-10 text-white text-center py-10 lg:py-52">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium mb-12">SEARCH YOUR PHONE NOW</h2>

                    <div>

                        <div onChange={handleSearchPhones} className="form-control">

                            <div className="input-group flex justify-center ">
                                <input className="input input-bordered text-black join-item" type="text" name="text" placeholder="Search..." />
                                <button className="btn join-item rounded-r-full"><FaSearch className="text-xl"></FaSearch></button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-4xl md:text-6xl font-bold font-paragraph text-center my-7">ALL THE PHONE FOR YOU</h3>
                <p className="text-2xl text-center font-heading text-slate-500">NOW YOU CAN SEE, EDIT OR DELETE PRODUCT</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-20 mx-10 md:mx-20">
                {
                    filterData.slice(0, visible).map(item => (
                        <div key={item.id} >
                            <div className="card lg:card-side bg-base-100 h-full hover:shadow-xl my-4">
                                <figure><img className="w-48" src={item.photo} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-bold font-heading text-black">{item.name}</h2>
                                    <h3 className="text-lg font-bold font-heading text-slate-600">Brand: <span className="text-xl">{item.brandName}</span></h3>
                                    <h3 className="text-lg font-bold font-heading text-slate-600">Price: $ <span className="text-xl">{item.price}</span></h3>
                                    <div className="card-actions flex justify-between mt-4 ">
                                        <div className="join join-horizontal gap-3 md:gap-6 mx-auto">
                                            <Link to={`/phoneDetails/${item._id}`}>
                                                <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaEye></FaEye></button>
                                            </Link>

                                            {/* to={`/updatePhone/${_id}`}> */}
                                            <Link to={`/updatePhone/${item._id}`} >
                                                <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaPen></FaPen></button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaBitbucket></FaBitbucket></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
            {
                visible < filterData.length && (

                    <div className="flex justify-center mb-10">
                        <button onClick={loadMore} className="btn btn-neutral bg-black text-white">Load More</button>
                    </div>
                )
            }
        </div>
    );
};

export default Collection;