import { useRouter } from 'next/router';
import Link from 'next/link';

type ProjectType = {
  title: string;
  description: string;
  tools: string[];
  details: string;
  visual: string;
};

const projectData: Record<string, ProjectType> = {
  'crm-platform': {
    title: 'Custom CRM Platform',
    description: 'A scalable CRM built for a real estate client using Bubble.io. Includes automation, dashboards, and integrations.',
    tools: ['Bubble.io', 'Zapier'],
    details: 'This project involved building a custom CRM tailored to the client’s workflow, automating lead management, and integrating third-party services for seamless operations.',
    visual: '/globe.svg',
  },
  'mobile-app': {
    title: 'Event Management Mobile App',
    description: 'Flutterflow.io powered app for event organizers to manage schedules, tickets, and live updates.',
    tools: ['Flutterflow.io', 'Firebase'],
    details: 'Developed a cross-platform mobile app for event organizers, featuring real-time updates, ticketing, and push notifications.',
    visual: '/window.svg',
  },
  'ecommerce-nextjs': {
    title: 'E-commerce Storefront',
    description: 'Modern e-commerce site with custom admin dashboard, built with Next.js for a fashion brand.',
    tools: ['Next.js', 'Stripe'],
    details: 'Created a fast, responsive e-commerce site with a custom admin dashboard, product management, and secure Stripe payments.',
    visual: '/next.svg',
  },
};

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = slug && typeof slug === 'string' ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-secondary mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-cardbg">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="text-primary underline mb-6 inline-block">&larr; Back to Portfolio</Link>
        <div className="bg-white/80 rounded-xl shadow-lg p-8 border border-border">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <img src={project.visual} alt={project.title} className="w-32 h-32 rounded-lg shadow-md mb-4 md:mb-0" />
            <div>
              <h1 className="text-3xl font-semibold text-textmain mb-2 italic">{project.title}</h1>
              <p className="text-textmain mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tools.map((tool: string) => (
                  <span key={tool} className="px-3 py-1 bg-primary/30 text-textmain rounded-full text-sm italic border border-border font-medium">{tool}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-textmain text-lg mb-4">{project.details}</div>
          <div className="italic text-textsoft">*More visuals and case study details coming soon!*</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail; 