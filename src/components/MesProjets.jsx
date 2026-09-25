import { useState } from 'react';
import './MesProjets.css';

const projets = [
  {
    titre: "Architecture distribuée - Flotte de véhicules",
    description: (
      <div className="description-detaillee">
        <p>
          Système complexe de gestion de flotte inspiré des processus de DHL Express France, reposant sur une <strong>architecture microservices</strong>.
        </p>
        <ul>
          <li><strong>Communication :</strong> Mise en place d'Apache Kafka pour le messaging asynchrone entre les services.</li>
          <li><strong>API & Sécurité :</strong> Création d'une API Gateway en GraphQL pour orchestrer des services REST et gRPC, sécurisée via Keycloak.</li>
          <li><strong>Infrastructure :</strong> Conteneurisation de l'environnement avec Docker et orchestration avancée des déploiements via <strong>Kubernetes</strong> et <strong>Helm</strong>.</li>
        </ul>
        <p>Un projet d'envergure démontrant une maîtrise des environnements distribués et de la scalabilité.</p>
      </div>
    ),
    images: ["/projets/flotte-vehicules.jpg"],
    lien: "https://github.com/M1-ROUEN-GIL/archi-distrib-flotte-vehicules",
  },
  {
    titre: "Serveur de transactions - SEPA26",
    description: (
      <div className="description-detaillee">
        <p>
          Développement d'un serveur robuste dédié au traitement et à la validation des transactions financières au format <strong>XML SEPA</strong>.
        </p>
        <ul>
          <li><strong>Backend :</strong> Conception d'endpoints REST sécurisés pour la réception des flux de paiements.</li>
          <li><strong>Validation :</strong> Implémentation de routines de contrôle strictes basées sur des schémas XSD pour garantir l'intégrité des données bancaires.</li>
          <li><strong>DevOps & Qualité :</strong> Intégration continue (CI/CD) automatisée avec des pipelines Jenkins, et documentation/tests complets de l'API via des collections Postman.</li>
        </ul>
      </div>
    ),
    images: ["/projets/sepa1.png", "/projets/sepa2.png", "/projets/sepa3.png", "/projets/sepa4.png", "/projets/sepa5.png"],
    lien: "https://github.com/ahcene-11/sepa-transactions-api",
  },
  {
    titre: "Plateforme e-bazar",
    description: (
      <div className="description-detaillee">
        <p>
          Création d'une plateforme complète de petites annonces entre particuliers, s'inspirant de l'ergonomie et des fonctionnalités de sites comme Leboncoin.
        </p>
        <ul>
          <li><strong>Gestion des annonces :</strong> Interface intuitive permettant aux utilisateurs de déposer, modifier ou supprimer des annonces avec upload d'images.</li>
          <li><strong>Parcours utilisateur :</strong> Système de panier d'achat fonctionnel, filtres de recherche par catégories, et tableau de bord personnel.</li>
          <li><strong>UI/UX :</strong> Interface responsive et dynamique conçue pour offrir une navigation fluide, que ce soit sur ordinateur ou sur mobile.</li>
        </ul>
      </div>
    ),
    images: ["/projets/ebazar.png", "/projets/ebazar2.png"],
    lien: "https://github.com/ahcene-11/e-bazar",
  },
  {
    titre: "Agora 3 V15",
    description: (
      <div className="description-detaillee">
        <p>
          Plateforme numérique centralisant plusieurs jeux de société célèbres, développée en équipe lors d'un sprint académique de niveau Master.
        </p>
        <ul>
          <li><strong>Développement Plateforme :</strong> Résolution de bugs critiques, création d'un outil de signalement (bug report) et d'un panel d'administration pour la modération des utilisateurs et des lobbies.</li>
          <li><strong>Intégration de jeux :</strong> Implémentation et refactoring de jeux classiques tels que Puissance 4, Splendor, Azul, Myrmes et Six qui prend.</li>
          <li><strong>Méthodologie & Communication :</strong> Organisation en Agile Scrum et réalisation des supports de soutenance (trailers vidéo sous CapCut, slides).</li>
        </ul>
      </div>
    ),
    images: ["/projets/agoraa.png", "/projets/agora1.png", "/projets/agora.png", "/projets/agora2.png", "/projets/agora3.png", "/projets/agora4.png"],
    lien: null,
  },
  {
    titre: "Pionniers de l'Informatique",
    description: (
      <div className="description-detaillee">
        <p>
          Plateforme web interactive et éducative conçue pour rendre hommage aux grandes figures historiques de la technologie (Alan Turing, Ada Lovelace, etc.).
        </p>
        <ul>
          <li><strong>Interactivité :</strong> Développement d'un système de quiz dynamique pour tester les connaissances des visiteurs.</li>
          <li><strong>Gestion d'état :</strong> Suivi des scores en temps réel et navigation fluide entre les différentes questions.</li>
          <li><strong>Design :</strong> Mise en page soignée mettant en valeur le contenu historique tout en gardant une interface ludique et engageante.</li>
        </ul>
      </div>
    ),
    images: ["/projets/Inf.png", "/projets/inf2.png", "/projets/inf3.png", "/projets/inf4.png", "/projets/inf5.png"],
    lien: "https://github.com/ahcene-11/Pionniers-de-l-Informatique",
  },
  {
    titre: "Jeu de bataille navale",
    description: (
      <div className="description-detaillee">
        <p>
          Adaptation numérique du célèbre jeu de plateau, conçue pour mettre en pratique les concepts avancés de la programmation orientée objet.
        </p>
        <ul>
          <li><strong>Technologies :</strong> Développé entièrement en Java avec une interface graphique bureau réalisée via JavaFX.</li>
          <li><strong>Modes de jeu :</strong> Intègre un mode multijoueur en local, ainsi qu'un mode solo affrontant une intelligence artificielle (IA) programmée sur mesure.</li>
          <li><strong>Architecture :</strong> Code structuré garantissant une séparation stricte entre la logique métier du jeu et l'affichage visuel.</li>
        </ul>
      </div>
    ),
    images: ["/projets/bataille-navale.png", "/projets/bataille-navale2.png"],
    lien: "https://github.com/ahcene-11/nom-du-repo-3",
  },
  {
    titre: "Mon Premier Site",
    description: (
      <div className="description-detaillee">
        <p>
          Site vitrine développé pour une bibliothèque, représentant mes premières armes dans l'intégration web et la structuration de l'information.
        </p>
        <ul>
          <li><strong>Bases du web :</strong> Utilisation rigoureuse de HTML5 sémantique et de CSS3 pour le design.</li>
          <li><strong>Fonctionnalités :</strong> Présentation claire du catalogue, des catégories d'ouvrages et des horaires d'ouverture.</li>
          <li>Une excellente base qui m'a permis de comprendre les fondamentaux du DOM et du positionnement CSS avant de passer à React.</li>
        </ul>
      </div>
    ),
    images: ["/projets/mon-premier-site.jpg"],
    lien: "https://github.com/ahcene-11/bibliotheque",
  },
  {
    titre: "Portfolio React",
    description: (
      <div className="description-detaillee">
        <p>
          Le site One-Page sur lequel vous naviguez actuellement, pensé comme une véritable application web moderne et performante.
        </p>
        <ul>
          <li><strong>Composants :</strong> Architecture modulaire en React, favorisant la réutilisation du code et la facilité de maintenance.</li>
          <li><strong>UI Avancée :</strong> Effets visuels modernes (Glassmorphism, animations au scroll, carrousel d'images personnalisé).</li>
          <li><strong>Déploiement :</strong> Intégration continue (CI/CD) automatisée avec GitHub Actions pour une publication sur GitHub Pages.</li>
        </ul>
      </div>
    ),
    images: ["/projets/spider-meme.webp"],
    lien: "https://github.com/ahcene-11/ahcene-11.github.io",
  },
];

function GaleriePhotoProjet({ images, titre }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photoPrecedente = () => {
    setPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const photoSuivante = () => {
    setPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="image-projet-wrapper">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${titre} - photo ${i + 1}`}
          className={`image-projet ${i === photoIndex ? 'photo-active' : ''}`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button className="fleche-interne gauche" onClick={photoPrecedente} aria-label="Photo précédente">
            &#8249;
          </button>
          
          <button className="fleche-interne droite" onClick={photoSuivante} aria-label="Photo suivante">
            &#8250;
          </button>

          <div className="indicateurs-photos">
            {images.map((_, i) => (
              <button
                key={i}
                className={`point-photo ${i === photoIndex ? 'actif' : ''}`}
                onClick={() => setPhotoIndex(i)}
                aria-label={`Voir la photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MesProjets() {
  const [index, setIndex] = useState(0);

  const projetPrecedent = () => {
    setIndex((i) => (i === 0 ? projets.length - 1 : i - 1));
  };

  const projetSuivant = () => {
    setIndex((i) => (i === projets.length - 1 ? 0 : i + 1));
  };

  const projetActuel = projets[index];

  return (
    <section id="projets" className="section-projets">
      <h2 className="titre-section">Mes Réalisations</h2>

      <div className="carrousel-projets">
        <button
          className="fleche-carrousel fleche-gauche"
          onClick={projetPrecedent}
          aria-label="Projet précédent"
        >
          &#8249;
        </button>

        <div className="carte-projet" key={index}>
          <GaleriePhotoProjet images={projetActuel.images} titre={projetActuel.titre} />

          <div className="contenu-projet">
            <h3>{projetActuel.titre}</h3>
            {projetActuel.description}
            
            {projetActuel.lien && (
              <a
                href={projetActuel.lien}
                className="lien-projet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le code source
              </a>
            )}
          </div>
        </div>

        <button
          className="fleche-carrousel fleche-droite"
          onClick={projetSuivant}
          aria-label="Projet suivant"
        >
          &#8250;
        </button>
      </div>

      <div className="indicateurs-projets">
        {projets.map((_, i) => (
          <button
            key={i}
            className={`point-indicateur ${i === index ? 'actif' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Aller au projet ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default MesProjets;