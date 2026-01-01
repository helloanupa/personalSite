"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Music2, Menu, X } from 'lucide-react';

const WorkPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'work', href: '#', active: true },
    { name: 'experience', href: '#' },
    { name: 'contact', href: '/contact' },
    { name: 'myArea', href: '#' },
  ];

  const projects = [
    {
      title: "Ceylon Galleria",
      image: "/images/project1.jpg",
      labels: ["React", "Node.js", "MongoDb", "Express", "TailwindCSS"],
      link: "https://github.com/helloanupa/ceylonGalleria#"
    },
    
    {
      title: "Cyber Trust",
      image: "/images/project2.png",
      labels: ["Java", "MySQL", "TailwindCSS"],
      link: "/projects/horizon-atlas"
    },
     {
      title: "Ride Ready",
      image: "/images/project2.png",
      labels: ["HTML", "PHP", "JavaScript", "Css"],
      link: "/projects/horizon-atlas"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans">
      {/* --- HEADER --- */}
      <nav className="sticky top-0 z-50 bg-[#f8f8f8]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium  tracking-tighter cursor-pointer">
            Anupa Amarasekara
          </Link>
          <div className="hidden md:flex space-x-8 text-sm text-gray-500">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`${link.active ? 'text-blue-500' : 'hover:text-black'} transition-colors`}>
                {link.name}
              </Link>
            ))}
          </div>
          <button className="md:hidden p-1 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-xl py-4 z-50">
            <div className="flex flex-col px-8 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className={`text-base ${link.active ? 'text-blue-500 font-medium' : 'text-gray-600'}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- WORK SECTION --- */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Text */}
        <div className="max-w-2xl mb-12">
          <p className="text-gray-500 text-lg leading-snug">
            A collection of projects showcasing my expertise in web development, design, and digital solutions. 
            <span className="text-black font-semibold block mt-1">From startups to enterprise applications</span>
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-medium mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.labels.map((label, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1 rounded-full border border-white/40 text-white text-xs backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* --- IMPROVED LINK BUTTON --- */}
                <Link 
                  href={project.link} 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-blue-500 hover:text-white hover:border-transparent shadow-md transition-all"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto px-6 mt-20 pb-12">
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

export default WorkPage;
