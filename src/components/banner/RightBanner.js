import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <>
            <div className="w-1/2 flex justify-center items-center">
                <img
                    className='w-[500px] h-[610px] z-10'
                    src={bannerImg}
                    alt="bannerImg"
                />
                <div className="absolute bottom-0 w-[250px] h-[200px] lgl:w-[400px] lgl:h-[420px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </>
    )
}

export default RightBanner
