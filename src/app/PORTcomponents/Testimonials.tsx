const testimonials = [
  {
    quote: 'Nimra is an exceptional coordinator who brings clarity and motivation to every project.',
    name: 'Ayesha Khan',
    role: 'Product Manager',
  },
  {
    quote: 'Her empathy and organization skills made our team more productive and happier.',
    name: 'Sara Malik',
    role: 'Team Lead',
  },
  {
    quote: 'Nimra consistently delivers results and fosters a positive team environment.',
    name: 'Ali Raza',
    role: 'Client',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-cardbg">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-6 border border-border flex flex-col items-center">
            <p className="text-lg text-textmain mb-4">“{t.quote}”</p>
            <div className="text-secondary font-semibold">{t.name}</div>
            <div className="text-textsoft text-sm">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 