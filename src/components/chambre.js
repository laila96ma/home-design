import React from 'react';
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";
import bedroom4 from "../assets/bedroom4.jpg";
import bedroom5 from "../assets/bedroom5.jpg";
import { Link } from "react-router-dom";
import "./styles/body.css";
const BedRoom=()=>{
        return (
            <div className='body'>
            <div className="projects-content"> 
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={bedroom1} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>chambre à coucher</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Simplifiez votre espace de repos avec notre collection . 
                        Des lignes épurées, des tons apaisants et des matériaux naturels se combinent pour 
                        créer une atmosphère sereine. Profitez d'une chambre à coucher qui favorise la tranquillité et l'équilibre.</p>
                        <button className="btn"><Link className="link" to="/addTOCart">+add to cart</Link></button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={bedroom2} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>chambre à coucher</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Transformez votre chambre en un havre de luxe avec notre suite . Des détails raffinés, des finitions dorées et des tissus somptueux font de
                         cette collection un choix parfait pour ceux qui recherchent une expérience de sommeil véritablement royale.</p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
                
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={bedroom3} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>chambre à coucher</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Plongez dans le luxe moderne avec notre chambre à coucher Élégance Urbaine. 
                        Des lignes épurées, des tons neutres et des touches de métal créent une atmosphère contemporaine et sophistiquée. 
                        Transformez votre espace de sommeil en un refuge chic et tendance..</p>
                        <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={bedroom4} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>chambre à coucher</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Laissez-vous envelopper par le charme rustique de notre suite de chambre à coucher. Des meubles en bois chaleureux, des textiles doux et des accents vintage créent une ambiance accueillante.
                         Parfait pour ceux qui recherchent une touche de confort rustique dans leur sanctuaire nocturne.</p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={bedroom5} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>chambre à coucher</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Exprimez votre côté créatif avec notre chambre bohème chic.
                         Des motifs exotiques, des couleurs vibrantes et des textiles texturés créent une atmosphère artistique et libre.
                         Idéal pour ceux qui veulent apporter une touche de bohème à leur espace intime.</p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
            </div>
            <hr/>
            </div>
        );
    };
    
    export default BedRoom;
     

