import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HeroSlider = () => {
    return (
                <Swiper spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }} navigation={false} modules={[Autoplay, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[400px] xl:h-[500px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/M5ZGBLkh/Banner3.webp')" }}>
                        <div className="flex items-center justify-center bg-black/70 h-full">
                            <div className="text-center text-white">
                                <h1 className="text-3xl lg:text-5xl font-bold">Explore a World of Fun!</h1>
                                <p className="mt-4 text-lg">Discover the best toys for your kids.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[400px] xl:h-[500px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/KcG382tG/Banner2.webp')" }}>
                        <div className="flex items-center justify-center h-full bg-black/70">
                            <div className="text-center text-white">
                                <h1 className="text-3xl lg:text-5xl font-bold">New Arrivals Daily</h1>
                                <p className="mt-4 text-lg">Find unique and educational toys.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[400px] xl:h-[500px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/8nqvWFbZ/Banner1.webp')" }}>
                        <div className="flex items-center justify-center h-full bg-black/70">
                            <div className="text-center text-white">
                                <h1 className="text-3xl lg:text-5xl font-bold">Support Local Sellers</h1>
                                <p className="mt-4 text-lg">Shop from the best local toy stores.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    );
};

export default HeroSlider;