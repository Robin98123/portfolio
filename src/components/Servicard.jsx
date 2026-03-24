import { useRef } from 'react';
import './styles/spotlighcard.scss';
import "../assets/fonts/icomoon-portfolio/style.css";
import habilidadesdata from '../data/habilidades.json';

const Servicard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };



  return (

    <>

    <div className='tittle-container'>
            <span className='gradiente-right'></span>
            <h1>Habilidades</h1>
            <span className='gradiente-left'></span>
        </div>
    
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}

                        <div className='grid-habilities'>

                <div className='habilitie-cont'>
                    <div><h2>Herramientas Adobe Suit</h2> <span className='icon-adobe'></span></div>
                    <p>Diseño, Edición, vectorización, retoque, dominio avanzado de:                   
                        <ul>
                            <br></br>   
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                            <li>After Effects</li>
                            <li>Premiere</li>
                        </ul>          
                    </p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Branding</h2><span className='icon-eficiencia'></span></div>
                    <p>Creación de identidad visual, logos y sistemas de marca coherentes y estratégicos.</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Motion / Video</h2><span className='icon-imagen'></span></div>
                    <p>Animación, motion graphics y contenido audiovisual para redes y productos digitales.</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Social Media</h2><span className='icon-escalabilidad'></span></div>
                    <p>Diseño de contenido visual para redes sociales enfocado en engagement y conversión.</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Diseño y desarrollo web</h2><span className='icon-optimizacion-pantallas'></span></div>
                    <p>Sitios web rápidos y adaptables: 
                        <ul>
                            <br></br>   
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Figma Design</li>
                            <li>Prototipado</li>
                        </ul>
                    </p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>CMS Wordpress</h2><span className='icon-wordpress'></span></div>
                    <p>Sitios web rápidos y adaptables, permiten modificar contenido de manera ágil  y eficiente </p>
                </div>
            </div>
    </div>

    </>
  );
};

export default Servicard;
