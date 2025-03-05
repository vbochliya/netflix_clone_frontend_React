import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import Footer from "./componants/login_signup/Footer.jsx";
// import Home from "./components/Home.jsx";
// import NoPage from "./components/NoPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  />   
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/auth/*" element={<Auth />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
