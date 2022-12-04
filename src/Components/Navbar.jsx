import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useEstadosGlobalesContext();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
