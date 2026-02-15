import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // On importe les icônes !

function Contact() {
  return (
    <footer id="contact" className="section-contact">
      <div className="footer-content">
        
        {/* Partie Gauche : Le texte */}
        <div className="footer-texte">
          <h2>Contactez-moi</h2>
          <p>
            Vous avez un projet en tête, une opportunité ou vous souhaitez simplement discuter ? 
            N'hésitez pas à m'envoyer un message, je vous répondrai au plus vite !
          </p>
        </div>
        
        {/* Partie Droite : Les boutons et liens */}
        <div className="footer-actions">
          <a href="mailto:amouchasahcene11@gmail.com" className="bouton-email">
            <FaEnvelope /> M'envoyer un email
          </a>
          
          <div className="reseaux-sociaux">
            <a href="https://github.com/ahcene-11" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
              <FaGithub size="2em" />
            </a>
            {/* J'ai raccourci visuellement ton lien LinkedIn, mais il fonctionnera pareil ! */}
            <a href="https://www.linkedin.com/in/ahc%C3%A8ne-amouchas-a3037a327" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
              <FaLinkedin size="2em" />
            </a>
          </div>
        </div>

      </div>
      
      {/* La toute petite ligne en bas */}
      <div className="footer-bottom">
        <p>&copy; 2026 Ahcène Amouchas. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Contact;