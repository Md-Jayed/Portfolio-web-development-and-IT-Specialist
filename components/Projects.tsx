
import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Live <span className="text-indigo-600">Portfolio</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A selection of live websites I've developed and managed for international clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    {project.title[0]}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
                >
                  Visit Live Site
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="h-2 w-0 bg-indigo-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Behance Link Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Explore My Design Projects</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Beyond live sites, I showcase my UI/UX concepts, brand identities, and visual studies on Behance.
            </p>
            <a 
              href={`https://${PERSONAL_INFO.behance}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all hover:-translate-y-1 shadow-xl"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 13h-4v.6h4v-.6zm.5-3.3c-.6-.7-1.5-1.1-2.8-1.1-1.4 0-2.4.5-3.1 1.3-.7.9-1 2-1 3.4s.3 2.6 1 3.4c.7.8 1.8 1.2 3.1 1.2 1.4 0 2.4-.3 3.1-1 .7-.7 1.1-1.6 1.2-2.7h-2.1c-.1.6-.3 1.1-.6 1.4-.3.4-.8.5-1.5.5s-1.2-.2-1.5-.7c-.3-.4-.5-1.1-.5-2.1h6.4c0-1.7-.2-2.9-.7-3.6zm-4.3 2c.1-.8.2-1.4.5-1.8.3-.4.7-.6 1.2-.6s.9.2 1.2.6c.3.4.4 1 .5 1.8h-3.4zm-10.8 1.9c-.4.5-.9.7-1.7.7h-2.1v-2.8h2.1c.7 0 1.3.2 1.7.7.4.5.6 1 .6 1.4 0 .5-.2 1-.6 1.4zm-1.7-5.5c.7 0 1.2.2 1.5.5.3.3.5.7.5 1.2 0 .5-.2.9-.5 1.2-.3.3-.8.5-1.5.5h-2.1v-3.4h2.1zm5.1 4.5c.6-.7.9-1.5.9-2.5s-.3-1.9-1-2.5c-.7-.6-1.6-.9-2.8-.9h-5.2v10.9h5.2c1.3 0 2.3-.3 3-1 .7-.7 1.1-1.6 1.1-2.7-.1-.6-.2-1-.3-1.3z"/>
              </svg>
              View My Behance Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
