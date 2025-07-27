"use client"
import { useEffect, useState, useRef } from 'react';

const tools = [
  { name: 'Bubble.io', color: 'bg-primary' },
  { name: 'Flutterflow.io', color: 'bg-secondary' },
  { name: 'Next.js', color: 'bg-cta' },
  { name: 'Asana', color: 'bg-primary' },
  { name: 'Jira', color: 'bg-secondary' },
  { name: 'Trello', color: 'bg-cta' },
  { name: 'Notion', color: 'bg-primary' },
  { name: 'Excel', color: 'bg-secondary' },
  { name: 'ClickUp', color: 'bg-cta' },
];

const skills = [
  { name: 'Project Planning', level: 90 },
  { name: 'Team Coordination', level: 85 },
  { name: 'Agile Methodologies', level: 80 },
  { name: 'Communication', level: 95 },
  { name: 'Risk Management', level: 75 },
  { name: 'Client Delivery', level: 88 },
];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white/60 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-8">Skills &amp; Tools</h2>

        {/* Tool Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className={`inline-block px-4 py-2 rounded-full text-textmain font-medium shadow-sm ${tool.color} bg-opacity-80 italic border border-border
              hover:scale-105 hover:shadow-md transition-all duration-300`}
            >
              {tool.name}
            </span>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="group transition-all">
              <div className="flex justify-between mb-1">
                <span className="text-textmain font-medium">{skill.name}</span>
                <span className="text-textsoft italic">{skill.level}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-secondary transition-all duration-1000 ease-out"
                  style={{ width: inView ? `${skill.level}%` : '0%' }}
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
