import PropTypes from 'prop-types';

const Sidebar = ({ handleSectionChange }) => {
  return (
    <div className="sidebar">
      <button onClick={() => handleSectionChange('General')}>GENERAL</button>
      <button className="no-hover">CDMX</button>
      <div className="submenu">
        <button onClick={() => handleSectionChange('Azcapotzalco')}>Azcapotzalco</button>
        <button onClick={() => handleSectionChange('Cuahutemoc')}>Cuahutemoc</button>
        <button onClick={() => handleSectionChange('Venustiano Carranza')}>Venustiano Carranza</button>
      </div>
      <button className="no-hover">ÁREA METROPOLITANA</button>
      <div className="submenu">
        <button onClick={() => handleSectionChange('Cuatitlan Izcalli')}>Cuatitlan Izcalli</button>
        <button onClick={() => handleSectionChange('Teoloyucan')}>Teoloyucan</button>
        <button onClick={() => handleSectionChange('Melchor Ocampo')}>Melchor Ocampo</button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleSectionChange: PropTypes.func.isRequired,
};

export default Sidebar;
