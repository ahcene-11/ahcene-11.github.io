import './Skills.css'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiSymfony, SiTailwindcss, SiPython, SiSpringboot, SiDocker, SiUml, SiFigma } from 'react-icons/si'
import { FaJava, FaCode, FaGitAlt } from 'react-icons/fa'
import { DiScrum } from "react-icons/di";

function Skills() {

    // 1. On ajoute la propriété "color" avec les couleurs officielles (Hexadécimal)
    const technologies = {
      web: [
        { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
        { name: 'Symfony', Icon: SiSymfony, color: '#000000' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' }
      ],
      logiciel: [
        { name: 'Java', Icon: FaJava, color: '#f89820' }, // Orange de Java
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'UML', Icon: SiUml, color: '#007ACC' }
      ],
      outils: [
        { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
        { name: 'Git', Icon: FaGitAlt, color: '#fb4700' },
        { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
        { name: 'VS Code', Icon: FaCode, color: '#007ACC' },
        { name: 'Agile', Icon: DiScrum, color: '#61DAFB' }
      ]
    };

    return (
        <section id="competences" className="section-competences">
      <h2>Mes Compétences</h2>
      
      <div className="grille-competences">
        
        {/* Catégorie 1 : Web */}
        <div className="carte-competence">
          <h3>Développement Web</h3>
          <div className="conteneur-technologies">
            {technologies.web.map(tech => (
              <div key={tech.name} className="tech-item">
                <div className="tech-logo">
                  {/* 2. On passe la couleur ici, et j'ai ajouté une taille pour que ça rende bien ! */}
                  {tech.Icon ? <tech.Icon color={tech.color} size="1.8em" /> : <span>•</span>}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Catégorie 2 : Logiciel */}
        <div className="carte-competence">
          <h3>Développement Logiciel</h3>
          <div className="conteneur-technologies">
            {technologies.logiciel.map(tech => (
              <div key={tech.name} className="tech-item">
                <div className="tech-logo">
                  {tech.Icon ? <tech.Icon color={tech.color} size="1.8em" /> : <span>•</span>}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Catégorie 3 : Outils */}
        <div className="carte-competence">
          <h3>Outils & Méthodes</h3>
          <div className="conteneur-technologies">
            {technologies.outils.map(tech => (
              <div key={tech.name} className="tech-item">
                <div className="tech-logo">
                  {tech.Icon ? <tech.Icon color={tech.color} size="1.8em" /> : <span>•</span>}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    );
}

export default Skills;