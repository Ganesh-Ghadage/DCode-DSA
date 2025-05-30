import React from 'react';

interface Props {
  solved: number;
  total: number;
  size?: number;
}

const ProblemProgressCircle: React.FC<Props> = ({ solved, total, size = 170 }) => {
  const radius = size / 2 - 10; 
  const circumference = 2 * Math.PI * radius;
  const progress = total === 0 ? 0 : Math.min((solved / total) * 100, 100);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-base-200 flex flex-col items-center justify-center m-5">
      <h2 className="text-lg font-semibold mb-4">Total Problem Solved</h2>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb" // Tailwind's base-200 (light gray)
          strokeWidth="15"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#16a34a" // Tailwind's green-500
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute text-center text-xl mt-[40px] font-medium w-full">
        <div><span className='text-4xl font-bold'>{solved}</span> / {total}</div>
        <div className="text-xs text-gray-500">Solved</div>
      </div>
    </div>
  );
};

export default ProblemProgressCircle;
