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

      <header style={{ padding: '4rem 2rem', backgroundColor: '#0f0f0f' }}>
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
            <h1>Bonjour,<br />moi c'est <span className="highlight">Ahcene</span></h1>
            <h2><span className="text-white">Développeur</span> <span className="text-gold">Full</span> <span className="text-white">stack</span></h2>
            
            <a href="/mon-cv.pdf" download="mon-cv.pdf" className="bouton-cv">
              Télécharger mon CV 📄
            </a>
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