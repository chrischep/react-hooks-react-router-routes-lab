import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
  <NavLink to="/" exact><ol>Home</ol></NavLink>

   <NavLink to="/movies" exact><ol>Movies</ol></NavLink>

   <NavLink to="/directors" exact><ol>Directors</ol></NavLink>

   <NavLink to="/actors"  exact> <ol>Actors</ol></NavLink>
  </div>
  );
}

export default NavBar;
