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
        imgUrl: 'https://i.ibb.co/Nr4SWpX/Apple-i-Phone-slider1.jpg',
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/1GzmfsL/apple-i-Phone-slider2.png',
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/9nRrLzN/i-Phone-XR-ad.jpg',
    },
    {
        id: 4,
        imgUrl: 'https://i.ibb.co/k59qvRN/Apple-iphone-slider4.jpg',
    },
    
];

const SonySlider = () => {
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
                                <img src={image.imgUrl} alt={`Slide No: ${image.id}`} />
                            </div>
                            
                        </SwiperSlide>
                    )
                    )
                }

            </Swiper>
        </div>
    );
};

export default SonySlider;