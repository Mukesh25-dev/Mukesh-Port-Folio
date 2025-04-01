import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white text-green-900 px-6 pt-20">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-6 tracking-wide">
        Hi, I am <span className="text-green-700">Mukesh D V R</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-center max-w-2xl mb-6 font-medium">
        Passionate MERN Stack Developer | Student Counselor | Aspiring Tech Enthusiast 🚀
      </p>

      {/* Read CV Button */}
      <a
        href="https://docs.google.com/document/d/1ieav3XhLpln4Lh_KFOWwddU8eVYgIIXB/edit?usp=sharing&ouid=107783701831633721763&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-800 transition duration-300"
      >
        Read My CV
        <FontAwesomeIcon icon={faFile} className="w-5 h-5" />
      </a>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-8 justify-center">
        <a
          href="https://github.com/Mukesh25-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:text-green-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/dvr-mukesh-4b9285288/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:text-green-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12" />
        </a>
        <a
          href="mailto:dvrmukesh2002@gmail.com"
          className="text-green-700 hover:text-green-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-12 h-12" />
        </a>
      </div>
    </section>
  );
};

export default Home;
