import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import Alertcomponent from "./Components/Alertcomponent";
function App() {
  return (
    <>
      <body className="bg-dark">
        <Alertcomponent />
        <NavBar />
        <Main />
        <Footer />
      </body>
    </>
  );
}

export default App;
