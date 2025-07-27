const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-cardbg relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-6">About Me</h2>
        <p className="text-lg text-textmain text-center mb-10">
          I&apos;m Nimra Asif, a <span className="italic text-secondary">project coordinator</span> and <span className="italic text-cta">outsourcing partner</span> who thrives on turning complex ideas into actionable plans for clients worldwide. I specialize in <span className="font-semibold text-textmain">delivering projects end-to-end</span>, from ideation to launch, ensuring quality and client satisfaction at every step. My journey has taken me from organizing local community events to delivering high-impact digital solutions for businesses and entrepreneurs. <span className="italic text-secondary">Collaboration, transparency, and results</span> are at the heart of every project I lead or outsource.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 bg-white/40 backdrop-blur-lg rounded-xl shadow-md p-6 border border-border">
            <h3 className="text-xl font-medium text-secondary mb-2">My Values</h3>
            <ul className="list-disc pl-5 text-textsoft space-y-1">
              <li><span className="italic">Empathy-driven leadership</span></li>
              <li><span className="italic">Clear, honest communication</span></li>
              <li><span className="italic">Results-oriented planning</span></li>
              <li><span className="italic">Continuous improvement</span></li>
              <li><span className="italic">Building trust within teams & clients</span></li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="relative h-48 w-full flex items-center justify-center">
              {/* Timeline/Journey SVG */}
              <svg width="100%" height="100%" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 160 Q 100 20 200 90 Q 300 160 380 40" stroke="#DB9EAA" strokeWidth="4" fill="none" />
                <circle cx="20" cy="160" r="8" fill="#E4CBE8" />
                <circle cx="200" cy="90" r="8" fill="#FFBBA4" />
                <circle cx="380" cy="40" r="8" fill="#DB9EAA" />
              </svg>
              <div className="absolute left-0 bottom-0 text-xs text-textsoft">Community Events</div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-textsoft">Agile Teams</div>
              <div className="absolute right-0 top-0 text-xs text-textsoft">Digital Solutions & Outsourcing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
  