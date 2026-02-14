import './Parcours.css';

function Parcours() {
  return (
    <section id="parcours" className="section-parcours">
      <h2>Mon Parcours</h2>
      <div className="timeline">
        
        <div className="timeline-item">
          <span className="date">2025 - Présent</span>
          <h3>Master Génie de l'informatique logicielle</h3>
          <p>Université de Rouen Normandie</p>
          <p>
            <strong>Garantir la qualité et la stabilité à grande échelle.</strong><br/>
            Actuellement en Master, j'approfondis l'architecture des systèmes complexes (modélisation UML) et la production d'un code robuste et maintenable (principes SOLID). J'évolue au sein d'équipes utilisant la méthodologie Agile Scrum pour livrer de la valeur rapidement. J'intègre également les pratiques d'automatisation (DevOps), ce qui me permet d'assurer aux entreprises des mises en ligne fluides, sécurisées et sans interruption de service.
          </p>
        </div>

        <div className="timeline-item">
          <span className="date">2022 - 2025</span>
          <h3>Licence Informatique</h3> 
          <p>Université de Rouen Normandie</p>
          <p>
            <strong>Concevoir des solutions techniques fiables.</strong><br/>
            Durant cette formation, j'ai acquis de solides fondations en programmation (orientée objet et web) et en conception de bases de données. J'y ai appris à concevoir et développer des applications logicielles de A à Z. Dans un contexte professionnel, ce socle technique me permet de comprendre rapidement l'architecture d'un projet existant et de développer des fonctionnalités performantes, parfaitement adaptées aux besoins des utilisateurs.
          </p>
        </div>

        <div className="timeline-item">
          <span className="date">2021</span>
          <h3>Baccalauréat Général, spécialité Mathématiques</h3>
          <p> Lycée international Alexandre Dumas (Algérie) <br />
            Candidat libre.</p>
        </div>

      </div>
    </section>
  );
}

export default Parcours;