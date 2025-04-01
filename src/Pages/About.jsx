const About = () => {
    return (
      <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-white text-green-700">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            "I am a passionate and driven MERN stack developer with a strong foundation in building 
            dynamic and user-friendly web applications. At 22, I have successfully completed my MERN 
            Full Stack training from Guvi, equipping myself with the latest industry-relevant skills 
            in modern web development. In addition to my technical expertise, I have spent the past 
            year working as a Student Counselor, where I developed strong communication, problem-solving, 
            and leadership skills. This unique combination of technical proficiency and interpersonal 
            experience allows me to approach development with a user-centric mindset. I am now eager 
            to transition into the tech industry, where I can leverage my skills to build impactful 
            digital solutions and continuously grow as a developer."
          </p>
        </div>
  
        {/* Profile Image */}
        <img 
          src="profile.jpg.jpg" 
          alt="Mukesh D V R" 
          className="w-60 h-60 rounded-full object-cover shadow-lg"
        />
      </section>
    );
  };
  
  export default About;
  