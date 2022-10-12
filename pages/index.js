import Head from "next/head";
import { useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import aymericPic from "../public/aymericPic.png";
import kasaPic from "../public/MiniatureKasa.png";
import contractGeneratorPic from "../public/MiniatureOutilContrat.png";
import piiquantePic from "../public/MiniaturePiiquante.png";
import kanapPic from "../public/MiniatureKanap.png";
import ohmyfoodPic from "../public/MiniatureOhmyfood2.png";
import lapantherePic from "../public/LapanthereMiniature.png";
import bookiPic from "../public/MiniatureBooki.png";
import portfolioPic from "../public/MiniaturePortfolio.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Di Maggio Aymeric Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" font-Syne bg-white px-10 md:px-20 2xl:px-60 transition-colors  dark:bg-gray-900 fade-in">
        <section className="min-h-screen ">
          <header className="sticky top-0 z-50">
            <nav className="py-8 mb-2 flex justify-center sm:justify-between items-center fade-in  dark:bg-gray-900 bg-white">
              <h1 className="hidden sm:block text-xl text-emerald-500 font-medium dark:text-white">
                <a href="#" className="hover:text-emerald-500">
                  Aymeric Di Maggio
                </a>
              </h1>
              <div className="flex justify-between items-center">
                <div className="text-white ">
                  <a
                    className="text-xl text-center text-emerald-600 dark:text-white px-4 py-2 mr-10 border-none rounded-md hover:bg-cyan-600  hover:text-white transition-all"
                    href="#sectionProjects"
                  >
                    My projects
                  </a>
                </div>
                <div className="text-white ">
                  <a
                    className="text-xl text-center bg-emerald-600 text-white px-4 py-2 mr-10 border-none rounded-md hover:bg-emerald-500 transition-all"
                    href="mailto:aymericdimaggio@gmail.com"
                  >
                    Contact
                  </a>
                </div>
                {darkMode ? (
                  <div className="flex items-center">
                    <BsFillMoonStarsFill
                      className=" cursor-pointer text-3xl text-gray-600 hover:text-emerald-500  transition-all"
                      onClick={() => setDarkMode(!darkMode)}
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <BsFillSunFill
                      className="cursor-pointer text-3xl text-emerald-500 hover:text-gray-600  transition-all"
                      onClick={() => setDarkMode(!darkMode)}
                    />
                  </div>
                )}
              </div>
            </nav>
          </header>

          <div className="lg:flex lg:justify-between lg:items-end lg:py-8">
            <div>
              <div className=" text-center lg:text-left py-8">
                <p className="text-gray-600 font-medium md:text-xl dark:text-white tracking-in-expand">
                  Hello, i'm
                </p>
                <h2 className=" tracking-in-expand text-5xl py-2 text-emerald-500 font-medium md:text-6xl animate-pulse">
                  Aymeric
                </h2>
                <p className="text-md py-5 px-10 leading-6 text-gray-600 md:text-xl lg:pl-0 lg:max-w-lg dark:text-white fade-in-left">
                  I create responsive web sites with a particular appetite for
                  the user experience. As a junior developer, i'm
                  <span className="text-emerald-500"> persevering</span> and
                  <span className="text-emerald-500"> highly motivated</span>. I
                  like to challenge myself on web development technologies
                </p>
              </div>
              <div className="text-5xl flex justify-center items-center lg:flex lg:justify-start gap-10 py-3 text-gray-600 fade-in-right">
                <a
                  className="text-lg text-center bg-emerald-600 text-white px-4 py-2 border-none rounded-md hover:scale-110 hover:bg-emerald-500 transition-all"
                  href="https://www.linkedin.com/in/di-maggio-aymeric/overlay/1635504499113/single-media-viewer/"
                  target="_blank"
                >
                  My resume
                </a>
                <a
                  href="https://www.linkedin.com/in/di-maggio-aymeric/"
                  target="_blank"
                >
                  <AiFillLinkedin className=" hover:text-blue-500 hover:scale-125 transition" />
                </a>
                <a href="https://github.com/AymericDM83" target="_blank">
                  <AiFillGithub className=" dark:hover:text-slate-300 hover:scale-125 transition " />
                </a>
              </div>
            </div>
            <div className="relative bg-gradient-to-t from-emerald-400 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden md:h-70 md:w-70 lg:h-80 lg:w-80 lg:mt-0 xl:mx-0 fade-in-left">
              <Image src={aymericPic} layout="fill" objectFit="cover" />
            </div>
          </div>

          <div
            className="my-5 hidden lg:block animation: fade-in-right"
            id="SectionSkillsmd"
          >
            <div>
              <h3 className=" py-1 text-left text-emerald-500 font-medium md:text-5xl">
                My Skills
              </h3>
              <div className="h-2 w-10 bg-emerald-500 rounded-full my-10 lg:hidden"></div>
            </div>
            <div className=" flex justify-between items-end gap-5 text-left py-7 rounded-xl my-5 flex-1 ">
              <ul className="text-white text-md flex flex-wrap gap-5 max-w-4xl">
                <li className="p-3 bg-gray-600 rounded-2xl ">ReactJS</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Next.JS</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">JavaScript</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">HTML</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">CSS</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Sass</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Tailwind CSS</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">SEO</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Git</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">
                  Responsive Design
                </li>
                <li className="p-3 bg-gray-600 rounded-2xl ">API REST</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">NodeJs Basics</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Express Basics</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">MongoDB</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">Mongoose</li>
                <li className="p-3 bg-gray-600 rounded-2xl ">NoSQL</li>
              </ul>
              <div className="text-5xl xl:text-6xl flex justify-end px-5 text-emerald-500">
                <a href="#sectionProjects">
                  <BsFillArrowDownCircleFill className="dark:hover:text-slate-300  transition animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-5xl xl:text-6xl lg:hidden flex justify-end py-8 text-emerald-500">
            <a href="#sectionSkills">
              <BsFillArrowDownCircleFill className="dark:hover:text-slate-300  transition animate-bounce" />
            </a>
          </div>
        </section>

        <section id="sectionSkills" className="py-5 lg:hidden">
          <div>
            <h3 className="text-4xl py-1 text-center text-emerald-500 font-medium md:text-5xl">
              My Skills
            </h3>
            <div className="h-1 w-10 bg-emerald-500 rounded-full mx-auto my-10"></div>
          </div>
          <div className="text-center p-7 rounded-xl my-10 flex-1 max-w-2xl mx-auto ">
            <ul className="text-white text-md flex flex-wrap justify-center gap-5 ">
              <li className="p-3 bg-gray-600 rounded-2xl ">ReactJS</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Next.JS</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">JavaScript</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">HTML</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">CSS</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Sass</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Tailwind CSS</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">SEO</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Git</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">
                Responsive Design
              </li>
              <li className="p-3 bg-gray-600 rounded-2xl ">API REST</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">NodeJs Basics</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Express Basics</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">MongoDB</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">Mongoose</li>
              <li className="p-3 bg-gray-600 rounded-2xl ">NoSQL</li>
            </ul>
          </div>
        </section>

        <section id="sectionProjects" className="py-10">
          <div>
            <h3 className="text-4xl py-1 text-center text-emerald-500 font-medium md:text-5xl">
              My Projects
            </h3>
            <div className="h-1 w-10 bg-emerald-500 rounded-full mx-auto my-10"></div>
          </div>

          <div className="lg:flex flex-wrap gap-5">
            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800  flex-1">
              <div>
                <Image
                  src={kasaPic}
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
                <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                  Kasa
                </h3>
                <p className="py-2 max-w-5 dark:text-white">
                  Responsive reservation website created with ReactJS / Sass
                </p>
                <div className="max-w-xs mx-auto my-10">
                  <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                    <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                    <li className="p-2 bg-gray-600 rounded-2xl">Sass</li>
                    <li className="p-2 bg-gray-600 rounded-2xl">ReactJS</li>
                    <li className="p-2 bg-gray-600 rounded-2xl">JavaScript</li>
                    <li className="p-2 bg-gray-600 rounded-2xl">
                      Responsive design
                    </li>
                    <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center ">
                <a
                  href="https://github.com/AymericDM83/Kasa-P7-OpenClassrooms"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  href="https://kasa-bu3goflr2-aymericdm83.vercel.app/"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website link
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={contractGeneratorPic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                PDF maintenance contracts generator tool
              </h3>
              <p className="py-2 dark:text-white">
                Generator of personalized maintenance contract for an air
                conditioning troubleshooting and repair company
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Sass</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">JavaScript</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Responsive design
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/Generateur-de-contrats-de-maintenance-PDF"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  href="https://aymericdm83.github.io/Generateur-de-contrats-de-maintenance-PDF/index.html"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website link
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={portfolioPic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                Personal portfolio
              </h3>
              <p className="py-2 max-w-5 dark:text-white">
                The site you are on. Using Next.JS, React, TailwindCSS
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Next.JS</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">ReactJS</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">JavaScript</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Tailwind CSS</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Responsive design
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/Portfolio-NextJS"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website demo
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={piiquantePic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                Create a CRUD API for an article gallery web app, "Piiquante"
              </h3>
              <p className="py-2 dark:text-white">
                Building a secure API for an article gallery with NodeJS,
                Express, MongoDB (NoSQL). Create, delete, update and delete
                items. Authentication system with JWT & Bcrypt. Like and Unlike
                article functions
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">NodeJS Basics</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Express Basics
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">MongoDB</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">NoSQL</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">API REST</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Mongoose</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">JWT</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Bcrypt</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/Piiquante-P6-Openclassrooms"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website demo
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={kanapPic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                Kanap
              </h3>
              <p className="py-2 dark:text-white">
                Integration of functionalities for an e-commerce site. API
                calls, DOM manipulation. Adding multiple product models/colors
                to basket, update quantity, remove from cart, price
                calculations. Client form control with regex, send order to API
                and get unique order number
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">CSS</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">JavaScript</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">API REST</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/Kanap-Projet-5-OpenClassRooms"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website demo
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={lapantherePic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                SEO optimization of an existing web site, "La panthère"
              </h3>
              <p className="py-2 dark:text-white">
                Added SEO best practices & improved overall site performances
                and accessibility
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">SEO</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Google LightHouse
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Google Analytics
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/LaPanthere-Projet4-OpenClassRooms/tree/master"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  href="https://aymericdm83.github.io/LaPanthere-Projet4-OpenClassRooms/"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website link
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={ohmyfoodPic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                Showcase web site, "OhMyFood"
              </h3>
              <p className="py-2 max-w-5 dark:text-white">
                Responsive web site integration with home page and restaurant
                pages, mobile-first approach. Integration with HTML / Sass,
                added dynamic animations (Spin loader, hover animations, etc.)
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Sass</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Responsive design
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/OhMyFood-Projet-3-OpenClassRooms"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  href="https://aymericdm83.github.io/OhMyFood-Projet-3-OpenClassRooms/"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website link
                </a>
              </div>
            </div>

            <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-gray-200 dark:bg-gray-800 flex-1">
              <Image
                src={bookiPic}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-medium pt-8 pb-2 text-center dark:text-white">
                Showcase web site, "Booki"
              </h3>
              <p className="py-2 max-w-5 dark:text-white">
                Integration of a booking responsive web site with HTML / CSS
              </p>
              <div className="max-w-xs mx-auto my-10">
                <ul className="text-white text-md flex flex-wrap justify-center items-center gap-2 my-4">
                  <li className="p-2 bg-gray-600 rounded-2xl">HTML</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">CSS</li>
                  <li className="p-2 bg-gray-600 rounded-2xl">
                    Responsive design
                  </li>
                  <li className="p-2 bg-gray-600 rounded-2xl">Git</li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-10 py-3 my-2 text-white text-center">
                <a
                  href="https://github.com/AymericDM83/Booki-P2-OpenClassrooms"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Source code
                </a>
                <a
                  href="https://aymericdm83.github.io/Booki-P2-OpenClassrooms/"
                  target="_blank"
                  className="bg-emerald-500 rounded-xl py-2 px-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl"
                >
                  Website link
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-10">
          <div className="h-1 w-15 bg-gray-500 rounded-full mx-auto my-10"></div>
          <div className="py-5 text-2xl text-emerald-500 flex justify-between items-center">
            <a
              href="#sectionProjects"
              className="text-lg lg:text-2xl bg-gray-600 text-white rounded-xl p-3 hover:bg-cyan-500 transition-all"
            >
              My projects
            </a>
            <div>
              <a href="#">
                <p className="text-lg lg:text-2xl bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl p-3 transition-all">
                  Back to top
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 py-10">
            <a
              href="https://www.linkedin.com/in/di-maggio-aymeric/"
              target="_blank"
            >
              <AiFillLinkedin className=" text-5xl text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:scale-125 transition" />
            </a>
            <a href="https://github.com/AymericDM83" target="_blank">
              <AiFillGithub className=" text-5xl text-gray-600 dark:text-white dark:hover:text-slate-300 hover:scale-125 transition " />
            </a>
            <div className="text-white flex justify-center items-center">
              <a
                className="text-xl text-center text-gray-600 dark:text-white border-none rounded-md transition-all"
                href="mailto:aymericdimaggio@gmail.com"
              >
                <AiOutlineMail className="text-5xl text-gray-600 dark:text-white dark:hover:text-red-400 hover:scale-125 transition" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center text-gray-600 dark:text-white py-3">
            <p>&#xA9; Di Maggio Aymeric. All rights reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
