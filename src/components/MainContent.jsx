import PropTypes from 'prop-types';

const MainContent = ({ activeSection, activeImageIndex, sections, handleNextImage, handlePrevImage }) => {
    return (
        <div className="main-content">
            <h1>{activeSection.toUpperCase()}</h1>
            <div className="image-container">
                <button onClick={handlePrevImage}>Gráficas</button>
                <button onClick={handleNextImage}>Mapas</button>
            </div>
            <img src={sections[activeSection][activeImageIndex]} alt="current" className="image" />
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
