import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <NavLink to="/">Data</NavLink>
      <NavLink to="/Cities">Cities</NavLink>
      <NavLink to="/ToDoList">ToDoList</NavLink>
    </>
  );
};

export default Navbar;
