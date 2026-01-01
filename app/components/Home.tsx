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
            I'm <span className="font-semibold text-black text-lg">Anupa Amarasekara</span>, Anupa Denil is a motivated software engineer and web developer with a strong academic foundation in Information Technology and a passion for building modern, user-focused applications. Currently pursuing a BSc in Information Technology, Anupa has practical experience in full-stack web development, working with technologies such as JavaScript, React, C++, and backend frameworks. With a strong focus on clean code, scalability, and performance, Anupa approaches development with precision and a problem-solving mindset.

                <br></br><br></br><br></br>Driven by continuous learning and professional growth, Anupa actively keeps up with emerging technologies and industry best practices. Known for adaptability, attention to detail, and effective communication, Anupa performs well in both independent and collaborative environments. With a clear long-term goal of becoming a well-rounded software professional, Anupa seeks opportunities to apply technical expertise, gain real-world experience, and contribute meaningful, high-quality solutions to forward-thinking teams through technology.</p>
          {/* ... Add the rest of the text from the image here ... */}
          <p className="italic text-gray-500 pt-4">
            Hope you will enjoy this site. There are mini-games, puzzles, easter eggs and questions which will haunt you for the rest of your life.
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
            <Facebook size={20} className="hover:text-black cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-black cursor-pointer transition-colors" />
            <Linkedin size={20} className="hover:text-black cursor-pointer transition-colors" />
            <Youtube size={20} className="hover:text-black cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-black cursor-pointer transition-colors" />
            <Music2 size={20} className="hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;