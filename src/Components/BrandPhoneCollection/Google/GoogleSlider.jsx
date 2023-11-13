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
        imgUrl: 'https://i.ibb.co/sWrngpV/Pixel-1.jpg',
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/hss7RNj/Pixel-2.jpg',
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/0hK7z5X/Pixel-3.jpg',
    },
    {
        id: 4,
        imgUrl: 'https://i.ibb.co/09CMh1J/pixel-4.jpg',
    },
    
];


const GoogleSlider = () => {
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

export default GoogleSlider;