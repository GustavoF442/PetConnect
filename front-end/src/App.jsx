import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />;

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
      

      <Footer />
    </BrowserRouter>

  );
  
  
}

export default App;
