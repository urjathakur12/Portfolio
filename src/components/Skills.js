import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const frontend = [
  {
    name: "React",
    value: 50,
    icon: CheckCircleIcon,
  },
  {
    name: "Tailwind",
    value: 50,
    icon: CheckCircleIcon,
  },
];

const backend = [
  { name: "Java", value: 90, icon: CheckCircleIcon },
  { name: "SpringBoot", value: 90, icon: CheckCircleIcon },
  { name: "OOPs", value: 80, icon: CheckCircleIcon },
  { name: "Data Structures and Algorithms", value: 60, icon: CheckCircleIcon },
  { name: "Microservices", value: 80, icon: CheckCircleIcon },
  { name: "SQL", value: 80, icon: CheckCircleIcon },
  { name: "REST API", value: 90, icon: CheckCircleIcon },
  { name: "Maven", value: 80, icon: CheckCircleIcon },
];

const skillLogos = [
  { name: "Java", src: "/logos/java.png" },
  { name: "Spring Boot", src: "/logos/spring.png" },
  { name: "React", src: "/logos/react.png" },
  { name: "MySQL", src: "/logos/mysql.png" },
  { name: "Git", src: "/logos/git.png" },
  { name: "Github", src: "/logos/github.png" },
  { name: "REST API", src: "/logos/rest.png" },
  { name: "Microservices", src: "/logos/microservices.png" },
  { name: "Maven", src: "/logos/maven.png" },
  { name: "RabbitMQ", src: "/logos/rabbit.png" },
  { name: "Apache Tomcat", src: "/logos/tomcat.png" },
  { name: "Jenkins", src: "/logos/jenkins.png" },
  { name: "Tailwind", src: "/logos/tailwind.png" },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-black" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-xl leading-7">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Skills
          </p>
        </div>

        {/* Tech Stack Logos Section - Side Scrolling */}
        <div className="mt-20" data-aos="fade-up">
          {/* <h2 className="text-3xl font-bold text-center text-white mb-10">
            Tech Stack
          </h2> */}

          {/* Side Scrolling Container */}
          <div className="relative w-full h-[200px] overflow-hidden">
            <div className="flex w-full animate-news-scroll">
              {skillLogos.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-white font-semibold p-5"
                >
                  <motion.div className="w-20 h-20 rounded-full overflow-hidden bg-base-200 shadow-lg">
                    <motion.img
                      src={skill.src}
                      alt={skill.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <p className="text-sm mt-2">{skill.name}</p>
                </div>
              ))}
              {/* Duplicate the logos to create a continuous effect */}
              {skillLogos.map((skill, index) => (
                <div
                  key={skill.name + "-duplicate"}
                  className="flex flex-col items-center justify-center text-white font-semibold p-5"
                >
                  <motion.div className="w-20 h-20 rounded-full overflow-hidden bg-base-200 shadow-lg">
                    <motion.img
                      src={skill.src}
                      alt={skill.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <p className="text-sm mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
          {/* Backend */}
          <div
            className="mt-10 bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-lg shadow-[hsl(268,100%,85%)] transform transition-all duration-300"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6 text-white">
              Backend Development
            </p>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
              {backend.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="relative pl-16"
                  data-aos="fade-right"
                  data-aos-delay={idx * 100}
                >
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-purple-600 animate-pulse">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    {skill.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <div className="w-3/4 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-purple-500 h-full transition-all duration-[500ms]"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Frontend */}
          <div
            className="mt-10 bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-lg shadow-[hsl(268,100%,85%)] transform transition-all duration-300"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6 text-white">
              Frontend Development
            </p>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
              {frontend.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="relative pl-16"
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                >
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-purple-600 animate-pulse">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    {skill.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <div className="w-3/4 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-purple-500 h-full transition-all duration-[500ms]"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>


      </div>
    </div>
  );
}
