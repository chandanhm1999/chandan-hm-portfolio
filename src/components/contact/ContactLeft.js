import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Chandan HM</h3>
                <p className="text-lg font-normal text-yellow-400">
                    Front End Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    I'm intrested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the Contact form.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+91 8105114625</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">chandanchanduhm4@gamil.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont text-yellow-300 mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft