'use client';

import { useState, useEffect } from 'react';

export default function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 50;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        clearInterval(timer);
        return target;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
      <div className="text-3xl font-bold text-orange-400 mb-2">
        {Math.floor(count)}
        {target > 10 ? '+' : ''}
      </div>
      <div className="text-gray-300 text-sm">{label}</div>
    </div>
  );
}
