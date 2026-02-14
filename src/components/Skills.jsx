import './Skills.css'
function Skills() {

    return (
        <section id="competences" className="section-competences">
      <h2>Mes Compétences</h2>
      
      <div className="grille-competences">
        
        {/* Catégorie 1 : Web */}
        <div className="carte-competence">
          <h3>Développement Web</h3>
          <div className="conteneur-badges">
            <span className="badge">HTML5</span>
            <span className="badge">CSS3</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">Symfony</span>
            <span className="badge">Talwind</span>


          </div>
        </div>

        {/* Catégorie 2 : Logiciel */}
        <div className="carte-competence">
          <h3>Développement Logiciel</h3>
          <div className="conteneur-badges">
            <span className="badge">Java</span>
            <span className="badge">UML</span>
            <span className="badge">Python</span>
            <span className="badge">Spring Boot</span>

          </div>
        </div>

        {/* Catégorie 3 (Optionnelle) : Outils */}
        <div className="carte-competence">
          <h3>Outils & Méthodes</h3>
          <div className="conteneur-badges">
            <span className="badge">Docker</span>
            <span className="badge">Git / GitHub</span>
            <span className="badge">Figma</span>
            <span className="badge">VS Code</span>
            <span className="badge">Méthode Agile</span>
          </div>
        </div>

      </div>
    </section>
    );
}
export default Skills;