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
        imgUrl: 'https://i.ibb.co/J2885Zc/oppo-1.jpg',
    },
    {
        id: 2,
        imgUrl: 'https://i.ibb.co/KLHyXxc/oppo-2.jpg',
    },
    {
        id: 3,
        imgUrl: 'https://i.ibb.co/zmMQRgr/oppo-4.jpg',
    },
    {
        id: 4,
        imgUrl: 'https://i.ibb.co/L6hh5CB/oppo-3.jpg',
    },
    
];

const OppoSlider = () => {
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

export default OppoSlider;