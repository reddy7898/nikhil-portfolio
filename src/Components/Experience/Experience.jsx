import { FaJs, FaReact, FaHtml5 } from "react-icons/fa";
import { SiPhp, SiLaravel, SiTailwindcss, SiMysql ,SiRedis, SiMongodb} from "react-icons/si";
import { FaBuilding } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-6 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><SiPhp color="#E34F26" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><SiLaravel color="#1572B6" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><FaReact color="#61DAFB" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><FaJs color="#F7DF1E" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><SiMongodb color="#F24E1E" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><SiTailwindcss color="#47A248" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><FaHtml5 color="#FF4438" size={50} /></span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"><SiMysql color="#336791" size={50} /></span>
        </div>

        <div className="md:w-1/2 space-y-6">
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <TbBuildingSkyscraper color="#4ADE80" size={50} />
            <div className="text-white">
              <h2 className="text-xl font-semibold">Safran India Pvt Ltd</h2>
              <p className="text-sm font-thin">2024 – Present</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Full Stack Developer working on internal aviation tools.</li>
                <li>Symfony, MySQL, REST APIs & deployment pipelines.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <FaBuilding color="#93C5FD" size={50} />
            <div className="text-white">
              <h2 className="text-xl font-semibold">LTIMindtree</h2>
              <p className="text-sm font-thin">2021 – 2024</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Worked on Allegiant Air Project</li>
                <li>Handled core PHP, Laravel, ReactJS modules and integrations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
