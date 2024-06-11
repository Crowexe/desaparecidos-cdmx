import PropTypes from 'prop-types';

const Sidebar = ({ handleSectionChange }) => {
  return (
    <div className="sidebar">
      <button onClick={() => handleSectionChange('General')}>CDMX y área metropolitana</button>
      <button onClick={() => handleSectionChange('CDMX')}>CDMX</button>
      <div className="submenu">
        <button onClick={() => handleSectionChange('Alcaldía 1')}>Alcaldía 1</button>
        <button onClick={() => handleSectionChange('Alcaldía 2')}>Alcaldía 2</button>
      </div>
      <button onClick={() => handleSectionChange('Metropolitana')}>Área metropolitana</button>
      <div className="submenu">
        <button onClick={() => handleSectionChange('Municipio 1')}>Municipio 1</button>
        <button onClick={() => handleSectionChange('Municipio 2')}>Municipio 2</button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleSectionChange: PropTypes.func.isRequired,
};

export default Sidebar;
