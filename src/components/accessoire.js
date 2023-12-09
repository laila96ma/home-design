import React from 'react';
import acces from "../assets/acce.jpg";
import acces1 from "../assets/acce1.jpg";
import acces2 from "../assets/acce2.webp";
import miroire from "../assets/miroire.jpeg";
import etagére from "../assets/etagére.webp";
import "./styles/body.css";
const Accessoires=()=>{
        return (
            <div className='body'>
            <div className="projects-content"> 
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={acces} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>Home</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Explorez notre collection d'accessoires de maison pour ajouter une 
                        touche unique à chaque coin de votre espace. Des coussins colorés aux vases élégants, des miroirs artistiques aux luminaires design, nous offrons une variété d'options pour rehausser votre décoration intérieure. Laissez libre cours à 
                        votre créativité et personnalisez votre maison selon votre style unique.</p>
                        <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={acces1} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>accessoire</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Découvrez notre collection soigneusement
                         sélectionnée d'articles  de décoration pour votre maison. </p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={acces2} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>accessoires</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Découvrez notre collection
                         soigneusement sélectionnée d'articles  de décoration pour votre maison. 
                        </p>
                        <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={miroire} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>mirroire</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Réfléchissez le design moderne dans votre espace avec nos miroirs décoratifs. Des cadres élégants, des formes innovantes et des détails
                         sophistiqués créent des points focaux visuels. Donnez à chaque pièce une sensation d'espace et de luminosité..</p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
                <div className="project-card"> 
                    <div className="project-image">
                        <img src={etagére} alt="Cuisine décorée" /> 
                    </div>
                    <div className="project-info">
                    <div className='info'>
                    <strong>
                            <span>étagére</span>
                        </strong>
                        <p className='prix'>1000dhs</p>
                   </div>
                        <p className="project-category">Maximisez votre espace avec notre étagère murale minimaliste.
                         Des lignes épurées, des étagères flottantes et des finitions modernes créent une solution de rangement fonctionnelle et esthétique. 
                        Ajoutez une touche de sophistication à vos murs tout en organisant vos objets préférés.</p>
                         <button className="btn">+add to cart</button>
                    </div>
                </div>
            </div>
            <hr/>
            </div>
        );
    };
    
    export default Accessoires;
     
