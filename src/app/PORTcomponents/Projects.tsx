import Link from "next/link"; // Import Next

export const experiences = [
  {
    id: 1,
    title: 'Digital Transformation Initiative',
    description: 'Led a cross-functional team to digitize internal workflows, reducing manual effort by 40%.',
    role: 'Project Coordinator',
    outcomes: 'Improved efficiency, faster turnaround, happier teams.',
    year: '2023',
    image: 'https://designshack.net/wp-content/uploads/website-pages-mockup-template-314-1.jpg',
    challenge: 'Legacy systems were inefficient and required excessive manual input.',
    solution: 'Migrated processes to modern digital tools and trained the team.',
    result: '40% reduction in processing time, with increased stakeholder satisfaction.',
    technologies: ['Notion', 'ClickUp', 'Zapier'],
    services: ['Workflow Automation', 'Team Training', 'Process Mapping'],
    integrations: ['Google Workspace', 'Slack'],
    mockups: [
      'https://via.placeholder.com/600x400?text=Mockup+1',
      'https://via.placeholder.com/600x400?text=Mockup+2'
    ],
    features: ['Automated Reporting', 'Team Dashboard', 'Centralized Documentation']
  },
  {
    id: 2,
    title: 'Community Outreach Program',
    description: 'Coordinated logistics and communications for a city-wide event with 500+ participants.',
    role: 'Lead Coordinator',
    outcomes: 'Successful event, positive feedback, increased engagement.',
    year: '2022',
    image: 'https://sketch-cdn.imgix.net/assets/blog/mockup-templates%402x.png?ixlib=rb-4.1.1&fit=max&w=1920&q=95&auto=format&fm=png&s=2bd9cef2da5ed9cbe10bec67076c5031',
    challenge: 'Limited awareness and low expected turnout.',
    solution: 'Implemented targeted outreach campaigns and community partnerships.',
    result: 'Turnout exceeded expectations with overwhelmingly positive feedback.',
    technologies: ['Mailchimp', 'Airtable'],
    services: ['Event Management', 'Marketing Campaigns'],
    integrations: ['Eventbrite', 'Facebook Events'],
    mockups: [
      'https://via.placeholder.com/600x400?text=Mockup+1'
    ],
    features: ['Real-time Updates', 'RSVP Integration']
  },
  {
    id: 3,
    title: 'Agile Implementation',
    description: 'Introduced agile practices to a traditional team, resulting in 30% faster project delivery.',
    role: 'Agile Facilitator',
    outcomes: 'Faster delivery, improved team morale.',
    year: '2021',
    image: 'https://barnimages.com/wp-content/uploads/2022/12/mckups-2000x1204.png',
    challenge: 'Resistance to change from a waterfall mindset.',
    solution: 'Led agile workshops and adopted scrum methodologies.',
    result: 'Increased sprint velocity and improved team satisfaction.',
    technologies: ['Jira', 'Confluence'],
    services: ['Agile Coaching', 'Scrum Training'],
    integrations: ['Slack', 'Github'],
    mockups: [],
    features: ['Burndown Charts', 'Daily Standups']
  }
];

const Projects = () => {
  return (
    <section id="experience" className="py-20 bg-cardbg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-10">Experience &amp; Projects</h2>

        <div className="relative border-l-4 border-primary/40 pl-8 space-y-10">
          {experiences.map((exp, idx) => (
         
          <Link key={exp.id} href={`/experience/${exp.id}`} className="block group transition-all duration-300">
         <div key={exp.title} className="relative group transition-all duration-300">
              <div className="absolute -left-5 top-2 w-4 h-4 bg-secondary rounded-full border-4 border-cardbg" />

              <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                {/* Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                {/* Text content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-secondary">{exp.title}</h3>
                    <span className="text-xs text-textsoft font-medium">{exp.year}</span>
                  </div>

                  <p className="text-textmain mb-2">{exp.description}</p>
                  <div className="text-sm text-textsoft mb-1">
                    Role: <span className="font-medium text-textmain">{exp.role}</span>
                  </div>
                  <div className="text-sm text-cta">Outcomes: {exp.outcomes}</div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
