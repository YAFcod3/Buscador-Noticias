import React from "react";

const Noticias = ({ noticia }) => {


  //extraer los datos
  const { urlToImage, url, title, description, source } = noticia;



  //pa qndo no halla imagen en la noticia
  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;




  return (
    <div className="col s12 m6 14">
      <div className="card">
        {imagen}
        <div className="card-content">
          <h6>{title}</h6>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
