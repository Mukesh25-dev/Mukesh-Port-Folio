const projects = [
    {
      title: "Event Management App",
      description: "Developed a full-stack event management application using the MERN stack, enabling users to create, manage, and track events seamlessly. The platform includes user authentication, event scheduling, ticket booking, and real-time updates to enhance user engagement. The application provides a responsive UI for smooth interaction, with MongoDB for efficient data management, Express.js and Node.js for backend operations, and React for a dynamic front-end experience.",
      imgSrc: "/em.jpg.png",
      previewLink: "https://papaya-gumdrop-7407df.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/GUVI-FINAL-FE",
      beSource: "https://github.com/Mukesh25-dev/GUVI-CAPSTONE-PROJECT-BACKEND",
    },
    {
      title: "Help Your Trip – Travel Cost Estimator",
      description: "Help Your Trip is a front-end webpage built with HTML and CSS, designed to assist travelers in finding hotels and estimating trip costs for specific destinations. The platform displays available hotels along with pricing details, providing a simple and user-friendly interface for seamless trip planning.",
      imgSrc: "/t.jpg.png",
      previewLink: "https://firsttou-task.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Guvi-First-Task",
    },
    {
      title: "E-Courses – Online Learning Platform",
      description: "E-Courses is a responsive front-end webpage built using HTML and Tailwind CSS, designed to showcase various educational courses and student testimonials. With a clean and modern UI, the platform highlights available courses, student feedback, and key features in an engaging layout. The fully responsive design ensures seamless accessibility across all devices.",
      imgSrc: "/c.jpg.png",
      previewLink: "https://thriving-cranachan-c9f3c3.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Guvi-Second-Task",
    },
    {
        title: "ShopCart – React Shopping Cart",
      description: "ShopCart is a React and Tailwind CSS-powered front-end web application that showcases available products with a seamless shopping experience. Users can add and remove items from the cart while dynamically viewing pricing details. The clean UI and smooth interactions enhance the overall shopping experience.",
      imgSrc: "/s.jpg.png",
      previewLink: "https://tubular-khapse-51e88b.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/React-Router-task",
    },
    {
      title: "M-Watch – Movie Discovery Platform",
      description: "M-Watch is a React and Tailwind CSS-powered front-end web application that showcases a vast collection of movies. Users can browse through various movies and access detailed information about any specific movie they choose. With a sleek UI and seamless navigation, M-Watch offers an engaging and user-friendly experience for movie enthusiasts.",
      imgSrc: "/m.jpg.png",
      previewLink: "https://cool-malasada-d94c39.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Movie-list-project",
    },
  ];
  
  const Project = () => {
    return (
    <section id="project" className="min-h-screen pt-24 flex flex-col items-center bg-gradient-to-b from-white to-green-100 text-green-900 px-6 py-12">
    {/* Section Title */}
        <div className="max-w-2xl text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">Here are some of the projects I have worked on.</p>
        </div>
  
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {projects.map((project, index) => (
            <div key={index} className="w-full max-w-sm bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
              {/* Project Image */}
              <img src={project.imgSrc} alt={project.title} className="h-60 w-full object-cover" />
  
              {/* Project Content */}
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-center mb-3">{project.title}</h3>
                <p className="text-gray-700 text-sm text-center mb-4">{project.description}</p>
                
                {/* Buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition">Preview</a>
                  {project.feSource && (
      <a href={project.feSource} target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-center px-4 py-2 rounded-lg hover:bg-gray-300 transition">FE Code</a>
    )}
    
    {project.beSource && (
      <a href={project.beSource} target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-center px-4 py-2 rounded-lg hover:bg-gray-300 transition">BE Code</a>
    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  
  
  export default Project;
  