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
        'https://i.imgur.com/HLcC3gd.png',
        'https://i.imgur.com/37vje7B.png',
        'https://i.imgur.com/Mte6LV7.png',
        'https://i.imgur.com/riHEJBM.png',
      ],
      mapImage: [
        'https://i.imgur.com/UAa2235.jpeg',
        'https://i.imgur.com/EcYKqLw.jpeg',
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
        'https://i.imgur.com/W5KKSwZ.png',
        'https://i.imgur.com/FpOGX3q.png',
        'https://i.imgur.com/FGTlos8.png',
        'https://i.imgur.com/P6UNVcB.png',
        'https://i.imgur.com/1iGtxJz.png',
        'https://i.imgur.com/3Da4cok.png',
      ],
      mapImage: ['https://i.imgur.com/FF3dy0L.jpeg'],
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
        'https://i.imgur.com/ntYWSL6.png',
        'https://i.imgur.com/ecK0GQQ.png',
        'https://i.imgur.com/IXqIdcm.png',
        'https://i.imgur.com/TPXg2nK.png',
        'https://i.imgur.com/hQB9Kk8.png',
        'https://i.imgur.com/CswAWs3.png',
        'https://i.imgur.com/Gx1AJ0N.png',
      ],
      mapImage: ['https://i.imgur.com/3nCHfct.jpeg'],
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
        'https://i.imgur.com/blPI0S3.png',
        'https://i.imgur.com/FLfxijb.png',
        'https://i.imgur.com/CSJnqki.png',
        'https://i.imgur.com/zPj2zgc.png',
        'https://i.imgur.com/eVRem9M.png',
        'https://i.imgur.com/DOHhkwr.png',
      ],
      mapImage: ['https://i.imgur.com/R3oFv7v.jpeg'],
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
        'https://i.imgur.com/5Y1pcWz.png',
        'https://i.imgur.com/DMQILT0.png',
        'https://i.imgur.com/UPUfHbw.png',
      ],
      mapImage: ['https://i.imgur.com/n5Q3sFY.jpeg'],
      texts: [
        'Texto para Cuatitlan...',
        'Texto para Cuatitlan - Dist H...',
        'Texto para Cuatitlan - Dist M...',
      ],
    },
    Teloyucan: {
      images: [
        'https://i.imgur.com/30ChiBJ.png',
        'https://i.imgur.com/Zngc9BX.png',
        'https://i.imgur.com/7FXf8yZ.png',
      ],
      mapImage: ['https://i.imgur.com/0uxyBd0.jpeg'],
      texts: [
        'Texto para Teloyucan...',
        'Texto para Teloyucan - Dist H...',
        'Texto para Teloyucan - Dist M...',
      ],
    },
    VenustianoCarranza: {
      images: [
        'https://i.imgur.com/UckX6Jc.png',
        'https://i.imgur.com/vV5t0ex.png',
        'https://i.imgur.com/fxzhI0w.png',
        'https://i.imgur.com/lbFfi9S.png',
        'https://i.imgur.com/hsTThMg.png',
        'https://i.imgur.com/L47dZ8k.png',
      ],
      mapImage: ['https://i.imgur.com/UCrrzOv.jpeg'],
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
