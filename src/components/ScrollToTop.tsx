import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - Composant qui permet de remonter automatiquement en haut de la page
 * lors d'un changement de route dans l'application
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Quand le chemin de l'URL change, remonte la page en haut
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
};

export default ScrollToTop;
