import PropTypes from 'prop-types';

const MainContent = ({ activeSection, sections, showMap, handleShowMapToggle }) => {
  const sectionData = sections[activeSection] || { images: [], mapImage: [], texts: [] };

  const images = showMap ? sectionData.mapImage : sectionData.images;
  const texts = sectionData.texts;

  return (
    <div className="main-content">
      <h1 className="main-title">{activeSection.toUpperCase()}</h1>
      <div className="button-container">
        <button className="button-graph" onClick={() => handleShowMapToggle(false)}>Gráfica</button>
        <button className="button-map" onClick={() => handleShowMapToggle(true)}>Mapa</button>
      </div>
      {images.length > 0 ? (
        images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`${activeSection}-${index}`} className="image" />
            {!showMap && <p>{texts[index]}</p>}
          </div>
        ))
      ) : (
        <p>No hay imagenes disponibles para esta localidad.</p>
      )}
    </div>
  );
};

MainContent.propTypes = {
  activeSection: PropTypes.string.isRequired,
  sections: PropTypes.objectOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
      mapImage: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
      texts: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  showMap: PropTypes.bool.isRequired,
  handleShowMapToggle: PropTypes.func.isRequired,
};

export default MainContent;
