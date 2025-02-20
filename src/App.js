import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Creategallery from "./pages/creategallery";
import Gallery from "./pages/gallery";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-gallery" element={<Creategallery />}></Route>
        <Route path="/gallary" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
