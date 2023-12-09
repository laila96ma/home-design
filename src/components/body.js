import React from 'react';
import acces from "../assets/acce.jpg";
import sallon1 from "../assets/sallon1.jpg";
import decorchambre from "../assets/decorchambre.jpg";
import decorercuisine from "../assets/decorercuisine.jpg";
import Sallebain from "../assets/Sallebain.jpg";
import "./styles/body.css";

const Body = () => {
    return (
        <div className='body'>
        <div className="projects-content"> 
            <div className="project-card"> 
                <div className="project-image">
                    <img src={acces} alt="Cuisine décorée" /> 
                </div>
                <div className="project-info">
                    <p className="project-category">Explorez notre collection d'accessoires de maison pour ajouter une 
                    touche unique à chaque coin de votre espace. Des coussins colorés aux vases élégants, des miroirs artistiques aux luminaires design, nous offrons une variété d'options pour rehausser votre décoration intérieure. Laissez libre cours à 
                    votre créativité et personnalisez votre maison selon votre style unique.</p>
                    <strong>
                        <span>Catalogue d'Accessoires de Maison </span>
                    </strong>
                </div>
            </div>
            <div className="project-card"> 
                <div className="project-image">
                    <img src={sallon1} alt="Cuisine décorée" /> 
                </div>
                <div className="project-info">
                    <p className="project-category">Explorez notre collection complète d'articles de décoration pour 
                    le salon et transformez votre espace de vie en une oasis de confort et de style. Découvrez une gamme de canapés élégants, de tables basses design, de tapis doux,
                     d'étagères de rangement et d'œuvres d'art pour donner vie à votre salon</p>
                    <strong>
                        <span>Catalogue de Salon </span>
                    </strong>
                </div>
            </div>
            <div className="project-card"> 
                <div className="project-image">
                    <img src={decorchambre} alt="Cuisine décorée" /> 
                </div>
                <div className="project-info">
                    <p className="project-category">Découvrez notre collection soigneusement sélectionnée d'articles 
                    de décoration pour la chambre. Créez un sanctuaire de relaxation avec nos ensembles de literie haut de gamme,
                     des coussins moelleux, des tapis douillets et des éclairages apaisants.
                    </p>
                    <strong>
                        <span>Catalogue de Chambre</span>
                    </strong>
                </div>
            </div>
            <div className="project-card"> 
                <div className="project-image">
                    <img src={decorercuisine} alt="Cuisine décorée" /> 
                </div>
                <div className="project-info">
                    <p className="project-category">Transformez votre cuisine en un espace fonctionnel et élégant avec nos produits de décoration pour la cuisine. Découvrez une gamme d'accessoires de cuisine,
                     de couverts de haute qualité, d'ustensiles astucieux et d'appareils électroménagers élégants.</p>
                    <strong>
                        <span>Catalogue de Cuisine </span>
                    </strong>
                </div>
            </div>
            <div className="project-card"> 
                <div className="project-image">
                    <img src={Sallebain} alt="Cuisine décorée" /> 
                </div>
                <div className="project-info">
                    <p className="project-category">Créez un havre de tranquillité dans votre salle de bain avec nos produits de décoration. Notre catalogue propose des meubles de salle de bain modernes, des accessoires
                     de rangement astucieux, des pommeaux de douche luxueux et des textiles doux pour vous envelopper de confort</p>
                    <strong>
                        <span>Catalogue de Salle de Bain </span>
                    </strong>
                </div>
            </div>
        </div>
        <hr/>
        </div>
    );
};

export default Body;
