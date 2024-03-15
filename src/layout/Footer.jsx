import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/impressum">Impressum</NavLink>
        <NavLink to="/data-privacy">Data Privacy</NavLink>
        <NavLink to="/copyright">&copy; Copyright and License</NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
