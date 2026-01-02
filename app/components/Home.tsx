"use client"; // This must be the very first line

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Music2, Menu, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'home', href: '/', active: true },
    { name: 'work', href: '/work' },
    { name: 'experience', href: '#' },
    { name: 'contact', href: '/contact' },
    { name: 'myArea', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f8f8f8]/80 backdrop-blur-md border-b border-gray-100 md:border-none">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-medium tracking-tighter cursor-pointer">
            Anupa Amarasekara
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm text-gray-500">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${link.active ? 'text-blue-500' : 'hover:text-black'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden p-1 text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Using Menu icon for the hamburger effect from your image */}
            {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-xl py-4 transition-all">
            <div className="flex flex-col px-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base ${link.active ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-black'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Image */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Ensure you have an image in your public folder or use a placeholder */}
            <img 
              src="/images/myImage.png" 
              alt="Dilshan" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 text-[15px] leading-relaxed text-gray-700">
          <p>
            I'm <span className="font-semibold text-black text-lg">Anupa Amarasekara</span>,an Information Technology undergraduate with a strong passion for building meaningful digital solutions that combine technology, design, and real-world impact. My journey in development began in 2019 and has grown into a focused pursuit of excellence across web development, UI/UX design, application development, and emerging technologies. I am currently reading for a BSc (Hons) in Information Technology at SLIIT, having completed my secondary education at Ananda College, where my interest in engineering and technology first took shape.

                
                <br></br><br></br>My technical interests extend beyond traditional development into areas such as Internet of Things (IoT), smart embedded systems, and API-driven architectures. I have earned certifications in C++, serverless application design using Amazon API Gateway, generative AI business strategy, and digital transformation, reflecting my commitment to continuous learning and adaptability in a fast-evolving industry. I enjoy working at the intersection of technology and strategy, where scalable systems, clean interfaces, and thoughtful user experiences come together.</p>
                Beyond academics and projects, I actively contribute to the tech community by sharing knowledge with 1,000+ learners on Instagram, fostering collaboration, curiosity, and growth among aspiring developers. I value discipline, consistency, and long-term thinking, and I approach every opportunity as a chance to learn and refine my craft.
          {/* ... Add the rest of the text from the image here ... */}
          
          <p className="italic text-gray-500 pt-4">
            <br></br> 
             I am always open to meaningful collaborations, internships, and projects that challenge me to grow while contributing value to people, products, and organizations.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 mt-12 pb-12">
        <div className="py-8 border-t border-gray-200 text-center space-y-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
            2019-2026 | designed by Anupa Denil Amarasekara
          </p>
            <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-black transition-colors"
            >
              <Facebook size={20} />
            </a>
          
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-black transition-colors"
            >
              <Instagram size={20} />
            </a>
          
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black transition-colors"
            >
              <Linkedin size={20} />
            </a>
          
              </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;