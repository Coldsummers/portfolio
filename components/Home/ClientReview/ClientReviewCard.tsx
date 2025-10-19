import React from "react";
import Image from "next/image";

type Props ={
    name: string,
    image: string,
    role: string,
    review: string,
}

const ClientReviewCard = ({image, name, role, review}: Props) => {
  return <div className="m-2">
    <Image
      src={image}
      alt={name}
      width={80}
      height={80}
      className="w-20 h-20 object-cover rounded-full"
    />
    <p className="mt-6 text-base text-gray-200 font-medium">
      &quot; {review} &quot;
    </p>
    <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
    <p className="mt-1 text-white">{role}</p>
  </div>;
};

export default ClientReviewCard;
