'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    content: "Trojanix transformed our business with their innovative web application. The team delivered beyond our expectations and continues to provide excellent support.",
    rating: 5,
    image: "/next.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    company: "InnovateLab",
    content: "Working with Trojanix was a game-changer for our startup. Their expertise in no-code solutions helped us launch our MVP in record time.",
    rating: 5,
    image: "/vercel.svg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "The mobile app developed by Trojanix exceeded all our expectations. Their attention to detail and user experience design is outstanding.",
    rating: 5,
    image: "/file.svg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, DigitalFlow",
    company: "DigitalFlow",
    content: "Trojanix's consulting services helped us optimize our development process. Their expertise in modern technologies is unmatched.",
    rating: 5,
    image: "/globe.svg"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? 'bg-primary w-8' : 'bg-gray-300'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Trojanix.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4 outline-none">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 h-full">
                  <div className="flex flex-col md:flex-row items-start gap-6 flex-wrap">
                    {/* Icon */}
                    <div className="flex-shrink">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Quote size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} size={20} className="text-accent fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-dark-700 mb-6 leading-relaxed">
                        "{t.content}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-dark-900">
                          {t.name}
                        </div>
                        <div className="text-dark-600">
                          {t.role} at {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}