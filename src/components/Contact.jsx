import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section-contact">
      <h2>Contactez-moi</h2>
      <p>
        Vous avez un projet en tête, une offre d'emploi ou vous souhaitez simplement discuter ? 
        N'hésitez pas à m'envoyer un message, je vous répondrai au plus vite !
      </p>
      
      <div className="conteneur-contact">
        <a href="mailto:amouchasahcene11@gmail.com" className="bouton-email">
          ✉️ M'envoyer un email
        </a>
        
        <div className="reseaux-sociaux">
          <a href="https://github.com/ahcene-11" target="_blank" rel="noopener noreferrer">
            Mon GitHub
          </a>
          <a href="https://www.linkedin.com/in/ahc%C3%A8ne-amouchas-a3037a327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqDwBioAwQL2S%2BOToOBKqIg%3D%3D" target="_blank" rel="noopener noreferrer">
            Mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;