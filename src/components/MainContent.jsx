import PropTypes from 'prop-types';

const MainContent = ({ activeSection, sections, showMap, handleShowMapToggle, handleImageClick, tableContent }) => {
  const { images, mapImage, texts } = sections[activeSection];

  const renderTable = () => {
    const lines = tableContent.split('\n').filter(line => line.trim() !== '');
    const rows = lines.slice(1);

    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre de {activeSection === 'General' ? 'las alcaldías y municipios' : 'la colonia'}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const cells = row.replace(/^\d+\s+/, ''); // Eliminar los números al inicio de cada fila
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cells}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="main-content">
      <h1 className="main-title">{activeSection}</h1>
      <div className="button-container">
        <button className="button-graph" onClick={() => handleShowMapToggle(false)}>
          Gráficas
        </button>
        <button className="button-map" onClick={() => handleShowMapToggle(true)}>
          Mapas
        </button>
      </div>
      {showMap ? (
        <div className="image-container">
          {mapImage.map((map, index) => (
            <div key={index} className="map-container">
              <img src={map} alt={`Mapa ${index + 1}`} onClick={() => handleImageClick(map)} />
            </div>
          ))}
          {tableContent && renderTable()}
        </div>
      ) : (
        images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Gráfica ${index + 1}`} onClick={() => handleImageClick(image)} />
            <p>{texts[index]}</p>
          </div>
        ))
      )}
    </div>
  );
};

MainContent.propTypes = {
  activeSection: PropTypes.string.isRequired,
  sections: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    mapImage: PropTypes.arrayOf(PropTypes.string),
    texts: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showMap: PropTypes.bool.isRequired,
  handleShowMapToggle: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  tableContent: PropTypes.string.isRequired,
};

export default MainContent;
