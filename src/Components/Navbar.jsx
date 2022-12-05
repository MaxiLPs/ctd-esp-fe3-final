import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useEstadosGlobalesContext();
  const { home, contacto, favs, dentista } = links;

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={home.path}>{home.name}</Link>
      <Link to={contacto.path}>{contacto.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      <Link to={dentista.path}>{dentista.name}</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
