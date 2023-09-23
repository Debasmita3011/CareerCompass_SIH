import React from 'react';
import { useState, useEffect } from "react";
import Tick from "./Images/tick.gif";
import { useNavigate } from 'react-router-dom';
import Signup from "./Images/signup.jpg";
import { useAuth0 } from '@auth0/auth0-react'; 

export default function Register() {
    //const { user, loginWithRedirect } = useAuth0();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const { loginWithRedirect } = useAuth0();
    const handleSubmit = () => {
        if (name && email) {
            setSuccess(true);
        }
    }
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name]);
    return (
        <>
            {success ? (
                <div>
                    <img src={Tick} className="h-[150px] w-[150px] m-auto mt-[100px]" />
                    <div className="text-2xl text-green-600 font-serif text-center mt-[50px]">
                        You have successfully registered!
                    </div>
                    <div className="h-[40px] w-[180px] bg-pink-600 text-center text-lg font-serif m-auto rounded-md text-white py-[5px] cursor-pointer mt-[40px]" onClick={handleClick}>
                        Go to home page
                    </div>
                </div>
            ) : (
                <div>
                    <div className="h-screen flex justify-center">
                        <div>
                            <img src={Signup} alt="error" className="h-[600px] w-[400px] rounded-xl mt-[40px] m-auto" />
                        </div>
                        <div className="h-[560px] w-[400px] bg-violet-400 justify-center flex-col rounded-xl mt-[60px]">
                            <div className="flex-col">
                                <div className="text-xl font-serif py-[10px] px-[20px] mt-[100px]">Student's Name</div>
                                <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Eg: John" className="h-[30px] w-[355px] border-2 border-gray-400 ml-[20px] rounded-sm p-2 hover:border-orange-300"></input>
                            </div>
                            <div className="flex-col mt-[20px]">
                                <div className="text-xl font-serif py-[10px] px-[20px] mt-[50px]">Email id</div>
                                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" className="h-[30px] w-[355px] border-2 border-gray-400 ml-[20px] rounded-sm p-2 hover:border-orange-300"></input>
                            </div>
                            <div className="flex justify-center gap-1 mt-[50px]">
                                <div className="w-[100px] h-[40px] mt-[40px] bg-yellow-200 m-auto text-center py-[5px] rounded-md text-xl font-serif cursor-pointer hover:bg-pink-400" onClick={handleSubmit}>
                                    Register
                                </div>
                                <div className="w-[180px] h-[40px] mt-[40px] bg-yellow-200 m-auto text-center py-[5px] rounded-md text-xl font-serif cursor-pointer hover:bg-pink-400" onClick={(e) => loginWithRedirect()}>
                                    Login with Google
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
