import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Collect", "Analyze", "Transform", "Visualize"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex flex-col md:flex-row items-center justify-between c-space gap-10">
        {/* LEFT SIDE */}
        <div className="flex-col hidden md:flex md:w-1/2">
          <motion.h1
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Hi I'm Akhilesh Nishad
          </motion.h1>

          <div className="flex flex-col items-start">
            <motion.p
              className="text-3xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <br />
              Data Analyst in the Making |<br />Leveraging Web Development Skills for Smarter Solutions
              <br /> <br />
            </motion.p>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              <FlipWords
                words={words}
                className="font-black text-white text-8xl"
              />
            </motion.div>

            <motion.p
              className="text-4xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}
            >
              Transforming Data into Insights
            </motion.p>

            <br /> <br /><br /> <br />
            <a
              href="https://codingexport.github.io/About-Me-portfolio/akhil.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-bold text-white rounded-lg bg-gradient-to-b from-black-500 to-blue-900 shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-300"
            >
              Check Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-80 flex justify-center">
          <img
            src="assets/akhil.jpg"
            alt="Akhilesh"
            className="rounded-full w-56 h-56 md:w-72 md:h-80 object-cover shadow-2xl ring-4 ring-blue-500 animate-spin-slow  hover:opacity-100 transition duration-500"
          />
        </div>

      </div>

      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Akhilesh Nishad
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Data-Driven Solutions
          </motion.p>
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-bold text-white rounded-lg bg-gradient-to-b from-blue-500 to-black-700 shadow-md hover:from-blue-600 hover:to-blue-600 hover:shadow-xl transition duration-300"
          >
            Check Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
