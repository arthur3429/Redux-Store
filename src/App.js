import "./App.css";
import Header from "./components/header";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product-page/index.jsx";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/product/:id" element={<ProductPage/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
