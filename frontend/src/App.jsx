import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Home from "./pages/Home";
import Flips from "./pages/Flips";
import GrindsAndSlides from "./pages/GrindsAndSlides";
import AddTrick from "./pages/AddTrick";
import Copyright from "./pages/Copyright";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flips" element={<Flips />} />
            <Route path="/grinds-and-slides" element={<GrindsAndSlides />} />
            <Route path="/add-trick" element={<AddTrick />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
