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
import "./App.css";
import HomePage from "./Home/HomePage";
<link
  href="https://fonts.googleapis.com/css?family=Poppins"
  rel="stylesheet"
></link>;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Navbar />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/categories/PopularProducts" element={<Categories />} /> */}
          {/* <Section /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
