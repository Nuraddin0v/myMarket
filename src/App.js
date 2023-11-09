import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Categories/Categories";
import DealsProduct from "./Deals/DealsProduct";
import FeaturedProducts from "./Featured/FeaturedProducts";
import Navbar from "./Navbar/Navbar";
import Navigation from "./Navigation/Navigation";
import Nav from "./Navs/Nav";
import SaleShop from "./Sale/SaleShop";
import SaleSummer from "./SaleSummer/SaleSummer";
import Section from "./SectionOne/Section";
import Footer from "./Footer/Footer";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Navbar />
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Section />} /> 👈 Renders at /app/ */}
          {/* <Route path="/categories/PopularProducts" element={<Categories />} /> */}
          {/* <Section /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
