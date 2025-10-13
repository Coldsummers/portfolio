import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-5xl font-bold text-white">
        Collaboration with designers <br />
        to create visually appealing <br />
        and user-friendly interfaces
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <ServiceCard icon="/images/s1.png" name="UI and UX" description="Designing user interfaces that are both functional and aesthetically pleasing." />
        <ServiceCard icon="/images/s2.png" name="Web Development" description="Building responsive and performant websites using the latest technologies." />
        <ServiceCard icon="/images/s3.png" name="Mobile App Development" description="Creating user-friendly mobile applications for iOS and Android." />
        <ServiceCard icon="/images/s4.png" name="Graphic Design" description="Designing visually appealing graphics for various digital platforms." />
      </div>
    </div>
  );
};

export default Services;
