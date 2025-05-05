'use client';
import React from 'react';
import "./Testimonial.css"

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Chartered Accountant',
    quote: 'EZY Tax simplifies the most complex scrutiny cases with ease. A must-have for professionals!',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4.8,
  },
  {
    name: 'Anjali Menon',
    role: 'Startup Founder',
    quote: 'Their AI-assisted approach saved us time and legal hassle. Truly impressive support!',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5.0,
  },
  {
    name: 'Vikram Iyer',
    role: 'Retired IRS Officer',
    quote: 'EZY Tax bridges the gap between taxpayers and the system. Reliable and efficient.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4.7,
  },
  {
    name: 'Amitav Bose',
    role: 'Small Business Owner',
    quote: 'The litigation support I got from EZY Tax was professional and reassuring.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4.9,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonial-heading">What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
              <span className="testimonial-rating">⭐ {testimonial.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
