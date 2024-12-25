import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Addpage from "./pages/Addpage";
import Sidebar from "./components/Sidebar";
import FooterSidebar from "./components/FooterSidebar";

function App() {
  
  return (
    <Router>
      {/* main layout */}
      <MainLayout>
        <Navbar/>
        {/* content */}
        <Content>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addpage" element={<Addpage/>}/>
          </Routes>
        </Content>
        <FooterSidebar/>
      </MainLayout>
    </Router>
  );
}

export default App;