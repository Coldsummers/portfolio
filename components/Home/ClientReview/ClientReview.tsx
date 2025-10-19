"use client"

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const ClientReview = () => {
  return <div className="pt-16 pb-16">
    <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind words from satisfied <br />
        <span className="text-cyan-200">clients</span>
    </h1>
    <div className="mt-16 w-[70%] mx-auto">
        <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
        >
            <ClientReviewCard 
                image="/images/c1.JPG" 
                name="Araba Eshun" 
                role="Business Analyst"
                review="Samuel's attention to detail and ability to deliver robust web solutions made our project a success. Highly recommended!"
            />
            <ClientReviewCard 
                image="/images/c2.JPG" 
                name="Gideon Barko" 
                role="UI/UX Designer"
                review="Working with Samuel was seamless—his frontend skills and creative ideas brought our designs to life beautifully."
            />
            <ClientReviewCard 
                image="/images/c3.jpg" 
                name="Obed Buabeng" 
                role="Criminal Law Expert"
                review="Samuel built a secure and user-friendly platform for our firm. His professionalism and expertise are unmatched."
            />
            <ClientReviewCard 
                image="/images/c4.JPG" 
                name="Julius Kumadey" 
                role="Web Developer"
                review="Samuel's code quality and problem-solving skills are top-notch. He always delivers on time and exceeds expectations."
            />
            <ClientReviewCard 
                image="/images/c5.png" 
                name="Jora Adjei" 
                role="CEO, Design Studio"
                review="Samuel is a reliable developer who understands both business and technical needs. Our collaboration was outstanding!"
            />
        </Carousel>;
    </div>
  </div>;
};

export default ClientReview;
