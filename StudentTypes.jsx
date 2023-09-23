import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Images/Logo.jpg";
import Type1 from "./Images/type1.jpg";
import Type2 from "./Images/type2.jpg";
import Type3 from "./Images/type3.jpg";
import Type4 from "./Images/type4.jpg";

export default function StudentTypes() {
  return (
    <div>
        <div className="flex bg-blue-300 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer">About Us</Link>
          <Link to="/Scholarships" className="text-3xl font-serif py-[40px] cursor-pointer">Scholarships</Link>
        </div>
        <div className="flex justify-center gap-40">
            <div className="h-[250px] w-[350px] bg-blue-200 mt-[40px] rounded-md shadow-xl">
                <div className="w-auto h-[30px] bg-pink-600 text-white mt-[20px] text-center font-serif py-[1px]">
                    Type 1
                </div>
                <img src={Type1} className="h-[120px] w-[120px] m-auto " />
                <div className="text-md font-serif text-center p-[2px] mt-[10px]">
                    I am completely lost about what I am interested in as of now
                </div>
            </div>
            <div className="h-[250px] w-[350px] bg-purple-200 mt-[40px] rounded-md shadow-xl">
                <div className="w-auto h-[30px] bg-pink-600 text-white mt-[20px] text-center font-serif py-[1px]">
                    Type 2
                </div>
                <img src={Type2} className="h-[120px] w-[120px] m-auto " />
                <div className="text-md font-serif text-center p-[2px] mt-[10px]">
                    Interested in a few subject combinations but not really sure abut whether it's my calling
                </div>
            </div>
        </div>
        <div className="flex justify-center gap-40">
            <div className="h-[250px] w-[350px] bg-purple-200 mt-[40px] rounded-md shadow-xl">
                <div className="w-auto h-[30px] bg-pink-600 text-white mt-[20px] text-center font-serif py-[1px]">
                    Type 3
                </div>
                <img src={Type3} className="h-[120px] w-[120px] m-auto " />
                <div className="text-md font-serif text-center p-[2px] mt-[10px]">
                    I am fairly sure about which subjects I want to take up but I have my doubts
                </div>
            </div>
            <div className="h-[250px] w-[350px] bg-blue-200 mt-[40px] rounded-md shadow-xl">
                <div className="w-auto h-[30px] bg-pink-600 text-white mt-[20px] text-center font-serif py-[1px]">
                    Type 4
                </div>
                <img src={Type4} className="h-[120px] w-[120px] m-auto " />
                <div className="text-md font-serif text-center p-[2px] mt-[10px]">
                    Feeling pressured by friends or family? Feeling low?
                </div>
            </div>
        </div>
    </div>
  )
}
