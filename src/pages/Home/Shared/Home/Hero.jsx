import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Track Your Garments",
    highlight: "Production",
    desc: "A complete garments order & production tracking system designed to simplify workflow.",
    img: "https://i.ibb.co.com/ZRPyqnG7/download-33.jpg",
  },
  {
    title: "Manage Orders",
    highlight: "Smartly",
    desc: "Monitor orders, factories, and shipment status in real-time from one dashboard.",
    img: "https://i.ibb.co.com/mCkT9sdV/Tahsin-Profile-Fiverr.jpg",
  },
  {
    title: "Ensure Timely",
    highlight: "Delivery",
     desc: "Monitor orders, factories, and shipment status in real-time from one dashboard.",
    img: "https://i.ibb.co.com/20BwDK4j/Cdiscount.jpg",
  },
];

const Hero = () => {
  return (
    <section className="relative  overflow-hidden ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className="min-h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-r from-primary to-secondary min-h-[85vh] flex items-center px-6 md:px-16 relative overflow-hidden">
              
              {/* Decorative blobs */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

              <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 z-10">
                
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full max-w-xl  overflow-hidden shadow-2xl"
                >
                  <img
                    src={slide.img}
                    alt="Hero Slide"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-lg flex flex-col gap-6"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    {slide.title}{" "}
                    <span className="text-yellow-300">{slide.highlight}</span>
                  </h1>

                  <p className="text-white/90 text-lg md:text-xl">
                    {slide.desc}
                  </p>

                  <Link
                    to="/all-products"
                    className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all text-lg w-fit"
                  >
                    View Products <FaArrowRight />
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import bannerImg1 from '../../../assets/banner/banner1.png'
// import bannerImg2 from '../../../assets/banner/banner2.png'
// import bannerImg3 from '../../../assets/banner/banner3.png'

// const Banner = () => {
//     return (
//         <Carousel autoPlay={true}
//         infiniteLoop={true}
//         >
//                 <div>
//                     <img src={bannerImg1} />
                  
//                 </div>
//                 <div>
//                     <img src={bannerImg2} />
                   
//                 </div>
//                 <div>
//                     <img src={bannerImg3} />
                    
//                 </div>
//             </Carousel>
//     );
// };

// export default Banner;
