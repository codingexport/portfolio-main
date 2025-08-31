import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "sql",
    "Power_BI",
    "excel",
    "tableau",
    "statistics",
    "NumPy_logo",
    "seaborn-1",
    "matplotlib",
    "pandas",
    "Python",
    "Rlogo",
    "github",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={45}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
