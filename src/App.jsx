import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Proposito from './components/Proposito';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('General');
  const [showMap, setShowMap] = useState(false);

  const sections = {
    General: {
      images: [
        '/src/images/CDMX.png',
        '/src/images/EDOMEX.png',
        '/src/images/General Dist H.png',
        '/src/images/General Dist M.png',
      ],
      mapImage: [
        '/src/images/Mapa - cdmx.jpg',
        '/src/images/Mapa - metropolitana.jpg',
      ],
      texts: [
        'Texto para General - CDMX...',
        'Texto para General - EDOMEX...',
        'Texto para General - Dist H...',
        'Texto para General - Dist M...',
      ],
    },
    Azcapotzalco: {
      images: [
        '/src/images/municipios/Azcapotzalco/Azcapotzalco.png',
        '/src/images/municipios/Azcapotzalco/Azcapotzalco - Dist H.png',
        '/src/images/municipios/Azcapotzalco/Azcapotzalco - Dist M.png',
        '/src/images/municipios/Azcapotzalco/Azcapotzalco - El Rosario.png',
        '/src/images/municipios/Azcapotzalco/Azcapotzalco - La preciosa.png',
        '/src/images/municipios/Azcapotzalco/Azcapotzalco - Nueva España.png',
      ],
      mapImage: ['/src/images/municipios/Azcapotzalco/Mapa - Azcapotzalco.jpg'],
      texts: [
        'Texto para Azcapotzalco...',
        'Texto para Azcapotzalco - Dist H...',
        'Texto para Azcapotzalco - Dist M...',
        'Texto para Azcapotzalco - El Rosario...',
        'Texto para Azcapotzalco - La preciosa...',
        'Texto para Azcapotzalco - Nueva España...',
      ],
    },
    Cuahutemoc: {
      images: [
        '/src/images/municipios/Cuahutemoc/Cuahutemoc.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc Predict.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc Dist H.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc Dist M.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc - Colonia centro.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc - Juarez.png',
        '/src/images/municipios/Cuahutemoc/Cuahutemoc - Tabacalera.png',
      ],
      mapImage: ['/src/images/municipios/Cuahutemoc/Mapa - Cuahutemoc.jpg'],
      texts: [
        'Texto para Cuahutemoc...',
        'Texto para Cuahutemoc - Predict...',
        'Texto para Cuahutemoc - Dist H...',
        'Texto para Cuahutemoc - Dist M...',
        'Texto para Cuahutemoc - Colonia centro...',
        'Texto para Cuahutemoc - Juarez...',
        'Texto para Cuahutemoc - Tabacalera...',
      ],
    },
    MelchorOcampo: {
      images: [
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo.png',
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo Dist H.png',
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo Dist M.png',
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo - Educación.png',
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo - San Isidro.png',
        '/src/images/municipios/MelchorOcampo/Melcho Ocampo - Visitación.png',
      ],
      mapImage: ['/src/images/municipios/MelchorOcampo/Mapa - Melchor Ocampo.jpg'],
      texts: [
        'Texto para Melchor Ocampo...',
        'Texto para Melchor Ocampo - Dist H...',
        'Texto para Melchor Ocampo - Dist M...',
        'Texto para Melchor Ocampo - Educación...',
        'Texto para Melchor Ocampo - San Isidro...',
        'Texto para Melchor Ocampo - Visitación...',
      ],
    },
    Cuatitlan: {
      images: [
        '/src/images/municipios/Cuatitlan/Cuatitlan.png',
        '/src/images/municipios/Cuatitlan/Cuatitlan - Dist H.png',
        '/src/images/municipios/Cuatitlan/Cuatitlan - Dist M.png',
      ],
      mapImage: ['/src/images/municipios/Cuatitlan/Mapa - Cuatitlan Izcalli.jpg'],
      texts: [
        'Texto para Cuatitlan...',
        'Texto para Cuatitlan - Dist H...',
        'Texto para Cuatitlan - Dist M...',
      ],
    },
    Teloyucan: {
      images: [
        '/src/images/municipios/Teloyucan/Teloyucan.png',
        '/src/images/municipios/Teloyucan/Teloyucan - Dist H.png',
        '/src/images/municipios/Teloyucan/Teloyucan - Dist M.png',
      ],
      mapImage: ['/src/images/municipios/Teloyucan/Mapa - Teloyucan.jpg'],
      texts: [
        'Texto para Teloyucan...',
        'Texto para Teloyucan - Dist H...',
        'Texto para Teloyucan - Dist M...',
      ],
    },
    VenustianoCarranza: {
      images: [
        '/src/images/municipios/VenustianoCarranza/Venustiano Carranza.png',
        '/src/images/municipios/VenustianoCarranza/Venustiano Dist H.png',
        '/src/images/municipios/VenustianoCarranza/Venustiano Dist M.png',
        '/src/images/municipios/VenustianoCarranza/Venustiano - 10 de mayo.png',
        '/src/images/municipios/VenustianoCarranza/Venustiano - Fiviport.png',
        '/src/images/municipios/VenustianoCarranza/Venustiano - Merced.png',
      ],
      mapImage: ['/src/images/municipios/VenustianoCarranza/Mapa - Venustiano Carranza.jpg'],
      texts: [
        'Texto para Venustiano Carranza...',
        'Texto para Venustiano Carranza - Dist H...',
        'Texto para Venustiano Carranza - Dist M...',
        'Texto para Venustiano Carranza - 10 de mayo...',
        'Texto para Venustiano Carranza - Fiviport...',
        'Texto para Venustiano Carranza - Merced...',
      ],
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setShowMap(false);
  };

  const handleShowMapToggle = (showMap) => {
    setShowMap(showMap);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidebar handleSectionChange={handleSectionChange} />
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                activeSection={activeSection}
                sections={sections}
                showMap={showMap}
                handleShowMapToggle={handleShowMapToggle}
              />
            }
          />
          <Route path="/proposito" element={<Proposito />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
