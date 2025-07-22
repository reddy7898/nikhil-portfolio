import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, image, link, tech }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4 w-full h-48 object-cover rounded-xl"
        src={image || bannerImg}
        alt={title}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      {tech && (
        <div className="flex flex-wrap gap-2 px-4 pt-1 pb-3">
          {tech.map((t, idx) => (
            <span key={idx} className="bg-slate-800 text-green-300 px-2 py-1 rounded-full text-xs">{t}</span>
          ))}
        </div>
      )}

      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
