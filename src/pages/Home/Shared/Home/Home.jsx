import React from 'react';
import Hero from './Hero';
// import ProductsGrid from './ProductsGrid';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import ProductCard from './ProductCard';

const Home = () => {
    return (
        <div>
         <Hero />
{/* <ProductsGrid /> */}
<HowItWorks />
<ProductCard></ProductCard>
<Testimonials />
<ExtraSection1 />
<ExtraSection2 />   
        </div>
    );
};

export default Home;