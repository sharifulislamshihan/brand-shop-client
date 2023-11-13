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
        imgUrl: 'https://i.ibb.co/MCV8VgY/Samsung-1.png',
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/c2kgrWc/Samsung-2.png',
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/cJVhpL1/samsung-3.png',
    },
    {
        id: 4,
        imgUrl: 'https://i.ibb.co/JnwGmbc/samsung-4.jpg',
    },
    
];

const SamsungSlider = () => {
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

export default SamsungSlider;