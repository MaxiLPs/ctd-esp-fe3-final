import { createContext, useContext, useState } from "react";

const initialState = { theme: "light", data: [] };

const EstadosGlobales = createContext();

const EstadosGlobalesProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // con axios pegarle a la api de https://jsonplaceholder.typicode.com/users y guardar el resultado usando useMemo

  const [odontologos, setOdontologos] = useState(initialState.data);
  const [theme, setTheme] = useState(initialState.theme);

  const value = {
    odontologos,
    setOdontologos,
    theme,
    setTheme,
  };

  return (
    <EstadosGlobales.Provider value={value}>
      {children}
    </EstadosGlobales.Provider>
  );
};

export default EstadosGlobalesProvider;
export const useEstadosGlobalesContext = () => useContext(EstadosGlobales);
