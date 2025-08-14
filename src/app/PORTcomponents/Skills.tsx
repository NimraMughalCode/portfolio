"use client";
import { useEffect, useState, useRef } from "react";

const toolGradients = [
  { color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { color: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
  { color: "from-green-500 to-emerald-500", bg: "bg-green-50" },
  { color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50" },
  { color: "from-red-500 to-pink-500", bg: "bg-red-50" },
  { color: "from-indigo-500 to-blue-500", bg: "bg-indigo-50" },
  { color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
  { color: "from-cyan-500 to-blue-500", bg: "bg-cyan-50" },
  { color: "from-teal-500 to-emerald-500", bg: "bg-teal-50" },
  { color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
  { color: "from-purple-500 to-indigo-500", bg: "bg-purple-50" },
];

const toolsBase = [
  "Bubble.io",
  "Flutterflow.io",
  "Next.js",
  "Asana",
  "Jira",
  "Trello",
  "Notion",
  "Excel",
  "ClickUp",
  "Figma",
  "Firebase",
  "WordPress",
];

const tools = toolsBase.map((name, i) => ({
  name,
  ...toolGradients[i % toolGradients.length],
}));

const skills = [
  { name: "Project Planning", level: 90 },
  { name: "Team Coordination", level: 85 },
  { name: "Agile Methodologies", level: 80 },
  { name: "Communication", level: 95 },
  { name: "Risk Management", level: 75 },
  { name: "Client Delivery", level: 88 },
];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container-custom px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 text-center mb-8">
          Skills &amp; Tools
        </h2>

        {/* Tool Badges — light like Services cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-medium shadow-sm border border-gray-100 ${tool.bg}
              hover:scale-105 hover:shadow-md transition-all duration-300`}
            >
              <span
                className={`w-3 h-3 mr-2 rounded-full bg-gradient-to-r ${tool.color}`}
              ></span>
              <span className="text-dark-700">{tool.name}</span>
            </span>
          ))}
        </div>

        {/* Skill Progress Bars — light tracks with soft gradient */}
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="group transition-all">
              <div className="flex justify-between mb-1">
                <span className="text-dark-900 font-medium">{skill.name}</span>
                <span className="text-dark-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
