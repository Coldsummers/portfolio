import React from "react";
import Image from "next/image";
type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="flex flex-col items-center bg-[#181834] rounded-xl p-8 border border-[#23235b] hover:border-cyan-400 transition-all duration-300">
      <Image src={icon} alt="img" width={60} height={60} className="mb-4" />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200 text-center">
        {name}
      </h1>
      <p className="text-center text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
