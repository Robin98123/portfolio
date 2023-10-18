import React from 'react'
import "./styles/hero.scss"
import Lottie from 'react-lottie'
import noteData from '../assets/img/animacion_hero1.json'
import '../assets/fonts/icomoon-portfolio/style.css'

const defaultOptions ={
    loop: true,
    autoplay: true,
    renderSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }, animationData: noteData
}

export default function Header (){
    return(

        <div className='hero_container'>

            <div className='info-hero'>
                <div className='tittle-container'>
                    <h2><span>.</span>Hola! soy <b>Robinson Rincon</b></h2>

                    <h1>Diseño UX/UI & <br/>
                        Desarrollo web Frontend
                    </h1>
                </div>  

                <p>
                Soy diseñador UX/UI  y  desarrollador web frontend enfocado  en el diseño centrado en el usuario, Empleo enfoques creativos para construir experiencias memorables
                </p>

                <a href="#contact">¡Creemos algo nuevo juntos!<span class="icon-flecha"></span></a>
            </div>


           <div className='animation-container'><Lottie options={defaultOptions} /></div>
        </div>
    )
};
