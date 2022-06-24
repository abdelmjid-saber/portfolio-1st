import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Colors/colors.css";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Background />
        <Social />
        <Footer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
