import React from 'react';
import { Affiliation } from '../types';

interface AffiliationCardProps {
  affiliation: Affiliation;
}

export const AffiliationCard: React.FC<AffiliationCardProps> = ({ affiliation }) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all duration-300">
      <div className="flex-shrink-0 mr-4 bg-white p-2 rounded-full shadow-sm border border-slate-100 w-16 h-16 flex items-center justify-center">
        {affiliation.logoUrl ? (
            <img 
                src={affiliation.logoUrl} 
                alt={`${affiliation.institution} logo`} 
                className="w-full h-full object-contain"
            />
        ) : (
            <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xl">
                {affiliation.institution[0]}
            </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
            <h4 className="text-lg font-bold text-slate-900">{affiliation.institution}</h4>
            <span className="text-sm text-academic-600 font-medium whitespace-nowrap bg-academic-50 px-2 py-0.5 rounded">
                {affiliation.period}
            </span>
        </div>
        <p className="text-slate-800 font-medium mb-1">{affiliation.role}</p>
        <p className="text-sm text-slate-500">{affiliation.location}</p>
      </div>
    </div>
  );
};