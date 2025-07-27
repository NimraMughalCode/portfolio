const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cardbg">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-8">Contact</h2>
        <form className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-8 space-y-6 border border-border">
          <div>
            <label className="block text-textmain font-medium mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded border border-border bg-cardbg text-textmain focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label className="block text-textmain font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded border border-border bg-cardbg text-textmain focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label className="block text-textmain font-medium mb-1">Message</label>
            <textarea className="w-full px-4 py-2 rounded border border-border bg-cardbg text-textmain focus:outline-none focus:ring-2 focus:ring-primary" rows={4} required />
          </div>
          <button type="submit" className="btn-primary w-full hover:scale-105">Send Message</button>
        </form>
        <div className="mt-8 flex flex-col items-center gap-2 text-textsoft">
          <a href="mailto:nimra.asif@email.com" className="hover:text-primary">nimra.asif@email.com</a>
          <a href="https://linkedin.com/in/nimraasif" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  