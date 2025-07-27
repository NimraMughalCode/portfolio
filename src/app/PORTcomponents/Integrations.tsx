const caseStudies = [
  {
    title: 'Remote Team Collaboration',
    challenge: 'Team members struggled with communication and missed deadlines.',
    solution: 'Implemented Notion and weekly standups to streamline updates.',
    result: 'Project delivery improved by 25%, team satisfaction increased.',
    visual: '/globe.svg',
  },
  {
    title: 'Process Automation',
    challenge: 'Manual data entry was time-consuming and error-prone.',
    solution: 'Automated reporting using Excel macros and Zapier.',
    result: 'Saved 10+ hours/week, reduced errors by 80%.',
    visual: '/window.svg',
  },
];

const Integrations = () => {
  return (
    <section id="portfolio" className="py-20 bg-white/60 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-10">Case Studies / Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-cardbg rounded-xl shadow-lg p-6 border border-border flex flex-col items-center">
              <img src={cs.visual} alt={cs.title} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">{cs.title}</h3>
              <div className="mb-2 text-textmain"><span className="font-medium text-textsoft">Challenge:</span> {cs.challenge}</div>
              <div className="mb-2 text-textmain"><span className="font-medium text-textsoft">Solution:</span> {cs.solution}</div>
              <div className="mb-2 text-cta"><span className="font-medium">Result:</span> {cs.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
  