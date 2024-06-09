import PropTypes from 'prop-types';

const Sidebar = ({ handleSectionChange }) => {
    return (
        <div className="sidebar">
            <button onClick={() => handleSectionChange('General')}>CDMX y área metropolitana</button>
            <div>
                <button onClick={() => handleSectionChange('CDMX')}>
                    CDMX
                </button>
                <div className="submenu">
                    <button onClick={() => handleSectionChange('subsection1-1')}>Alcaldía 1</button>
                    <button onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 2</button>
                </div>
            </div>
            <div>
                <button onClick={() => handleSectionChange('metropolitana')}>
                    Área metropolitana
                </button>
                <div className="submenu">
                    <button onClick={() => handleSectionChange('subsection2-1')}>Municipio 1</button>
                    <button onClick={() => handleSectionChange('subsection2-2')}>Municipio 2</button>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    handleSectionChange: PropTypes.func.isRequired,
};

export default Sidebar;
