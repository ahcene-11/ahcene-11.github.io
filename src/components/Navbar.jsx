import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`menu-navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <strong>AHCENE AMOUCHAS</strong>
      </div>
      <ul className="liens-menu">
        <li><a href="#accueil">ACCUEIL</a></li>
        <li><a href="#apropos">A PROPOS</a></li>
        <li><a href="#parcours">PARCOURS</a></li>
        <li><a href="#competences">COMPETENCES</a></li>
        <li><a href="#projets">PROJETS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;