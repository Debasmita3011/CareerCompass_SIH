import React from 'react';
import Back from "./Images/background.jpg";
import Logo from "./Images/Logo.jpg";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Carousal from "./Carousal";
import Component from "./Component";

export default function Home() {
  const [username, setUsername] = useState([]);
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name) {
     setUsername(name);
    }
  }, []);

  const navigate = useNavigate();
      
        function handleFeedback() {
          navigate("/Feedback");
        }

  return (
    <div className="max-h-[110vh]">
        <div className="flex bg-violet-400 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer">About Us</Link>
          <Link to="/Scholarships" className="text-3xl font-serif py-[40px] cursor-pointer">Scholarships</Link>
        </div>
        <div className="text-4xl font-serif text-center mt-[30px]">
          Welcome {username}! How can we help you?
        </div>
        <div className="w-[200px] h-[40px] mt-[20px] bg-pink-600 text-white font-serif rounded-md m-auto text-center py-[5px] cursor-pointer hover:scale-150">
          <a href="https://priyadarshan-coder.github.io/CareerCompass/">Predict My Career</a>
        </div>
        {/* <img src={Back} className="w-[600px] h-[400px] m-auto" /> */}
        <Carousal />
        <div className="flex justify-center gap-20">
          <div className="w-[200px] h-[40px] mt-[20px] bg-pink-600 text-white hover:scale-150 font-serif rounded-md text-center py-[5px] cursor-pointer" onClick={handleFeedback}>
              My Feedback
          </div>
          <div className="w-[200px] h-[40px] mt-[20px] bg-pink-600 text-white font-serif hover:scale-150 rounded-md text-center py-[5px] cursor-pointer">
            <a href="https://calendly.com/abhibhab2001/30min">
                Schedule Appointment
            </a>
          </div>
        </div>
        {/* <Component /> */}
    </div>
  )
}
