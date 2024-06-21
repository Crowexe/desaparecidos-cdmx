import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://i.imgur.com/bDp3H0Y.png" alt="Logo" className="navbar-logo" />
        <span>DESAPARECIDOS</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Análisis
        </NavLink>
        <NavLink to="/proposito" className={({ isActive }) => (isActive ? 'active' : '')}>
          Propósito
        </NavLink>
        <NavLink to="/acerca-de-nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
          Acerca de nosotros
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
