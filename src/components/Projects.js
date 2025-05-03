import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import movie from "../movie_edit.png";
import bank from "../bank.png";
const projects = [
  {
    id: 1,
    name: "Movie Review System",
    href: "https://github.com/urjathakur12/Movie-Review",
    github: "https://github.com/urjathakur12/Movie-Review",
    imageSrc: movie,
    used: "Java, React, MongoDB",
    description:
      "Built a movie recommendation app with user ratings, reviews, and sentiment-based suggestions.",
  },
  {
    id: 2,
    name: "Online Banking System ",
    href: "https://github.com/urjathakur12/Online-Banking-System",
    github: "https://github.com/urjathakur12/Online-Banking-System",
    imageSrc: bank,
    used: "SpringBoot, React",
    description:
      "Created a secure banking app for account management, fund transfers, and transaction tracking.",
  },
  {
    id: 3,
    name: "E-Commerce Platform",
    href: "https://github.com/urjathakur12/E-Commerce",
    github: "https://github.com/urjathakur12/E-Commerce",
    imageSrc:
      "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    used: "SpringBoot, MySQL",
    description:
      "Developed a full-stack shopping app with product filtering, cart, and secure checkout.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id="projects" className="bg-#c0c0c0-200200-purple-50 py-24 sm:py-32 bg-black">
      <div className="mx-auto text-center max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-white">Projects</p>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.98 }}
                key={project.id}
                className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-[0_4px_20px_rgba(230,230,250,0.8)] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(216,191,216,0.9)]"
                data-aos="flip-left"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-2xl lg:h-80">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-5 text-left space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-sm">{project.description}</p>
                  <p className="text-sm font-medium text-yellow-300">{project.used}</p>
                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-800 transition"
                    >
                      <FaGithub className="w-5 h-5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
