import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./root/pages/about/About";
import NotFound from "./root/pages/not-found/NotFound";
import RootLayout from "./root/RootLayout";
import Home from "./root/pages/home/Home";
import Contacts from "./root/pages/contacts/Contacts";
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>

      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default App;
