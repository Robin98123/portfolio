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

        <div className='tittle-container'>
            <span className='gradiente-right'></span>
            <h1>Servicios</h1>
            <span className='gradiente-left'></span>
        </div>

        {/*diseño web*/}

        <div className='target-container'>
            <div className='service-target'>
                <li>Diseño web</li>
                <div>
                <p>La web es una ventana de vital importancia, para posicionarse en internet, mostrar tus valores, productos y servicios, por este motivo debería estar optimizada para proyectar la imagen correcta.</p>
                <span className='icon-row' onClick={toggledesplegable1} ></span>
                </div>
            </div>
                <div className={`grid-services ${ desplegable1 ? 'NoisActive' : ''}`}>
                    <div>
                        <h2>Confianza</h2>
                        <span className='icon-confianza'></span>
                        <p>Una interfaz fácil y legible aumenta y transmite el profesionalismo </p>
                    </div>

                    <div>
                        <h2>Experiencia de usuario</h2>
                        <span className='icon-ExperienciaUsuario'></span>
                        <p>La navegación de tu web es un factor indispensable al momento de captar clientes nuevos </p>
                    </div>

                    <div>
                        <h2>Optimizar SEO</h2>
                        <span className='icon-SEO'></span>
                        <p>Desde el diseño puedes aumentar el trafico y posicionamiento SEO  </p>
                    </div>
                </div>
        </div>

        {/*diseño UX/UI*/}


        <div className='target-container'>
            <div className='service-target'>
                <li>Diseño UX/UI</li>
                <div>
                <p>El diseño de UX (experiencia de usuario) y UI (interfaz de usuario) es una herramienta valiosa para cualquier negocio. Aquí cinco beneficios que obtienen las empresas B2B al elegir esta estrategia de marketing digital</p>
                <span className='icon-row' onClick={toggledesplegable2} ></span>
                </div>
            </div>
                <div className={`grid-services ${ desplegable2 ? 'NoisActive' : ''}`}>
                    <div>
                        <h2>Satisfacción</h2>
                        <span className='icon-satisfaccion'></span>
                        <p>Una interfaz intuitiva hace que la fidelidad aumente significativamente</p>
                    </div>

                    <div>
                        <h2>Eficiencia y productividad</h2>
                        <span className='icon-eficiencia'></span>
                        <p>Al facilitarle la búsqueda de contenido a los clientes se aumenta la productividad</p>
                    </div>

                    <div>
                        <h2>Imagen de marca</h2>
                        <span className='icon-imagen'></span>
                        <p>Tener una interfaz sofisticada y profesional mejora la percepción en el mercado</p>
                    </div>

                    <div>
                        <h2>Conversión en ventas</h2>
                        <span className='icon-ventas'></span>
                        <p>Los servicios atractivos son mas persuasivos, lo que significa conversión en ventas</p>
                    </div>
                </div>
        </div>

        {/*Desarrollo web*/}


        <div className='target-container'>
            <div className='service-target'>
                <li>Desarrollo web</li>
                <div>
                <p>Un desarrollo web a la medida desde cero permite el 100% personalización de tu sitio o aplicativo web, además de escalabilidad y optimización directa, brindando un sitio más seguro y balanceado</p>
                <span className='icon-row' onClick={toggledesplegable3} ></span>
                </div>
            </div>
                <div className={`grid-services ${ desplegable3 ? 'NoisActive' : ''}`}>
                    <div>
                        <h2>100% a la medida</h2>
                        <span className='icon-100medida'></span>
                        <p>Al crear código desde cero se pueden generar sitios o aplicativos web 100% personalizables</p>
                    </div>

                    <div>
                        <h2>Experiencia de usuario</h2>
                        <span className='icon-experiencia-usuario'></span>
                        <p>El desarrollo web a medida permite un sistema efectivo de usuario ajustado a las necesidades, ademas de un prototipado previo</p>
                    </div>

                    <div>
                        <h2>SEO ajustado</h2>
                        <span className='icon-seo-ajustado'></span>
                        <p>El desarrollo desde cero basa las preferencias de los principales buscadores </p>
                    </div>

                    <div>
                        <h2>Escalabilidad</h2>
                        <span className='icon-escalabilidad'></span>
                        <p>Un aplicativo escalable permite ajustar y modificar sin ningún tipo de restricción </p>
                    </div>

                    <div>
                        <h2>Código limpio</h2>
                        <span className='icon-codigo-limpio'></span>
                        <p>El código limpio permite mantener funciones que si aportan al aplicativo mejorando el rendimiento</p>
                    </div>

                    <div>
                        <h2>Seguridad</h2>
                        <span className='icon-seguridad'></span>
                        <p>Los aplicativos personalizados tienen mejores  garantías frente a ataques a la red</p>
                    </div>
                </div>
        </div>

        {/*Desarrollo CMS*/}


        <div className='target-container'>
            <div className='service-target'>
                <li>Desarrollo CMS</li>
                <div>
                <p>Un sistema de gestión de contenidos permite generar sitios web en un tiempo corto, además de crear y gestionar contenido directamente sin usar código</p>
                <span className='icon-row' onClick={toggledesplegable4} ></span>
                </div>
            </div>
                <div className={`grid-services ${ desplegable4 ? 'NoisActive' : ''}`}>
                    <div>
                        <h2>Tiempo de desarrollo</h2>
                        <span className='icon-tiempo-desarrollo'></span>
                        <p>Un CMS permite ahorrar tiempo en desarrollos y procesos</p>
                    </div>

                    <div>
                        <h2>Solución rápida</h2>
                        <span className='icon-solucion-rapida'></span>
                        <p>Al trabajar con CMS se le da solución rápida a un proyecto</p>
                    </div>

                    <div>
                        <h2>Reducción en costos</h2>
                        <span className='icon-reduccion-costos'></span>
                        <p>Permite ahorrar costos en en desarrollo y capacitación en tecnologías</p>
                    </div>

                    <div>
                        <h2>Optimización en pantallas</h2>
                        <span className='icon-optimizacion-pantallas'></span>
                        <p>El mayor trafico proviene de dispositivos móviles un aplicativo adaptado al 100% se traduce en ventas</p>
                    </div>

                </div>
        </div>

        </div>

        <div className='habilidades-container'>

        <div className='tittle-container'>
        <span className='gradiente-right'></span>
        <h1>Mis habilidades</h1>
        <span className='gradiente-left'></span>
        </div>

            <div className='grid-habilities'>

                <div className='habilitie-cont'>
                    <div><h2>Adobe Suit</h2><span className='icon-adobe'></span></div>
                    <p>Diseño, Edición, vectorización, retoque y animación de material visual</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Figma | Talwind</h2><span className='icon-figma-talwind'></span></div>
                    <p>Maquetado y prototipado con guías de estilos, paletas y componentes. Implementación de Code agile </p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>HTML | CSS | JavaScript</h2><span className='icon-html'></span></div>
                    <p>Maquetar, estilizar y interaccionar proyectos web</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>Bootstrap | Sass </h2><span className='icon-Bootstrap-sass'></span></div>
                    <p>herramientas impulsoras  de estilos mejorando el flujo de trabajo en las hojas de estilo en cascada</p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>React JS</h2><span className='icon-React'></span></div>
                    <p>Herramienta definida para crear aplicativos web de amplio trafico en internet </p>
                </div>

                <div className='habilitie-cont'>
                    <div><h2>CMS Wordpress</h2><span className='icon-wordpress'></span></div>
                    <p>Sitios web rápidos y adaptables, permiten modificar contenido de manera ágil  y eficiente </p>
                </div>
            </div>
        </div>

        <div className='contact-container' id='contact'>
            <div className='info-container'>
                <div className='info-main'>
                    <div className='inputut-info'>
                        <h2>¡Creemos algo nuevo juntos!</h2>
                        <p>Hagamos algo nuevo, creativo,  diferente  y significativo.<br/>  Podemos impulsar y generar trafico</p>
                        <form action=""> 
                            <input type="email" placeholder='Ingresa tu email' className='input'/>
                            <input type="submit" className='submit'/>
                        </form>
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