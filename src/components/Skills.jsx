import { useMemo } from 'react';
import './Skills.css'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiSymfony, SiTailwindcss,
  SiPython, SiSpringboot, SiDocker, SiKubernetes, SiUml, SiFigma, SiMysql,
  SiMongodb, SiMariadb, SiOracle, SiPostgresql
} from 'react-icons/si'
import { FaJava, FaCode, FaGitAlt, FaDatabase, FaTools } from 'react-icons/fa'
import { DiScrum } from "react-icons/di";

function pointPolaire(origineX, origineY, angleDeg, rayon) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: origineX + rayon * Math.sin(rad),
    y: origineY - rayon * Math.cos(rad),
  };
}

function genererPoints(origineX, origineY, angleDeg, nombre, options = {}) {
  const { rayonDepart = 170, espacement = 100, ondulation = 10 } = options;
  const points = [];
  for (let i = 0; i < nombre; i++) {
    const rayon = rayonDepart + i * espacement;
    const jitter = i % 2 === 0 ? ondulation : -ondulation;
    points.push(pointPolaire(origineX, origineY, angleDeg + jitter, rayon));
  }
  return points;
}

function construireChemin(origine, points) {
  const tous = [origine, ...points];
  if (tous.length < 2) return '';
  let d = `M ${tous[0].x.toFixed(1)} ${tous[0].y.toFixed(1)}`;
  for (let i = 1; i < tous.length - 1; i++) {
    const xc = (tous[i].x + tous[i + 1].x) / 2;
    const yc = (tous[i].y + tous[i + 1].y) / 2;
    d += ` Q ${tous[i].x.toFixed(1)} ${tous[i].y.toFixed(1)} ${xc.toFixed(1)} ${yc.toFixed(1)}`;
  }
  const avantDernier = tous[tous.length - 2];
  const dernier = tous[tous.length - 1];
  d += ` Q ${avantDernier.x.toFixed(1)} ${avantDernier.y.toFixed(1)} ${dernier.x.toFixed(1)} ${dernier.y.toFixed(1)}`;
  return d;
}

const LARGEUR = 1400;
const HAUTEUR = 850;
const RACINE = { x: 700, y: 780 };

function Skills() {

  const arbre = useMemo(() => {
    const arms = [
      {
        id: 'frontend',
        groupe: 'langages',
        angle: -72,
        couleur: '#4FD1FF',
        techs: [
          { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
          { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
          { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
          { name: 'React', Icon: SiReact, color: '#61DAFB' },
          { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
        ],
      },
      {
        id: 'backend',
        groupe: 'langages',
        angle: -34,
        couleur: '#38BDF8',
        techs: [
          { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
          { name: 'Symfony', Icon: SiSymfony, color: '#FFFFFF' },
          { name: 'Java', Icon: FaJava, color: '#f89820' },
          { name: 'Python', Icon: SiPython, color: '#3776AB' },
          { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
          { name: 'UML', Icon: SiUml, color: '#FFFFFF' },
        ],
      },
      {
        id: 'bdd',
        groupe: 'bdd',
        angle: 8,
        couleur: '#FFD34D',
        techs: [
          { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
          { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
          { name: 'MariaDB', Icon: SiMariadb, color: '#b87d5d' },
          { name: 'Oracle', Icon: SiOracle, color: '#F00000' },
          { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
        ],
      },
      {
        id: 'outils',
        groupe: 'outils',
        angle: 55,
        couleur: '#df3f3f',
        techs: [
          { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
          { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
          { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
          { name: 'VS Code', Icon: FaCode, color: '#007ACC' },
          { name: 'Agile', Icon: DiScrum, color: '#009FDB' },
          { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
        ],
      },
    ];

    const branches = arms.map(arm => {
      const points = genererPoints(RACINE.x, RACINE.y, arm.angle, arm.techs.length);
      const chemin = construireChemin(RACINE, points);
      const noeuds = arm.techs.map((tech, i) => ({ ...tech, ...points[i] }));
      return { ...arm, chemin, noeuds };
    });

    const groupes = [
      { id: 'langages', label: 'Langages & Frameworks', couleur: '#4FD1FF', total: 11, icone: FaCode },
      { id: 'bdd', label: 'Bases de Données', couleur: '#FFD34D', total: 4, icone: FaDatabase },
      { id: 'outils', label: 'Outils & Méthodes', couleur: '#df3f3f', total: 5, icone: FaTools },
    ];

    return { branches, groupes };
  }, []);

  return (
    <section id="competences" className="section-competences">
      <h2>Mes Compétences</h2>

      <div className="conteneur-arbre">
        <div className="arbre-viewport">
          <svg
            className="svg-arbre"
            viewBox={`0 0 ${LARGEUR} ${HAUTEUR}`}
            preserveAspectRatio="xMidYMax meet"
          >
            {arbre.branches.map(branche => (
              <path
                key={branche.id}
                d={branche.chemin}
                className="ligne-branche"
                style={{ stroke: branche.couleur }}
              />
            ))}
            <circle
              cx={RACINE.x}
              cy={RACINE.y}
              r={50}
              className="cercle-racine"
            />
          </svg>

          {arbre.branches.map(branche =>
            branche.noeuds.map(noeud => (
              <div
                key={noeud.name}
                className="noeud-tech"
                style={{
                  left: `${(noeud.x / LARGEUR) * 100}%`,
                  top: `${(noeud.y / HAUTEUR) * 100}%`,
                }}
              >
                <div className="cercle-tech" style={{ borderColor: branche.couleur }}>                  
                  {noeud.Icon ? <noeud.Icon color={noeud.color} size="2.7em" /> : <span>•</span>}
                </div>
                <span className="label-tech">{noeud.name}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="legende-groupes">
        {arbre.groupes.map(g => (
          <div key={g.id} className="item-legende" style={{ '--couleur-groupe': g.couleur }}>
            <span className="icone-legende">
              <g.icone size="1.2em" />
            </span>
            <div className="texte-legende">
              <span className="nom-groupe">{g.label}</span>
              <span className="compte-groupe">{g.total} technos</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;