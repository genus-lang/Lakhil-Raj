import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/e8e3443ad2e96e32e3316d6894909d2066f5f1ed.png';

export function Logo() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Run animation only once on mount
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-400 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <img 
        src={logoImage} 
        alt="Lakhil Raj Welfare Foundation Logo" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}
