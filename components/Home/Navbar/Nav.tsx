"use client";
import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import Link from 'next/link';
import { Navlinks } from '../../../constant/constant';
import { BiDownload } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`transition-all ${
      navBg ? 'bg-[#0f142ed9] shadow-md': 'fixed'
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className='flex justify-between items-center h-full w-[90%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
            Samuel
          </h1>
        </div>
        {/* navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </a>
            );
          })}
        </div>
        {/* buttons */}
          <div className='flex items-center space-x-4'>
            {/* CV button */}
            <a
              href="/Samuel_Kodi_CV.pdf"
              download
              className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 
                transition-all duration-300 text-white flex items-center space-x-2"
            >
              <BiDownload className='w-5 h-5' />
              <span>Download CV</span>
            </a>
            {/* burger menu */}
            <HiBars3BottomRight 
            onClick={openNav} 
            className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
      </div>
    </div>
  );
};

export default Nav;