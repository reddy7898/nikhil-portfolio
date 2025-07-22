import avatarImg from "../../assets/portfolio-image.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-10 md:py-20 bg-gradient-to-br from-black via-gray-900 to-green-950 relative overflow-hidden">
      <div className="md:w-2/4 text-center md:text-left z-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
          <TextChange />
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-2">
          Full Stack Web Developer | PHP | ReactJS | Laravel | MySQL
        </h2>
        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Passionate about building scalable web applications and interactive user experiences.
        </p>
        <button
        onClick={() => {
        document.getElementById("Footer")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-6 bg-green-500 text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-green-400 hover:scale-105 transition duration-300"
        >
        Contact Me
        </button>
      </div>

      <div className="mb-8 md:mb-0 md:w-2/4 flex justify-center">
        <img src={avatarImg} alt="Portfolio" className="w-72 md:w-[350px] rounded-xl shadow-xl" />
      </div>
    </div>
  );
};

export default Home;
