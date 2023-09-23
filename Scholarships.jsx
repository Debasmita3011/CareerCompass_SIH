import React from 'react';
import Scholar from "./Images/scholar.jpeg";
import Logo from "./Images/Logo.jpg";
import { Link } from 'react-router-dom';

export default function Scholarships() {
    const scholarships = [
        {
          name: 'National Scholarship Portal (NSP)',
          link: 'https://scholarships.gov.in/',
        },
        {
          name: 'Post Matric Scholarship for SC/ST Students',
          link: 'https://scholarships.gov.in/',
        },
        {
          name: 'Central Sector Scholarship Scheme for College and University Students',
          link: 'https://scholarships.gov.in/',
        },
        {
          name: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
          link: 'https://scholarships.gov.in/',
        },
        {
          name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
          link: 'https://kvpy.iisc.ac.in/main/index.htm',
        },
        {
          name: 'Indian Oil Academic Scholarships',
          link: 'https://www.iocl.com/PeopleCareers/Scholarships.aspx',
        },
        {
          name: 'Ramanujan Fellowship by SERB (Science and Engineering Research Board)',
          link: 'https://www.serbonline.in/SERB/HomePage.do',
        },
        {
          name: 'Tata Trusts Scholarships',
          link: 'https://www.tatatrusts.org/',
        },
        {
          name: 'LIC Golden Jubilee Scholarship Scheme',
          link: 'https://www.licindia.in/Home/scholarship',
        },
        {
          name: 'Dr. Abdul Kalam Scholarship for Meritorious Students',
          link: 'https://abdulkalam.com/',
        },
      ];
  return (
    <div>
        <div className="flex bg-violet-400 justify-around">
          <img src={Logo} className="h-[120px] w-[120px] rounded-full" />
          <Link to="/Home" className="text-3xl font-serif py-[40px] cursor-pointer">Home</Link>
          <Link to="/Resources" className="text-3xl font-serif py-[40px] cursor-pointer">Resources</Link>
          <Link to="/StudentTypes" className="text-3xl font-serif py-[40px] cursor-pointer">Student Types</Link>
          <Link to="/AboutUs" className="text-3xl font-serif py-[40px] cursor-pointer">About Us</Link>
          <Link to="/Scholarships" className="text-3xl font-serif py-[40px] cursor-pointer text-pink-600">Scholarships</Link>
        </div>
        <div>
            <img src={Scholar} alt="error" className="w-full h-[620px] opacity-50" />
        </div>
        <div className="flex-col mt-[-550px]">
            <div className="flex justify-center gap-10">
              <div className="text-2xl font-serif font-bold">
                National Scholarship Portal (NSP):
              </div>
              <div className="text-xl font-serif ml-[10px]">
                <a href="https://scholarships.gov.in/">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-[40px]">
              <div className="text-2xl font-serif font-bold">
                Post Matric Scholarship for SC/ST Students:
              </div>
              <div>
                <a href="https://scholarships.gov.in/" className="text-xl font-serif ml-[10px] cursor-pointer">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-[40px]">
              <div className="text-2xl font-serif font-bold">
                Kishore Vaigyanik Protsahan Yojana (KVPY):
              </div>
              <div>
                <a href="https://kvpy.iisc.ac.in/main/index.htm" className="text-xl font-serif ml-[10px] cursor-pointer">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-[40px]">
              <div className="text-2xl font-serif font-bold">
                Indian Oil Academic Scholarships:
              </div>
              <div>
                <a href=" https://www.iocl.com/PeopleCareers/Scholarships.aspx" className="text-xl font-serif ml-[10px] cursor-pointer">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-[40px]">
              <div className="text-2xl font-serif font-bold">
                Tata Trusts Scholarships:
              </div>
              <div>
                <a href="https://www.tatatrusts.org/" className="text-xl font-serif ml-[10px] cursor-pointer">
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-[40px]">
              <div className="text-2xl font-serif font-bold">
                Dr. Abdul Kalam Scholarship for Meritorious Students:
              </div>
              <div>
                <a href=" https://abdulkalam.com/" className="text-xl font-serif ml-[10px] cursor-pointer">
                  Click here
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}
