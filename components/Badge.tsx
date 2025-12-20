import React from 'react';

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-academic-100 text-academic-800 mr-2 mb-2 border border-academic-100">
      {text}
    </span>
  );
};