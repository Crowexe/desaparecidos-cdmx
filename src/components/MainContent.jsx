import PropTypes from 'prop-types';

const MainContent = ({ activeSection, activeImageIndex, sections, handleNextImage, handlePrevImage }) => {
  const images = sections[activeSection] || [];

  return (
    <div className="main-content">
      <h1 className="main-title">{activeSection.toUpperCase()}</h1>
      {images.length > 0 ? (
        <>
          <div className="button-container">
            <button className='button-graph' onClick={handlePrevImage}>Gráfica</button>
            <button className='button-map' onClick={handleNextImage}>Mapa</button>
          </div>
          <div className="image-container">
            <img src={images[activeImageIndex]} alt={activeSection} className="image" />
          </div>
        </>
      ) : (
        <p>No hay imagen disponibles para esta localidad.</p>
      )}
    </div>
  );
};

MainContent.propTypes = {
  activeSection: PropTypes.string.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
  sections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  handleNextImage: PropTypes.func.isRequired,
  handlePrevImage: PropTypes.func.isRequired,
};

export default MainContent;
