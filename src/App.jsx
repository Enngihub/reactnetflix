import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Alertcomponent from "./Components/Alertcomponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShow from "./Components/TvShows";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-dark">
          <Alertcomponent />
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tvshow" element={<TvShow />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
