
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Client <span className="text-indigo-600">Feedback</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hear from businesses across Canada, USA, and beyond about my commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-indigo-600 opacity-20 text-6xl font-serif">“</div>
              
              <div className="flex-grow mb-8 relative z-10">
                <p className="text-slate-600 italic leading-relaxed text-lg">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  {review.name[0].toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fiverr Stats */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Want to see more reviews?</h3>
              <p className="text-slate-500">I am a Level 2 Seller on Fiverr with over 110 completed projects and a stellar rating.</p>
           </div>
           <a 
             href="https://www.fiverr.com/jayed320" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-10 py-5 bg-[#1dbf73] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-green-100 flex items-center gap-3"
           >
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
               <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 16.5h-1.5v-7h1.5v7zm1.5-7.75c0-.414.336-.75.75-.75h2.25v1.5h-2.25v.75h2.25v1.5h-2.25v1.5h2.25v1.5h-3v-6zm7.5 7.75h-1.5v-7h1.5v7z"/>
             </svg>
             Order on Fiverr
           </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
