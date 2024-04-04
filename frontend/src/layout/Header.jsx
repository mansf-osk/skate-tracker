import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="title">Skate-Tracker</h1>
      <nav>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/flips">Flip Tricks</NavLink>
          </li>
          <li>
            <NavLink to="/grinds-and-slides">Grinds and Slides</NavLink>
          </li>
          <li>
            <NavLink to="/add-trick">Add Trick</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
