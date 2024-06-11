import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Desaparecidos</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Analisis
        </NavLink>
        <NavLink to="/proposito" className={({ isActive }) => (isActive ? 'active' : '')}>
          Proposito
        </NavLink>
        <NavLink to="/acerca-de-nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
          Acerca de nosotros
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
