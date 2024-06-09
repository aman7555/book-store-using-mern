/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home/Home";
import Course from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./contact/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
