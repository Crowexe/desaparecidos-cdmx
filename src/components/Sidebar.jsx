import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ handleSectionChange }) => {
  return (
    <div className="sidebar">
      <button onClick={() => handleSectionChange('General')}>CDMX y área metropolitana</button>
      <button onClick={() => handleSectionChange('CDMX')}>
        CDMX
        <div className="submenu">
          <button onClick={() => handleSectionChange('subsection1-1')}>Alcaldía 1</button>
          <button onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 2</button>
        </div>
      </button>
      <button onClick={() => handleSectionChange('metropolitana')}>
        Área metropolitana
        <div className="submenu">
          <button onClick={() => handleSectionChange('subsection2-1')}>Municipio 1</button>
          <button onClick={() => handleSectionChange('subsection2-2')}>Municipio 2</button>
        </div>
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  handleSectionChange: PropTypes.func.isRequired,
};

export default Sidebar;
