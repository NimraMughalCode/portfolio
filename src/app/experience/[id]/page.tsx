'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { experiences } from '@/app/PORTcomponents/Projects';
import { notFound } from 'next/navigation';

export default function ExperiencePage() {
  const params = useParams();
  const id = params?.id;
  const experience = experiences.find((exp) => exp.id === parseInt(id as string));

  if (!experience) {
    return notFound(); // fallback 404
  }

  return (
    <div className="pt-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 bg-white shadow-xl rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-primary mb-6">{experience.title}</h1>

          <div className="overflow-hidden rounded-xl shadow-md mb-8 hover:scale-[1.01] transition-transform">
            <Image
              src={experience.image}
              alt={experience.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm text-textsoft">
            <p><span className="font-semibold text-gray-700">Role:</span> {experience.role}</p>
            <p><span className="font-semibold text-gray-700">Year:</span> {experience.year}</p>
          </div>

          <p className="text-lg text-gray-800 mb-6 leading-relaxed">{experience.description}</p>

          <div className="space-y-8 text-gray-800">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">Challenge</h2>
              <p className="leading-relaxed">{experience.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">Solution</h2>
              <p className="leading-relaxed">{experience.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">Result</h2>
              <p className="leading-relaxed">{experience.result}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Optional: Mockups Section */}
          {/* {experience.mockups.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-primary mb-4">Mockups</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.mockups.map((mockup, i) => (
                  <Image
                    key={i}
                    src={mockup}
                    width={400}
                    height={300}
                    className="rounded-xl shadow"
                    alt={`Mockup ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}
