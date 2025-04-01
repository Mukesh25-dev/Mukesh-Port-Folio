import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-green-600 text-white flex justify-around p-4 shadow-md z-50 h-16">
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
    </nav>
  );
};

export default NavBar;
