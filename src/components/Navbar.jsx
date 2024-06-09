import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Desaparecidos</div>
            <div className="navbar-links">
                <Link to="/" className={getLinkClass('/')}>Analisis</Link>
                <Link to="/proposito" className={getLinkClass('/proposito')}>Proposito</Link>
                <Link to="/acerca-de-nosotros" className={getLinkClass('/acerca-de-nosotros')}>Acerca de nosotros</Link>
            </div>
        </nav>
    );
};

export default Navbar;
