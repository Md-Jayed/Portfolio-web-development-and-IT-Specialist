
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical <span className="text-indigo-600">Proficiency</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit across development, infrastructure, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional specialized badges */}
        <div className="mt-16 p-8 bg-indigo-600 rounded-3xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Automation & AI Specialist</h3>
              <p className="opacity-80">I leverage N8N, Machine Learning, and LLM tools to streamline business processes.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl font-semibold border border-white/20">N8N Automations</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl font-semibold border border-white/20">AI Agents</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl font-semibold border border-white/20">Workflow Ops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
