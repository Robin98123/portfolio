import React, { useState } from 'react'
import './styles/services.scss'
import '../assets/fonts/icomoon-portfolio/style.css'

const Services = () => {

    const[desplegable1, setdesplegable1] = useState(true);

    const toggledesplegable1 = () => {
        setdesplegable1 (!desplegable1 )
    }

    const[desplegable2, setdesplegable2] = useState(true);

    const toggledesplegable2 = () => {
        setdesplegable2 (!desplegable2 )
    }

    const[desplegable3, setdesplegable3] = useState(true);

    const toggledesplegable3 = () => {
        setdesplegable3 (!desplegable3 )
    }

    const[desplegable4, setdesplegable4] = useState(true);

    const toggledesplegable4 = () => {
        setdesplegable4 (!desplegable4 )
    }

  return (

    <>
    <div className='services-container'>

        </div>

        <div className='habilidades-container'>

        <div className='tittle-container'>
        <span className='gradiente-right'></span>
        <h1>Mis Redes Sociales</h1>
        <span className='gradiente-left'></span>
        </div>
        </div>

        <div className='contact-container' id='contact'>
            <div className='info-container'>
                <div className='info-main'>
                    <div className='inputut-info'>
                        <h2>¡Creemos algo nuevo juntos!</h2>
                        <p>Hagamos algo nuevo, creativo,  diferente  y significativo.<br/>  Podemos impulsar y generar trafico</p>
                    </div>

                    <div className='redes-contact'>
                        <a href='https://www.linkedin.com/in/robinson-bernal-55b897ba/' target='blank'><span className='icon-linkedin'></span></a>
                        <a href='https://www.behance.net/ryrinconmultimedia' target='blank'><span className='icon-behance'></span></a>
                        <a href='https://github.com/Robin98123' target='blank'><span className='icon-github'></span></a>
                    </div>
                </div>
            </div>
        </div>

        </>
)}

export default Services