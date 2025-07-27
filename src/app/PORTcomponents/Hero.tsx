'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
strings: [
  `<span class='text-gray-500'>Hi, I'm</span> <span class='text-gray-700'>Nimra Asif</span> <span class='text-gray-500'> -</span><br /><span class='text-pink-500'>Project Coordinator <span class='text-gray-500'> &amp;</span> <span class='text-purple-900'>Outsourcing Partner</span></span>`
],

      
      typeSpeed: 50,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero mt-[75px] relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/60 via-cardbg/80 to-cta/40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-cardbg/80 to-cta/30 mix-blend-multiply pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto px-6 py-16 gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-4 leading-tight">
            <span ref={typedRef}></span>
          </h1>
          <p className="mt-4 text-xl text-textmain font-medium italic">
            Delivering client projects from idea to launch — specializing in Bubble.io, Flutterflow.io, and Next.js.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cta transition-transform">Let&apos;s Work Together</a>
            <a href="#my-projects" className="btn-primary bg-cta text-textmain hover:bg-secondary">View My Projects</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full shadow-xl overflow-hidden border-4 border-primary/40 bg-white/30 backdrop-blur-lg" style={{ width: '18rem', height: '18rem' }}>
            <Image src="/image.jpg" alt="Nimra Asif" width={288} height={288} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Decorative SVG blob */}
      <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E4CBE8" fillOpacity="0.3" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,218.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  );
};

export default Hero;
