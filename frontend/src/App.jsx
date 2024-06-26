import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Home from "./pages/Home";
import Flips from "./pages/Flips";
import GrindsAndSlides from "./pages/GrindsAndSlides";
import AddTrick from "./pages/AddTrick";
import Contact from "./pages/Contact";
import DataPrivacy from "./pages/DataPrivacy";
import Copyright from "./pages/Copyright";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

// Parent component for the whole page.
// Displays header and footer and routes between all the different pages and their components.
// Catch-all route at the bottom to display NotFound for wrong routes.
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
