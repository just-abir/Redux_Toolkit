import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router";
import Collection from "./components/Collection";
import Logo from "./components/Navbar/Navbar/Logo";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/photos" element={<Hero />} />
        <Route path="/videos" element={<Hero />} />
        <Route path="/gif" element={<Hero />} />
        <Route path="/favourite" element={<Collection />} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default App;
