import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const handleFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    let newFavs;

    if (favs.find((fav) => fav.id === id)) {
      //If the id is already in the array, remove it from favs
      newFavs = favs.filter((fav) => fav.id !== id);
    } else {
      //If the id is not in the array, add it to favs
      newFavs = [...favs, { name, username, id }];
    }
    setIsFav(!isFav);

    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  return (
    <div className="card">
      <Link to={`${links.dentista.path}/${id}`}>
        <img src="./images/doctora.jpg" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          favorite
        </span>
        {`${!isFav ? "Add to fav" : "Remove from fav"}`}
      </button>
    </div>
  );
};

export default Card;
