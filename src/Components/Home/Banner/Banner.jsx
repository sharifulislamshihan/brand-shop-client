// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const images = [
    {
        id: 1,
        imgUrl: 'https://i.ibb.co/Ht2KryD/phono-slider-1.png',
        heading1: 'Helio Black Edition',
        heading2: 'CURVY WITH DUEL AUDIO',
        buttonText: 'SHOP NOW',
        position: 'right'
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/yNPR5Pn/phono-slider-2.png',
        heading1: '4K DISPLAY',
        heading2: 'EXCLUSIVE PLATINUM FRAME',
        buttonText: 'BUY NOW',
        position: 'left'
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/qksd1m7/phono-slider-3.png',
        heading1: 'SNAPDRAGON PROCESSOR',
        heading2: 'FULL SCREEN CURVE DISPLAY',
        buttonText: 'BUY NOW',
        position: 'right'
    }
];

const Banner = () => {



    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="relative"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image.id}>
                            <div className='relative'>
                                <img src={image.imgUrl} alt={`Slide No: ${image.id}hidden md:visible`} />
                            </div>
                            <div
                                className={`absolute p-4 ${image.position === 'left' ? 'mx-auto md:right-96' : ' mx-auto md:left-96'
                                    } top-1/2 transform -translate-y-1/2 `}
                            >
                                <div className='mx-2'>
                                    <h2 className={`text-sm md:text-xl lg:text-4xl font-paragraph ${image.position === 'left' ? 'text-black' : 'text-white'} font-bold mb-4`}>{image.heading1}</h2>
                                    <h2 className={`text-base md:text-5xl lg:text-7xl font-heading ${image.position === 'left' ? 'text-black' : 'text-white'} font-bold mb-4`}>{image.heading2}</h2>
                                </div>

                                <button className={` ${image.position === 'left' ? 'text-black bg-white border border-black' : 'text-white bg-black border border-white'} rounded-full text-sm md:text-lg lg:text-xl py-2 md:py-3 px-5 md:px-7 hover:bg-red-600 hover:border-red-500`}>
                                    {image.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    )
                    )
                }

            </Swiper>
        </div>
    );
};

export default Banner;