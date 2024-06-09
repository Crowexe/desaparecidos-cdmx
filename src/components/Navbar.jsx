import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Desaparecidos</div>
      <div className="navbar-links">
        <a href="#home">Analisis</a>
        <a href="#link1">Proposito</a>
        <a href="#link2">Acerca de nosotros</a>
      </div>
    </nav>
  );
};

export default Navbar;
