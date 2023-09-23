import React from 'react';
import Logo from "./Images/Logo.jpg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Excellent from "./Images/Excellent.jpg";
import Good from "./Images/good.jpg";
import Fair from "./Images/Fair.jpg";
import Bad from "./Images/bad.jpg";
import FeedBackTick from "./Images/feedbackTick.jpg";
import { useNavigate } from 'react-router-dom';

export default function FeedBack() {
    const [success, setSuccess] = useState(false);
    const [em_value, setEmValue] = useState('')
    const [nm_value, setNmValue] = useState('')
    const [checked_val, setCheckBoxChecked] = useState("");

    const navigate = useNavigate();
      
        function handleClick() {
          navigate("/home");
        }

        function handleSubmission() {
            navigate("/Submissions");
          }

        const handleSubmit = () => {
            if(em_value && nm_value && checked_val)
            {
                setSuccess(true);   
            }
        }
  return (
    <>
    {success ? (
        <div>
            <img src={FeedBackTick} className="h-[150px] w-[150px] m-auto mt-[100px]" />
            <div className="text-2xl text-green-600 font-serif text-center mt-[50px]">
                Thank you for your valuable feedback!
            </div>
            <div className="flex justify-center gap-10">
                <div className="h-[40px] w-[180px] bg-pink-600 text-center text-lg font-serif rounded-md text-white py-[5px]     cursor-pointer mt-[40px]" onClick={handleClick}>
                    Go to home page
                </div>
                <div className="h-[40px] w-[180px] bg-pink-600 text-center text-lg font-serif rounded-md text-white py-[5px]     cursor-pointer mt-[40px]" onClick={handleSubmission}>
                    Other Feedbacks
                </div>
            </div>
        </div>
    ) : (
    <div>
        <div className="flex bg-blue-300 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer">About Us</Link>
        </div>
        <div className="text-4xl font-serif text-center mt-[30px]">
            Your feedback helps us to improve!
        </div>
        <div className="h-[500px] w-[1000px] m-auto bg-pink-200 rounded-md mt-[20px]">
            <div className="flex justify-center gap-20">
                <div className="flex-col">
                    <p className="mt-[40px] ml-[40px] font-serif text-xl">Name</p>
                    <input type="text" id="name" onChange={(e) => setNmValue(e.target.value)} placeholder="Eg: John" className="h-[30px] w-[355px] border-2 border-gray-400 rounded-sm p-2 mt-[20px]" />
                </div>
                <div className="flex-col">
                    <p className="mt-[40px] ml-[40px] font-serif text-xl">Email Id</p>
                    <input type="text" id="email" onChange={(e) => setEmValue(e.target.value)} placeholder="abc@gmail.com" className="h-[30px] w-[355px] border-2 border-gray-400 rounded-sm p-2 mt-[20px]" />
                </div>
            </div>
            <div className="text-2xl font-serif text-center mt-[40px]">
                Please rate your experience
            </div>
            <div className="flex justify-center gap-20 mt-[20px]">
                <div className="flex-col">
                    <img src={Excellent} alt="error" className="w-[70px] h-[70px] rounded-full" />
                    <div className="flex justify-center gap-3 mt-[10px]">
                        <p>Excellent</p>
                        <input type="checkbox" value="excellent" onChange={(e) => setCheckBoxChecked("Excellent")} />
                    </div>
                </div>
                <div className="flex-col">
                    <img src={Good} alt="error" className="w-[70px] h-[70px] rounded-full" />
                    <div className="flex justify-center gap-3 mt-[10px]">
                        <p>Good</p>
                        <input type="checkbox" value="good" onChange={(e) => setCheckBoxChecked("Good")} />
                    </div>
                </div>
                <div className="flex-col">
                    <img src={Fair} alt="error" className="w-[70px] h-[70px] rounded-full" />
                    <div className="flex justify-center gap-3 mt-[10px]">
                        <p>Fair</p>
                        <input type="checkbox" value="fair" onChange={(e) => setCheckBoxChecked("Fair")} />
                    </div>
                </div>
                <div className="flex-col">
                    <img src={Bad} alt="error" className="w-[70px] h-[70px] rounded-full" />
                    <div className="flex justify-center gap-3 mt-[10px]">
                        <p>Bad</p>
                        <input type="checkbox" value="bad" onChange={(e) => setCheckBoxChecked("Bad")} />
                    </div>
                </div>
            </div>
            <div className="w-[180px] h-[40px] mt-[70px] bg-purple-800 m-auto text-center py-[5px] rounded-md text-xl font-serif cursor-pointer text-white" onClick={handleSubmit}>
                    Submit
            </div>
        </div>
    </div>
    )}
    </>
  )
}
