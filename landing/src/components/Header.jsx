import React from 'react';
import Agency from '../logos/Agency.svg';
import Line from '../logos/Line.svg';
import Settings from '../logos/Settings.svg';

function Header() {
  return (
    <div className="flex"> 
      <img alt="logo" className=" w-[137px] h-[50px] p-[2px] p-[0px] p-[1px] p-[2px] justify-center items-center flex-shrink-0 ml-[112px] mt-[25px] mr-[64px]" src={Agency} />
      <p className="text-reg-blue font-roboto text-lg font-medium mt-[35px]">Services</p>
      <p className="mt-[35px] ml-[50px]">Our Values</p>
      <p className="mt-[35px] ml-[50px]">Case Studies</p>
      <p className="mt-[35px] ml-[50px]">Blog</p>
      <p className="mt-[35px] ml-[50px]">Inner Pages</p>
      <p className="text-gray-700 font-roboto text-base font-medium uppercase ml-[77px] mt-[35px]">LOGIN</p>
      <button className=" text-white text-center font-roboto text-base font-extra small bold uppercase w-[90px] h-[30px] flex-shrink-0 rounded-lg bg-reg-blue ml-[32px] mt-[32px]">Register</button>
      <img alt="line" className="ml-[29px] mt-[35px] w-[5px] h-[28px] " src={Line} />
      <img alt="settings" className=" mt-[36px] w-[29px] h-[26px] ml-[27px] " src={Settings} />
    </div>
  );
}

export default Header;



