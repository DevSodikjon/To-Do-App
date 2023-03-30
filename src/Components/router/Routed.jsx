import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cities from "../Cities/Cities";
import ToDoList from "../ToDoList/ToDoList";
import Data from "../data/Data";
import Error from "../error/Error";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import SingleAbout from "../single-about/SingleAbout";
const Routed = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/error-404" element={<Error />} />
        <Route path="*" element={<Navigate to="/error-404" />} />
        <Route path="/Data/:id" element={<SingleAbout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routed;
