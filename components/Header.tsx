
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600 tracking-tight">
          MJH<span className="text-slate-900">OSSEN</span>
        </a>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-sm font-medium hover:text-indigo-600 transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#experience" className="text-sm font-medium hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#contact" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Hire Me
          </a>
        </nav>
        
        <button className="md:hidden text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
