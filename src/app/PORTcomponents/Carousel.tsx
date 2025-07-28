'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    content: "TechFlow transformed our business with their innovative web application. The team delivered beyond our expectations and continues to provide excellent support.",
    rating: 5,
    image: "/next.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    company: "InnovateLab",
    content: "Working with TechFlow was a game-changer for our startup. Their expertise in no-code solutions helped us launch our MVP in record time.",
    rating: 5,
    image: "/vercel.svg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "The mobile app developed by TechFlow exceeded all our expectations. Their attention to detail and user experience design is outstanding.",
    rating: 5,
    image: "/file.svg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, DigitalFlow",
    company: "DigitalFlow",
    content: "TechFlow's consulting services helped us optimize our development process. Their expertise in modern technologies is unmatched.",
    rating: 5,
    image: "/globe.svg"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about working with TechFlow.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Quote size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-accent fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-dark-700 mb-6 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-dark-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-dark-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} className="text-dark-600" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} className="text-dark-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel; 