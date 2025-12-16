import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary min-h-[85vh] flex items-center px-6 md:px-16 rounded-3xl overflow-hidden mt-6">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://i.ibb.co/0mGNj2c/garments-hero.jpg"
            alt="Garments Production"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 max-w-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Track Your Garments <span className="text-yellow-300">Production</span> Smartly
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            A complete garments order & production tracking system designed to simplify workflow, increase efficiency, and ensure timely delivery.
          </p>
          <Link
            to="/all-products"
            className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all text-lg"
          >
            View Products <FaArrowRight />
          </Link>
        </motion.div>
      </div>
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
