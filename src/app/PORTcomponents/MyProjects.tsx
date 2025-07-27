import Link from 'next/link';

const myProjects = [
  {
    slug: 'crm-platform',
    title: 'Custom CRM Platform',
    description: 'A scalable CRM built for a real estate client using Bubble.io. Includes automation, dashboards, and integrations.',
    tools: ['Bubble.io', 'Zapier'],
  },
  {
    slug: 'mobile-app',
    title: 'Event Management Mobile App',
    description: 'Flutterflow.io powered app for event organizers to manage schedules, tickets, and live updates.',
    tools: ['Flutterflow.io', 'Firebase'],
  },
  {
    slug: 'ecommerce-nextjs',
    title: 'E-commerce Storefront',
    description: 'Modern e-commerce site with custom admin dashboard, built with Next.js for a fashion brand.',
    tools: ['Next.js', 'Stripe'],
  },
];

const MyProjects = () => (
  <section id="my-projects" className="py-20 bg-white/80">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {myProjects.map((proj) => (
          <Link key={proj.slug} href={`/projects/${proj.slug}`} className="block bg-cardbg border border-border rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
            <h3 className="text-xl font-semibold text-textmain group-hover:text-secondary mb-2 italic">{proj.title}</h3>
            <p className="text-textmain mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proj.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-primary/30 text-textmain rounded-full text-sm italic border border-border font-medium">{tool}</span>
              ))}
            </div>
            <span className="text-cta font-semibold italic">View Details &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default MyProjects; 