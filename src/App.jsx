import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
  return (
    // <Routes>
    // </Routes>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        {/* <Route path="/favorites" element={<Favs />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
