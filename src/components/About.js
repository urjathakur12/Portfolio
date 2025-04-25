import { useEffect } from "react";
import {
  AtSymbolIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import pfp from "../urja.jpg";
const features = [
  {
    name: "Email:",
    description: "urjathakur8@gmail.com",
    icon: AtSymbolIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 bg-black lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7"><a href="https://sam-folio.vercel.app">Get to know more</a></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                I am a passionate and results-driven Software Engineer with over 3 years of experience in designing, developing, and maintaining high-performance applications. Currently, I work at EdgeVerve, where I’ve contributed to the development of a multi-tenant SaaS platform focused on service procurement and supplier management. My technical expertise spans across Java, Spring Boot, Spring Batch, and React, with a strong foundation in both front-end and back-end development.

                Throughout my career, I’ve taken pride in solving complex technical challenges, such as migrating large-scale applications to the latest technologies (e.g., upgrading from Spring Boot 2.x to 3.x) and optimizing batch processing workflows to improve system performance. I’ve also had the privilege of mentoring junior developers and collaborating closely with cross-functional teams to ensure high-quality, timely delivery of features and fixes.

                In addition to my professional work, I enjoy staying up-to-date with the latest trends in software development and Agile practices. I am passionate about crafting scalable, maintainable code that not only meets business requirements but also contributes to seamless user experiences.

                I am always looking for opportunities to challenge myself, grow as a developer, and contribute to innovative projects that make a real impact.


              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[28rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[37rem]"
            src={pfp}
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="flex justify-center w-full">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight text-white">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  Backend Developer with 3+ years of experience in building scalable enterprise applications.
                </p>
                <p className="mt-3 list-item list-inside">
                  Developed and maintained a multi-tenant SaaS platform using Spring Boot and Spring Batch.
                </p>
                <p className="mt-3 list-item list-inside">
                  Led migration from Spring Boot 2.x to 3.x and JDK 21, modernizing the backend stack.
                </p>
                <p className="mt-3 list-item list-inside">
                  Actively participated in Agile ceremonies—Daily Stand-ups, Sprint Planning, Reviews, and Retrospectives.
                </p>
                <p className="mt-3 list-item list-inside">
                  Built bulk contract sync modules with Excel data processing for operational efficiency.
                </p>
                <p className="mt-3 list-item list-inside">
                  Designed REST APIs for seamless contract and supplier data integration.
                </p>
                <p className="mt-3 list-item list-inside">
                  Enhanced system reliability with retry mechanisms and robust backend error handling.
                </p>
                <p className="mt-3 list-item list-inside">
                  Enhanced system reliability with retry mechanisms and robust backend error handling.
                </p>
                <p className="mt-3 list-item list-inside">
                  Reduced code duplication by 60% through reusable backend components.
                </p>
                <p className="mt-3 list-item list-inside">
                  Collaborated with cross-functional teams to refine requirements and deliver backend features.
                </p>
                <p className="mt-3 list-item list-inside">
                  Mentored junior developers and ensured code quality through reviews and knowledge sharing.
                </p>
              </div>
              {/* <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                B.Tech in Electronics and Communication Engineering from IIIT-Naya Raipur (2015–2019)
                </p>
                <p className="mt-3 list-item list-inside">
                  TheMellowCoder: Contributed to MERN stack project for code ideation.
                </p>
                <p className="mt-3 list-item list-inside">
                  VibeVault: Co-created user-friendly shopping platform with C#.
                </p>
              </div> */}
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}