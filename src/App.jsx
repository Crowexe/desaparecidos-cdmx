import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('General');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const sections = {
    General: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
    CDMX: ['/image4.jpg', '/image5.jpg'],
    metropolitana: ['/image6.jpg', '/image7.jpg', '/image8.jpg'],
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % (sections[activeSection]?.length || 1));
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + (sections[activeSection]?.length || 1)) % (sections[activeSection]?.length || 1));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar handleSectionChange={handleSectionChange} />
          <Routes>
            <Route path="/" element={<MainContent
              activeSection={activeSection}
              activeImageIndex={activeImageIndex}
              sections={sections}
              handleNextImage={handleNextImage}
              handlePrevImage={handlePrevImage}
            />} />
            <Route path="/analisis" element={<div>Analisis</div>} />
            <Route path="/proposito" element={<div>Proposito</div>} />
            <Route path="/acerca-de-nosotros" element={<div>Acerca de Nosotros</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
