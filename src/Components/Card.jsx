import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <img src="./images/doctora.jpg" alt={username} />
      <h4>
        {name} - {username}
      </h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        <span className="material-symbols-outlined fav">favorite</span> Add to
        Favs
      </button>
    </div>
  );
};

export default Card;
