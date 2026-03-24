import React, { useState } from "react";
import "./styles/proyects.scss";
import "../assets/fonts/icomoon-portfolio/style.css";
import imgsData from "../data/projects.json";

const Proyects = () => {

  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Diseño Web", "Branding", "Motion Graphics"];

  const getFilteredImgs = () => {
    if (activeFilter === "Todos") return imgsData;
    return imgsData.filter(img => img.tag === activeFilter);
  };

  return (
    <div className="gallery-container" id="Proyects">
      
      <div className='tittle-container'>
            <span className='gradiente-right'></span>
            <h1>Proyectos</h1>
            <span className='gradiente-left'></span>
        </div>

      {/* FILTROS */}
      <ul className="filters">
        {filters.map((filter, i) => (
          <li key={i}>
            <input
              type="radio"
              id={`filter-${filter}`}
              name="filter"
              checked={activeFilter === filter}
              onChange={() => setActiveFilter(filter)}
            />
            <label htmlFor={`filter-${filter}`}>
              {filter}
            </label>
          </li>
        ))}
      </ul>

      {/* GALERÍA */}
      <ul className="gallery">
        {getFilteredImgs().map((img, i) => (
          <li key={i} className="gallery-item">
            <figure>

              <a href={img.url} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.author} />
              </a>

              <figcaption>
                <div>{img.author}</div>
                <span>{img.tag}</span>
                <p>{img.description}</p>

                <a
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project"
                >
                  Ver proyecto
                </a>
              </figcaption>

            </figure>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Proyects;