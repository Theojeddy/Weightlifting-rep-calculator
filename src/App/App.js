import Calculator from "../Pages/Calculator";
import Home from "../Pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {
  const [title, setTitle] = useState("Home")

  
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home title={title} setTitle={setTitle} />} />
          <Route
            path="/Calculator"
            element={<Calculator title={title} setTitle={setTitle} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
