import React from 'react';
// import reviewImg from '../../../assets/feature-icon/24 hour suport1.png'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import reviewImage from '../../../assets/reviw/download (1).jfif'
import reviewImage1 from '../../../assets/reviw/download (2).jfif'
import reviewImage2 from '../../../assets/reviw/download (3).jfif'
import reviewImage3 from '../../../assets/reviw/download (4).jfif'
import reviewImage4 from '../../../assets/reviw/download (5).jfif'
import reviewImage5 from '../../../assets/reviw/download.jfif'
import reviewImage6 from '../../../assets/reviw/images (1).jfif'
import reviewImage7 from '../../../assets/reviw/images.jfif'


const Testimoniyal = () => {
    const data = [
        {
            "name": "TechLine Solutions",
            "description": "AssetVerse has automated our entire asset management workflow. Tracking company assets is now faster and more accurate.",
            "date": "2025-01-12",
            "image": reviewImage,
        },
        {
            "name": "GreenLeaf Corporation",
            "description": "The employee management feature has increased our HR team's efficiency by nearly 40%. The interface is very user-friendly.",
            "date": "2025-02-05",
            "image": reviewImage1,
        },
        {
            "name": "NovaTech Digital",
            "description": "Real-time analytics has drastically improved our decision-making. The reporting system is outstanding.",
            "date": "2025-02-25",
            "image": reviewImage2,
        },
        {
            "name": "BlueWave Enterprises",
            "description": "24/7 support is extremely responsive. Any issue is resolved instantly. Highly recommended.",
            "date": "2025-03-01",
            "image": reviewImage3
        },
        {
            "name": "Prime Logistics Ltd.",
            "description": "The cloud backup system keeps all our data secure. No worries about data loss. Excellent safety features.",
            "date": "2025-03-10",
            "image": reviewImage4
        },
        {
            "name": "UltraSoft IT",
            "description": "Our entire asset lifecycle is now automated. The dashboard is smooth, modern, and easy to understand.",
            "date": "2025-03-15",
            "image": reviewImage5
        },
        {
            "name": "SkyBridge Ventures",
            "description": "The user access control system is excellent. Overall team productivity has noticeably improved.",
            "date": "2025-03-25",
            "image": reviewImage6
        },
        {
            "name": "FutureLink Telecom",
            "description": "Asset tracking has never been this simple. Real-time alerts help us monitor everything instantly.",
            "date": "2025-04-02",
            "image": reviewImage7
        },

    ]



    return (
        <div className='max-w-5xl mx-auto'>
            <div className='py-10'>
                <h1 className='header text-center'>What Our Clients Say</h1>
                <p className='des text-center'>Real feedback from companies who trust our platform to manage and secure their assets</p>
            </div>
            <div className='pb-20'>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        scale: 0.75,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        data.map((review, inx) => (
                            <SwiperSlide>
                                <div key={review.inx} className="card bg-base-100 w-96 shadow-sm">
                                    <figure>
                                        <img
                                            src={review.image}
                                            alt="image" className='w-50 h-50 rounded-full p-2' />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Company Name: {review.name}</h2>
                                        <p>{review.description}</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                </Swiper>
            </div>

        </div >
    );
};

export default Testimoniyal;