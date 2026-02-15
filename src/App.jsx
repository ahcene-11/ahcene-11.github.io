import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Parcours from './components/Parcours'; 
import Competences from './components/Skills';
import MesProjets from './components/MesProjets';
import Contact from './components/Contact';
import maPhoto from './assets/me.jpg';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <header id="accueil" className="header-fullscreen">
        <div className="header-container">
          <div className="profile-image-wrapper">
            <div className="gradient-circle"></div>
            <img 
              src={maPhoto}
              alt="Ahcene" 
              className="profile-image"
            />
          </div>
          <div className="header-text">
            <h1>Salut,<br />moi c'est <span className="highlight">Ahcène</span></h1>
            <h2><span className="text-white">Développeur</span> <span className="text-white">Full stack</span> </h2>
            
            <div className="boutons-container">
              <a href="/mon-cv.pdf" download="mon-cv.pdf" className="bouton-cv">
                Télécharger mon CV 
              </a>
              <a href="#contact" className="bouton-cv">
                Me contacter 
              </a>
            </div>
          </div>
        </div>
      </header>

      
      <About />

      <Parcours />
      <Competences />
      <MesProjets />
      <Contact />

    </div>
  );
}

export default App;