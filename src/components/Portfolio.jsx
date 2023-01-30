import React from "react";
import proyect1 from "../img/portfolio/1_onepiece.svg"
import proyect2 from "../img/portfolio/2_sabujcha.svg"
import proyect3 from "../img/portfolio/3_wellcel.svg"
import proyect4 from "../img/portfolio/4_fsemillas.svg"
import proyect5 from "../img/portfolio/5_barrionline.svg"
import proyect6 from "../img/portfolio/6_codershouse.svg"
import proyect7 from "../img/portfolio/7_masya.svg"
import portfolio_icon from "../img/icons/portfolio_icono.svg"

import "./styles/biography.css"
import github_icon from "../img/icons/github_icon.svg"

export default function Portfolio (){
    return(
        <div className="container_portfolio">
            <div className="background_black">
                    <div className="buttons_port">
                        <button>All</button>
                        <button>Web desing</button>
                        <button>Web developer</button>
                        <button>Multimedia</button>
                    </div>

                    <div className="grilla-portfolio">

                        <div>
                    
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
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://sabujcha-tea-maquetacion.vercel.app/#/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/Sabujcha-Tea-Maquetacion"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div>
                            <figure className="proyect_onepiece-container3">
                                <img src={proyect3}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://onepicefandom.vercel.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/onepicefandom"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container4">
                                <img src={proyect4}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://sabujcha-tea-maquetacion.vercel.app/#/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/Sabujcha-Tea-Maquetacion"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container5">
                                <img src={proyect5}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://onepicefandom.vercel.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/onepicefandom"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div>
                            <figure className="proyect_onepiece-container6">
                                <img src={proyect6}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://sabujcha-tea-maquetacion.vercel.app/#/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/Sabujcha-Tea-Maquetacion"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>

                            <figure className="proyect_onepiece-container7">
                                <img src={proyect7}/>
                                    <div className="button_site-git">
                                    <p>One Piece fandom is a layout project with HTML and CSS technologies, minimum viable product (MVP)</p>
                                    <div className="button_git">
                                    <a  href="https://onepicefandom.vercel.app/" target="_blank" id="button_site"> Visit site </a>
                                    <a  target="_blank" id="button_git" href="https://github.com/Robin98123/onepicefandom"><img src={github_icon}/></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="portfolio-round">
            <img src={portfolio_icon}/>
            </div>
            </div>
        </div>
    )
}