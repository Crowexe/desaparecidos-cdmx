import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

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
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % sections[activeSection].length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + sections[activeSection].length) % sections[activeSection].length);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidebar handleSectionChange={handleSectionChange} />
        <MainContent 
          activeSection={activeSection}
          activeImageIndex={activeImageIndex}
          sections={sections}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
      </div>
    </div>
  );
};

export default App;
