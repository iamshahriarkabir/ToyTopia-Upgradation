import React from 'react';

import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';

const TopBrands = () => {
    return (
        <div className="my-16 px-4 container mx-auto" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center mt-20">Our Top Brands</h2>
                <Marquee className='gap-12'>
                <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap py-10">
                    <img src="https://i.ibb.co.com/kgd01xHW/brand1.jpg" alt="TOY TOWN" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/KxwwqCvz/brand2.webp" alt="Hot Wheels" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/b5PXsJBW/brand3.jpg" alt="TOY SHOP" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/sdyD4y4F/brand4.png" alt="TOY STARS" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/kgd01xHW/brand1.jpg" alt="TOY TOWN" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/KxwwqCvz/brand2.webp" alt="Hot Wheels" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/b5PXsJBW/brand3.jpg" alt="TOY SHOP" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    <img src="https://i.ibb.co.com/sdyD4y4F/brand4.png" alt="TOY STARS" className="w-16 lg:w-32 border border-gray-200 rounded-full object-cover hover:shadow-xl"/>
                    
                </div>
            </Marquee>


        </div>
    );
};

export default TopBrands;