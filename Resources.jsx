import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Images/Logo.jpg";
import Resource from "./Images/resouce.jpg";
import Bullet from "./Images/bullet.jpg";
import Ques1 from "./Images/ques1.jpg";
import Ques2 from "./Images/ques2.jpg";
import Ques3 from "./Images/ques3.jpg";
import Ques4 from "./Images/ques4.jpg";
import Ques5 from "./Images/ques5.jpg";

export default function Resources() {
  return (
    <div>
      <div className="flex bg-blue-300 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer">About Us</Link>
          <Link to="/Scholarships" className="text-3xl font-serif py-[40px] cursor-pointer">Scholarships</Link>
        </div>
        <div className="text-3xl font-sans mt-[20px] text-center font-bold">
          Best time to take a career test is after 10th before you've chosen your career!
        </div>
        <img src={Resource} alt="error" className="m-auto" />
        <div className="text-3xl font-sans mt-[20px] text-center font-bold">
          What is an aptitude test?
        </div>
        <div className="h-[150px] w-[700px] bg-slate-600 m-auto rounded-md mt-[20px] text-xl p-[15px] text-white text-justify">
          An aptitude test is conducted to test a person's ability and reasoning skills. An aptitude test assesses your ability to reason and learn new skills. In addition, it helps to evaluate the candidates as to how they would perform with the knowledge and skills they have.
        </div>
        <div className="text-3xl font-sans mt-[20px] text-center font-bold">
          Tips to prepare for aptitude test
        </div>
        <div className="flex mt-[40px]">
          <img src={Bullet} alt="error" className="ml-[300px]" />
          <div className="text-2xl font-serif ml-[40px]">
            Practising for the aptitude tests will matter and make a difference.
          </div>
        </div>
        <div className="flex mt-[10px]">
          <img src={Bullet} alt="error" className="ml-[300px]" />
          <div className="text-2xl font-serif ml-[40px]">
            Practice questions that you struggle with. Focusing on your vulnerable areas is a good idea.
          </div>
        </div>
        <div className="flex mt-[10px]">
          <img src={Bullet} alt="error" className="ml-[300px]" />
          <div className="text-2xl font-serif ml-[40px]">
            Eliminate distractions and concentrate.
          </div>
        </div>
        <div className="flex mt-[10px]">
          <img src={Bullet} alt="error" className="ml-[300px]" />
          <div className="text-2xl font-serif ml-[40px]">
            Manage your time effectively.
          </div>
        </div>
        <div className="flex mt-[10px]">
          <img src={Bullet} alt="error" className="ml-[300px]" />
          <div className="text-2xl font-serif ml-[40px]">
            Preventing anxiety- take one step at a time and be calm and composed.
          </div>
        </div>
        <div className="text-3xl font-sans mt-[20px] text-center font-bold">
          Sample Aptitude Questions
        </div>
        <img src={Ques1} alt="error" className="ml-[40px]" />
        <img src={Ques2} alt="error" className="ml-[40px]" />
        <img src={Ques3} alt="error" className="ml-[40px]" />
        <img src={Ques4} alt="error" className="ml-[40px]" />
        <img src={Ques5} alt="error" className="ml-[40px]" />
    </div>
  )
}
