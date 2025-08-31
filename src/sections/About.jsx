import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end justify-center grid-default-color grid-1 relative overflow-hiddengrid-default-color grid-1">
          <img
            src="assets/imgs.png"
            className="absolute scale-[1] -right-[8rem] -top-[4rem] md:scale-[3] md:left-2 md:inset-y-10 lg:scale-[1]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Akhil</p>
            <p className="subtext">
              I am a motivated <b> Data Analyst</b> with a BCA degree from
              Dr. Ram Manohar Lohia Avadh University. Skilled in Excel, SQL, Power BI,
              and Python, with projects in job trends, crowdfunding, weather analytics,
              and financial dashboards. Currently pursuing Data Analyst training at ExcelR,
              Mumbai, while also having knowledge of <b>Full Stack Development (MERN Stack)</b>
              to build scalable web solutions alongside data-driven insights.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              DATA TO DECISIONS
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GEN AI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Python fundamentals"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Tableau"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Power BI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Excel"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="Statistics"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              text="SQL"
              containerRef={grid2Container}
            />

          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              <p className="subtext">
                I'm based in India (IST), and open to remote work worldwide
              </p>
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Need help analyzing data? Let's connect!
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Data Stack</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "SQL",
                "Power BI",
                "Excel",
                "Tableau",
                "Python",
                "R",
                "Gen AI",
                "Statistics ",
                "Data Cleaning",
                "Data Visualization",
                "Data Analysis",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-900 text-white rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
