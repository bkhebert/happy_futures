import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Placeholder pages */}
          <Route path="/about" element={<div className="p-10">About Page</div>} />
          <Route path="/contact" element={<div className="p-10">Contact Page</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
