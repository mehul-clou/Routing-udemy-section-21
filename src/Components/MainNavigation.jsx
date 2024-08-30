import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/Products"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}

export default MainNavigation;
