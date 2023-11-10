
import FooterEnd from './FooterEnd';
const Footer = () => {
    return (
        <footer>
            <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/fNGkgKG/chad-madden-b-Tfza0-M0h-CE-unsplash-1.jpg')]">
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative z-10 text-white text-center py-16">
                    <h2 className="text-2xl font-heading font-medium mb-12">SUBSCRIBE NOW</h2>
                    <h3 className="text-5xl font-heading font-bold mb-10">GET OUR UPDATES ALWAYS FAST</h3>
                    <h4 className="text-lg font-heading mb-7">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</h4>
                    <div>
                        {/* <div className="form-control"> */}
                            <div className="input-group flex justify-center">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square bg-black text-white hover:bg-black hover:text-white ">
                                    GO
                                </button>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <FooterEnd></FooterEnd>
        </footer>
    );
};

export default Footer;