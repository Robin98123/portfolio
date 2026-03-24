import React from "react";
import './styles/footer.scss'
import LogoFooter from '../assets/logofooter.svg'
import '../assets/fonts/icomoon-portfolio/style.css'

const Footer = () => {
    return(
        <>
        <div className="footer_container">
            <div className="logo-footer-contain">
                <img src={LogoFooter} alt="" />
                <p>2023 developer by Robinson Rincon Rtag</p>
            </div>
            <div className="links-info-contain">
                <div>
                    <h3>Contenido</h3>
                    <a href="#Galery">Mi trabajo.</a>
                    <a href="https://linktr.ee/rtagcontact" target="_blank" rel="noreferrer">Info</a>
                </div>
                <div>
                    <h3>Contacto</h3>
                    <a href="https://www.linkedin.com/in/robinson-bernal-55b897ba/" target="_blank" rel="noreferrer">
                        Linkedin<span className="icon-flecha"></span>
                    </a>
                    <a href="https://drive.google.com/file/d/1VPWutphHoqDaL98xdioI6GAGHNoxX4Zf/view?usp=sharing" target="_blank" rel="noreferrer">
                        CV<span className="icon-flecha"></span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;

