import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const FooterEnd = () => {
    return (
        <div className="py-2">
            <div className="grid justify-center pt-6 lg:justify-between lg:mx-32 mb-3">
                <div className="flex flex-col  text-center md:block lg:col-start-1 md:space-x-6 text-xl">
                    <span>©2023 All rights reserved</span>
                    <a rel="noopener noreferrer" href="#">
                        <span>Privacy policy</span>
                    </a>
                    <a rel="noopener noreferrer" href="#">
                        <span>Terms of service</span>
                    </a>
                </div>
                <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13 text-3xl">
                    <FaFacebook></FaFacebook>
                    <FaGithub></FaGithub>
                    <FaTwitter></FaTwitter>
                </div>
            </div>
        </div>
    );
};

export default FooterEnd;