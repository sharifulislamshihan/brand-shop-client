

const UpdatePhone = () => {
    const handleUpdatePhone = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const type = form.type.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatePhone = { name, brandName, price, type, details, photo };
        console.log(updatePhone);


    }
    return (
        <div>
            <h3 className="text-5xl font-paragraph font-bold text-center my-9">Update Phone</h3>
            <div className=" mx-12 lg:mx-40">
                <form onSubmit={handleUpdatePhone}>
                    {/* name and chef */}
                    <div className="md:flex gap-10 my-3">

                        {/* name */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/* Brand name */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold ">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* type and price */}

                    <div className="md:flex gap-10 my-3">

                        {/* Type */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold ">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/* price */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* details and pic URL */}

                    <div className="md:flex gap-10 my-3">

                        {/* details */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold ">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* photo URL */}
                        <div className="form-control md:w-1/2 my-2">
                            <label className="label">
                                <span className="label-text text-xl font-raleway  font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-block bg-black hover:bg-black border-white border solid text-white font-paragraph text-xl my-10">UPDATE PHONE</button>

                </form>


            </div>
        </div>
    );
};

export default UpdatePhone;