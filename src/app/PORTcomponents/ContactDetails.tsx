import { Mail, Linkedin, PhoneCall, CalendarDays } from 'lucide-react';

const ContactDetails = () => {
  const contacts = [
    {
      icon: <Linkedin size={28} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nimraasif/',
    },
    {
      icon: <PhoneCall size={28} />,
      label: 'WhatsApp',
      url: 'https://wa.me/923000000000',
    },
    {
      icon: <Mail size={28} />,
      label: 'Email',
      url: 'mailto:nimra@example.com',
    },
    {
      icon: <CalendarDays size={28} />,
      label: 'Calendly',
      url: 'https://calendly.com/nimraasif/15min',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white/60 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-10">Contact Links</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-cardbg/60 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-xl hover:bg-white/80 transition-all"
            >
              <div className="text-primary group-hover:text-secondary transition">
                {contact.icon}
              </div>
              <span className="text-lg font-medium text-gray-800 group-hover:text-secondary transition">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
