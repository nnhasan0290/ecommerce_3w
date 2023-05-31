import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        // Scrolling down
        setScrollDirection('down');
      } else {
        // Scrolling up
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;