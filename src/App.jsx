import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <NavBar /> {/* ✅ Navbar stays fixed */}
      <div className="pt-16"> {/* ✅ Adds spacing to avoid overlap with fixed navbar */}
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
