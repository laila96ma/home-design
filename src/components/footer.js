import React from 'react';
import Facebook from "../assets/Facebook.png";
import instagram from "../assets/instagram.webp";
import WhatsApp from "../assets/WhatsApp.webp";
import "./styles/footer.css";
const Footer=()=>{
    return(
       <div className='body'>
        <div className='contact'>
            <h3>contact</h3>
            <p>HomeDesign@gmail.com</p>
            <p>rue alqods,bloc A</p>
        </div>
        <div className='réesaux' >
        <img className='lien' src={Facebook} alt='Facebook'/>
        <img className='lien' src={instagram} alt='instagram'/>
        <img className='lien' src={WhatsApp} alt='WhatsApp'/>
        </div>
        </div> 
    )
}
export default Footer;