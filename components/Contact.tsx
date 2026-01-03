
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // Access key from environment variable (Netlify)
    // Use process.env as it is expected to be available in this environment
    const accessKey = (process.env as any).VITE_WEB3FORMS_KEY || 'bf2d4141-b91b-4a7e-a5f9-ec496e9d8fec';
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('ERROR');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage('Failed to connect to the server. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative overflow-hidden shadow-2xl shadow-indigo-200">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex-1 z-10 text-white">
                <h2 className="text-4xl font-bold mb-6">Let's build something <span className="underline decoration-indigo-400 underline-offset-8">amazing</span> together.</h2>
                <p className="text-indigo-100 mb-12 text-lg leading-relaxed">
                  Whether you need a full-scale e-commerce solution, a custom automation workflow, or ongoing IT support, I'm ready to help. Reach out directly or via my professional profiles.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20">📧</div>
                    <div>
                      <div className="text-sm font-semibold opacity-70 uppercase tracking-widest">Email Me</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-bold hover:text-indigo-200 transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20">📱</div>
                    <div>
                      <div className="text-sm font-semibold opacity-70 uppercase tracking-widest">Call Me</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl font-bold hover:text-indigo-200 transition-colors">{PERSONAL_INFO.phone}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20">📍</div>
                    <div>
                      <div className="text-sm font-semibold opacity-70 uppercase tracking-widest">Location</div>
                      <div className="text-xl font-bold">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="flex-1 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl z-10">
                {status === 'SUCCESS' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-3xl">✓</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setStatus('IDLE')}
                      className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="subject" value={`New Portfolio Lead from ${PERSONAL_INFO.name}`} />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                          <input 
                            required
                            name="name"
                            type="text" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                            placeholder="John Doe" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                            placeholder="john@example.com" 
                          />
                      </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Project Type</label>
                        <select 
                          name="project_type"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option>Web Development</option>
                          <option>E-commerce Support</option>
                          <option>IT Infrastructure</option>
                          <option>Automation / AI Tools</option>
                          <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                        <textarea 
                          required
                          name="message"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all h-32" 
                          placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {status === 'ERROR' && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <button 
                      disabled={status === 'LOADING'}
                      type="submit" 
                      className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'LOADING' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
