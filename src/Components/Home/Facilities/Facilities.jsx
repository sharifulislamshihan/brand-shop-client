
const Facilities = () => {
    return (

        <div className="mx-20 my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                <div className="card lg:card-side">
                    <figure><img className="w-16 hover:w-20" src="https://i.ibb.co/58Rs47P/delivery-truck-9318454.png" alt="" /></figure>
                    <div className="card-body mx-auto">
                        <h2 className="card-title font-heading text-2xl font-bold hover:text-red-500">FREE SHIPPING</h2>
                        <p className="text-lg font-paragraph font-semibold text-slate-700">For orders over $30.</p>
                    </div>
                </div>


                <div className="card lg:card-side">
                    <figure><img className="w-16 hover:w-20" src="https://i.ibb.co/7ys14BC/discount-2268728.png" alt="" /></figure>
                    <div className="card-body mx-auto">
                        <h2 className="card-title font-heading text-2xl font-bold hover:text-red-500">OFFICIAL DISCOUNTS</h2>
                        <p className="text-lg font-paragraph font-semibold text-slate-700">Save Big on next product</p>
                    </div>
                </div>


                <div className="card lg:card-side">
                    <figure><img className="w-16 hover:w-20" src="https://i.ibb.co/fX3q95B/help-desk-4961759.png" alt="" /></figure>
                    <div className="card-body mx-auto">
                        <h2 className="card-title font-heading text-2xl font-bold hover:text-red-500">24/7 HELPLINE</h2>
                        <p className="text-lg font-paragraph font-semibold text-slate-700">Care till the end</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Facilities;