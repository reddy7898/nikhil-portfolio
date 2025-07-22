import React from "react";
import safranimg from "../../assets/safran.jpg";
import allegiantimg from "../../assets/allegiant.svg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Allegiant Airlines Booking Platform"
          main="Developed core modules for flight, hotel, and rental bookings using Symfony, React, and GraphQL. Enabled real-time availability, payment integrations, and dynamic pricing."
          image={allegiantimg}
          link="https://allegiantair.com"
          tech={["PHP", "Symfony", "GraphQL", "React"]}
        />
        <ProjectCard
          title="One Safran Tool"
          main="Developed an internal web application at Safran using Laravel and Mysql for managing aviation component traceability, regulatory audit logs, and compliance tracking workflows."
          image={safranimg}
          link="https://www.safran-group.com"
          tech={["PHP","Laravel", "Mysql", "React","Git"]}
        />
      </div>
    </div>
  );
};

export default Projects;
