import './MesProjets.css';

function MesProjets() {
  return (
    <section id="projets" className="section-projets">
      <h2 className="titre-section">Mes Réalisations</h2>
      
      <div className="grille-projets">
        
        <div className="carte-projet">
          <h3>Mon Premier Site</h3>
          <p>Un site web pour une bibliothèque.</p>
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>

        <div className="carte-projet">
          <h3>Pionniers de l'Informatique</h3>
          <p>
            <strong>Site interactif & éducatif.</strong><br/>
            Une plateforme dédiée aux figures historiques de la tech (Turing, Lovelace...). avec un system de quiz.
          </p>
         
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>

        <div className="carte-projet">
          <h3>Jeu de bataille navale</h3>
          <p>Jeu développé en Java et JavaFX et propose : <br />
                - Un mode solo contre une IA <br />
                - Un mode multijoueur en local
          </p>
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>

        <div className="carte-projet">
          <h3>Portfolio React</h3>
          <p>Le site sur lequel vous êtes actuellement !</p>
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>

        <div className="carte-projet">
          <h3>e-bazar</h3>
          <p>Un site de petites annonces style "Leboncoin"</p>
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>

        <div className="carte-projet">
          <h3>Agora 3 V15</h3>
          <p>Plateforme de jeux en ligne</p>
          <a href="#" className="lien-projet">Voir le projet</a>
        </div>
      </div>
    </section>
  );
}

export default MesProjets;