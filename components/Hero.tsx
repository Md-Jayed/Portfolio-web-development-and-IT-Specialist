
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-full">
            Available for Freelance & Full-time Roles
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A professional <span className="font-semibold text-slate-900">Web Developer</span> & <span className="font-semibold text-slate-900">IT Support Specialist</span> with over 5 years of experience building responsive websites and maintaining robust IT operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 text-center">
              View My Work
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
              Let's Talk
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all text-sm font-bold text-slate-700">
             <div className="uppercase tracking-widest text-slate-400 text-xs">Expert in:</div>
             <div>WordPress</div>
             <div>Shopify</div>
             <div>React</div>
             <div>IT Support</div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">
          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px]">
            {/* Animated Background Orbs and Rings */}
            <div className="absolute inset-0 border-2 border-indigo-200 rounded-full scale-110 opacity-30 animate-spin-slow"></div>
            <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-full scale-125 opacity-20"></div>
            
            {/* The Circle Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-[10px] border-white shadow-2xl relative z-10 bg-white flex items-center justify-center">
              <img 
                src={PERSONAL_INFO.photoUrl} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top scale-110 translate-y-2"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-12 -right-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/50 min-w-[150px]">
               <div className="text-indigo-600 font-bold text-xl leading-none">110+ Projects</div>
               <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Global Delivery</div>
            </div>
            <div className="absolute bottom-20 -left-16 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/50 min-w-[150px]">
               <div className="text-blue-600 font-bold text-xl leading-none">5+ Years</div>
               <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Professional Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
