import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
    id="About"
    className="scroll-mt-20 text-white md:flex items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-4">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-green-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend</h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Experienced in developing robust and scalable backend systems using Core PHP, Laravel, and Symfony. Skilled in designing RESTful APIs, integrating MySQL databases, implementing authentication, authorization, and optimizing backend performance for real-world production use.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-green-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend</h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Skilled in React.js, HTML5, CSS3, Bootstrap, and Tailwind — with real-world experience building responsive dashboards, forms, and dynamic UI features across travel and hospitality platforms.
                </p>
              </span>
            </div>


            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-green-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database</h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Proficient in MySQL and MongoDB — experienced in writing complex queries, optimizing joins and subqueries, designing scalable schemas, and ensuring database performance in high-traffic enterprise applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
