import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return null;
};

export default ScrollHandler;