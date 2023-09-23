import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Images/Logo.jpg";
import About from "./Images/about.jpg";
import Vision from "./Images/vision.jpg";
import Principles from "./Images/principles.jpg";
import Team from "./Images/team.jpg";

export default function Aboutus() {
  return (
    <div>
        <div className="flex bg-blue-300 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">About Us</Link>
          <Link to="/Scholarships" className="text-3xl font-serif py-[40px] cursor-pointer">Scholarships</Link>
        </div>
        <div className="text-3xl font-serif mt-[20px] text-center">
            CareerCompass takes you to a better future!
        </div>
        <img src={About} alt="error" className="h-[500px] w-[900px] m-auto" />
        <div className="mt-[20px] text-3xl font-serif text-center">
            Our Vision
        </div>
        <div className="flex justify-center gap-20 mt-[20px]">
            <img src={Vision} alt="error" className="h-[300px] w-[300px]" />
            <div className="h-[200px] w-[400px] bg-pink-600 mt-[50px] rounded-md shadow-xl text-white">
                <div className="text-xl p-[25px] text-justify font-serif">
                    We empower individuals to make informed and fulfiling career choices throughout their lives. Our system aims to identify one's skills and recommends desired career choices.
                </div>
            </div>
        </div>
        <div className="mt-[20px] text-3xl font-serif text-center">
            Our Principles
        </div>
        <div className="flex justify-center gap-20 mt-[20px]">
            <img src={Principles} alt="error" className="h-[300px] w-[300px]" />
            <div className="h-[200px] w-[430px] bg-slate-600 mt-[50px] rounded-md shadow-xl text-white">
                <div className="text-xl p-[15px] text-justify font-serif">
                    The system assesses an individual's interests, inclination and personality traits to provide personalized career recommendations. Offers a wide range of career exploration tools including self-assessment quizzes and councellor recommendations.
                </div>
            </div>
        </div>
        <div className="mt-[20px] text-3xl font-serif text-center">
            Our Team
        </div>
        <div className="flex justify-center gap-20 mt-[20px]">
            <img src={Team} alt="error" className="h-[300px] w-[300px]" />
            <div className="h-[200px] w-[400px] bg-blue-600 mt-[50px] rounded-md shadow-xl text-white">
                <div className="text-xl p-[25px] text-justify font-serif">
                    We support a cross-departmental team inclusive of Electrical, Electronics and Computer Science majors. We expertise in Machine Learning, Data Science, Web and App development.
                </div>
            </div>
        </div>
    </div>
  )
}
