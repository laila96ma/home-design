import React from 'react';
import living1 from "../assets/living1.jpg";
import living2 from "../assets/living2.jpg";
import living3 from "../assets/living3.jpg";
import HPCLeather from "../assets/HPCLeather.jpg";
import sallon1 from "../assets/sallon1.jpg";
import livingclp from "../assets/livingclp.jpg";
import "./styles/body.css";
const LivingRoom=()=>{
        return (
            <div className='body'>
            <div className="projects-content"> 
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={living1} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Redéfinissez votre espace de vie avec notre salon moderne chic. Des lignes épurées, des couleurs neutres et des accents métalliques créent une 
                        esthétique contemporaine. Plongez dans le confort tout en ajoutant une touche d'élégance à votre salon.</p>
                        <strong>
                            <span> </span>
                        </strong>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={living2} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Créez une atmosphère apaisante avec notre collection de salon. 
                        Des meubles en bois clair, des tons pastel et des formes simples se combinent pour offrir un espace accueillant et serein.
                         Parfait pour ceux qui recherchent une touche nordique dans leur salon.</p>
                        <strong>
                            <span></span>
                        </strong>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={living3} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Laissez libre cours à votre créativité avec notre salon . 
                        Des couleurs vibrantes, des motifs audacieux et des textiles moelleux créent une ambiance décontractée et artistique. 
                        Transformez votre espace en un lieu accueillant pour la détente et la socialisation.
                        </p>
                        <strong>
                            <span></span>
                        </strong>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={HPCLeather} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Optez pour le raffinement intemporel avec notre collection de salon à 
                        l'élégance traditionnelle. Des meubles richement ornés, des couleurs classiques et des détails 
                        sophistiqués créent une ambiance luxueuse. Ajoutez une touche de grandeur à votre espace de vie</p>
                        <strong>
                            <span> </span>
                        </strong>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={sallon1} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Adoptez le style urbain avec notre salon . Des matériaux bruts, 
                        des textures authentiques et des accents métalliques créent une ambiance moderne et audacieuse. </p>
                        <strong>
                            <span></span>
                        </strong>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={livingclp} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                        <p className="project-category">Retrouvez le charme  dans votre salon avec notre collection .
                         Des meubles en bois vieilli, des tons doux et des touches de toile de jute créent une atmosphère chaleureuse et invitante.
                         Plongez dans votre sallonet laissez-vous transporter dans une oasis de détente à la maison</p>
                        <strong>
                            <span> </span>
                        </strong>
                    </div>
                </div>
            </div>
            <hr/>
            </div>
        );
    };
    
    export default LivingRoom;
     

