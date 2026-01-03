
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
               Professional <span className="text-indigo-600">Summary</span>
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               I am a dedicated IT Professional and Web Developer with a Bachelor's degree in Computer Science and Engineering. My unique blend of skills covers both building the digital infrastructure (web development) and maintaining the physical/logical systems that power it (IT support).
             </p>
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
               With a proven track record on platforms like Fiverr (Level 2 Seller) and direct freelance roles for international companies, I specialize in creating fast, SEO-optimized, and high-converting e-commerce sites using WordPress and Shopify. Additionally, my background in IT support ensures that any system I work on is secure, reliable, and efficient.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                 <div className="w-10 h-10 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3v12m0 0v8m0-8h8" />
                    </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Multilingual</h4>
                   <p className="text-sm text-slate-500">Fluent in English, Arabic, and Hindi.</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                 <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900">Security First</h4>
                   <p className="text-sm text-slate-500">Cybersecurity and Data Backup expert.</p>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-slate-100 rounded-2xl flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-4xl font-bold text-indigo-600">110+</div>
                   <div className="text-sm text-slate-500 font-medium">Fiverr Projects</div>
                 </div>
              </div>
              <div className="h-64 bg-indigo-600 rounded-2xl flex items-center justify-center p-6 text-white text-center">
                 <div>
                   <div className="text-4xl font-bold mb-2">BSc</div>
                   <div className="text-sm opacity-80 font-medium">Computer Science & Engineering</div>
                 </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-slate-900 rounded-2xl flex items-center justify-center p-6 text-white text-center">
                 <div>
                   <div className="text-3xl font-bold mb-2">Expert</div>
                   <div className="text-sm opacity-80 font-medium">Shopify & WordPress Support</div>
                 </div>
              </div>
              <div className="h-48 bg-blue-500 rounded-2xl flex items-center justify-center p-6 text-white text-center">
                 <div>
                   <div className="text-4xl font-bold mb-2">Level 2</div>
                   <div className="text-sm opacity-80 font-medium">Fiverr Seller Status</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
