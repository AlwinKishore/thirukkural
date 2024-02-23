import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="thirukkural/" element={<Home />} />
        <Route path="thirukkural/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
