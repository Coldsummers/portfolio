import React from "react";
import { IconType } from "react-icons";

type Props = {
    role: string;
    icon: IconType;
    date?: string;
};

const ResumeCard = ({Icon, role, date}: Props) => {
  return <div className="mb-8">
    <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex-items-center justify-center flec-col">
            <Icon  className="sm:w-8 sm:h-8 w-6 h-6 text-white"/>
        </div>
    </div>
  </div>;
};

export default ResumeCard;
