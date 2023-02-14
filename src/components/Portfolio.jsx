import React from "react";
import proyect1 from "../img/portfolio/1_onepiece.svg"
import proyect2 from "../img/portfolio/2_sabujcha.svg"
import proyect3 from "../img/portfolio/3_wellcel.svg"
import proyect4 from "../img/portfolio/4_fsemillas.svg"
import proyect5 from "../img/portfolio/5_barrionline.svg"
import proyect6 from "../img/portfolio/6_codershouse.svg"
import proyect7 from "../img/portfolio/7_masya.svg"
import portfolio_icon from "../img/icons/portfolio_icono.svg"
import behance_icon from "../img/icons/behance_icon.svg"
import github_icon from "../img/icons/github_icon.svg"

import "./styles/biography.css"


export default function Portfolio (){
    return(
        <div className="background" >
        <div className="container_portfolio" id="portfolio">
        
            <div className="background_black">
                    <div className="buttons_port">
                        <button>All</button>
                        <button>Web desing</button>
                        <button>Web developer</button>
                        <button>Multimedia</button>
                    </div>

                    <div className="grilla-portfolio">
                    
                            <figure className="proyect_onepiece-container">
                                <img src={proyect1}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://onepicefandom.vercel.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/onepicefandom"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container2">
                                <img src={proyect2}/>
                                    <div className="button_site-git">
                                    <p>Sabujcha tea is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://sabujcha-tea-maquetacion.vercel.app/#/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/Sabujcha-Tea-Maquetacion"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                       
                            <figure className="proyect_onepiece-container3">
                                <img src={proyect3}/>
                                    <div className="button_site-git">
                                    <p>Knowmeet is the Mockup design of a silver educational form, oriented to the management of children's work at an early age (Web design)</p>
                                    <div className="button_git">
                                    <a  target="_blank" id="button_git" href="https://www.behance.net/gallery/163224947/Knowmeet-proyect-mockup?"><img src={behance_icon} id="behance_icon"/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container4">
                                <img src={proyect4}/>
                                    <div className="button_site-git">
                                    <p>Fundación Semillas Dashboard is the design of a digital center for emotional management of the students of the diplomas offered by the Foundation (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://robin98123.github.io/fundaci-n-semillas-dashboard-/"  target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/fundaci-n-semillas-dashboard-"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container5">
                                <img src={proyect5}/>
                                    <div className="button_site-git">
                                    <p>Barrionline is the Mockup design of a ecommerce, that seeks to help shopkeepers who do not have a presence in the network to get closer to their consumers (Web design)</p>
                                    <div className="button_git">
                        
                                    <a  target="_blank" id="button_git" href="https://www.behance.net/gallery/150279939/Barrionline-Website-Design-Home-page"><img src={behance_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                      
                            <figure className="proyect_onepiece-container6">
                                <img src={proyect6}/>
                                    <div className="button_site-git">
                                    <p>Slaughter House Coders is a roulette-style web game project that randomly removes people from a list</p>
                                    <div className="button_git">
                                    <a  href="https://wheel-of-doom-g5.netlify.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/ElPardo16/wheel-of-doom-g5/tree/main"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container7">
                                <img src={proyect7}/>
                                    <div className="button_site-git">
                                    <p>Masyá is an online store that is dedicated to selling animal care products, this project provided a platform to market them</p>
                                    <div className="button_git">
                                    <a  href="https://masy-tienda-de-mascotas.vercel.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/Masy-tienda-de-mascotas"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
        <div className="portfolio-round">
            <img src={portfolio_icon}/>
        </div>
                    </div>
            </div>
        </div>
    )
}