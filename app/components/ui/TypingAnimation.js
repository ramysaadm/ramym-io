'use client';

import { useState, useEffect } from 'react';

export default function TypingAnimation({ roles }) {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[typingIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypingText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypingIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [typingIndex, roles]);

  return (
    <span className="border-r-2 border-orange-400 pr-1 animate-pulse">
      {typingText}
    </span>
  );
}
