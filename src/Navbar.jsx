// Navbar.js
import './Navbar.css'; // Estilos para la barra de navegación

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h2>DESAPARECIDOS</h2>
        <nav>
          <a href="#home">Inicio</a>
          <a href="#about">Acerca de nosotros</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
