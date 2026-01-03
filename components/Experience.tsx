
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional <span className="text-indigo-600">Journey</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              Working with global clients to deliver top-notch web solutions and IT infrastructure support.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
                <div className="text-2xl font-bold text-indigo-600">Level 2</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Fiverr Verified</div>
             </div>
          </div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="group relative pl-8 md:pl-0">
              {/* Timeline dot and line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10 hidden md:block"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                        <p className="text-indigo-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1.5 bg-white rounded-full text-sm font-bold text-slate-600 shadow-sm border border-slate-100">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                          <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
