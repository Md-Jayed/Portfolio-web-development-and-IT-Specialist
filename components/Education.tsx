
import React from 'react';
import { EDUCATION_LIST } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Educational <span className="text-indigo-400">Background</span>
          </h2>
          
          <div className="space-y-8">
            {EDUCATION_LIST.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center border border-indigo-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-indigo-400 font-medium text-lg">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-3xl font-bold text-white mb-1">GPA {edu.gpa}</div>
                  <div className="text-slate-400 font-medium">{edu.date}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <div className="text-indigo-400 font-bold text-lg mb-1">Technical Logic</div>
                <p className="text-sm text-slate-400">Core CS Fundamentals</p>
             </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <div className="text-indigo-400 font-bold text-lg mb-1">Systems Engineering</div>
                <p className="text-sm text-slate-400">Architecture & Design</p>
             </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <div className="text-indigo-400 font-bold text-lg mb-1">Data Management</div>
                <p className="text-sm text-slate-400">DB Design & SQL</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
