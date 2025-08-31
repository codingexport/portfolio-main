import { useState } from "react";
import { motion } from "motion/react";
import { myProjects } from "../constants";
// import { DiCssdeck } from "react-icons/di";
// import { Bio } from "../../data/constants"; // <-- yeh wahi file jisme tumhara github link hai

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-4 sm:gap-8 text-neutral-400">
      <li className="nav-li">
        <a className="nav-link hover:text-white" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-white" href="#skills">Skills</a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-white" href="#experience">Experience</a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-white" href="#projects">Projects</a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-white" href="#education">certifications</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            {/* <DiCssdeck size="2rem" /> */}
            Akhil
          </a>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-8">
            <Navigation />
            <a
              href={"https://github.com/codingexport"}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-80 transition"
            >
              Github Profile
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5 flex flex-col items-center gap-4">
            <Navigation />
            <a
              href={"https://github.com/codingexport"}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-80 transition"
            >
              Github Profile
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
