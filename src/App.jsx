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
        'https://imgur.com/GeneralDistH.png',
        'https://imgur.com/GeneralDistM.png',
      ],
      mapImage: [
        'https://imgur.com/MapaCDMX.jpg',
        'https://imgur.com/MapaMetropolitana.jpg',
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
        'https://imgur.com/Azcapotzalco.png',
        'https://imgur.com/AzcapotzalcoDistH.png',
        'https://imgur.com/AzcapotzalcoDistM.png',
        'https://imgur.com/AzcapotzalcoElRosario.png',
        'https://imgur.com/AzcapotzalcoLaPreciosa.png',
        'https://imgur.com/AzcapotzalcoNuevaEspana.png',
      ],
      mapImage: ['https://imgur.com/MapaAzcapotzalco.jpg'],
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
        'https://imgur.com/Cuahutemoc.png',
        'https://imgur.com/CuahutemocPredict.png',
        'https://imgur.com/CuahutemocDistH.png',
        'https://imgur.com/CuahutemocDistM.png',
        'https://imgur.com/CuahutemocColoniaCentro.png',
        'https://imgur.com/CuahutemocJuarez.png',
        'https://imgur.com/CuahutemocTabacalera.png',
      ],
      mapImage: ['https://imgur.com/MapaCuahutemoc.jpg'],
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
        'https://imgur.com/MelchorOcampo.png',
        'https://imgur.com/MelchorOcampoDistH.png',
        'https://imgur.com/MelchorOcampoDistM.png',
        'https://imgur.com/MelchorOcampoEducacion.png',
        'https://imgur.com/MelchorOcampoSanIsidro.png',
        'https://imgur.com/MelchorOcampoVisitacion.png',
      ],
      mapImage: ['https://imgur.com/MapaMelchorOcampo.jpg'],
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
        'https://imgur.com/Cuatitlan.png',
        'https://imgur.com/CuatitlanDistH.png',
        'https://imgur.com/CuatitlanDistM.png',
      ],
      mapImage: ['https://imgur.com/MapaCuatitlanIzcalli.jpg'],
      texts: [
        'Texto para Cuatitlan...',
        'Texto para Cuatitlan - Dist H...',
        'Texto para Cuatitlan - Dist M...',
      ],
    },
    Teloyucan: {
      images: [
        'https://imgur.com/Teloyucan.png',
        'https://imgur.com/TeloyucanDistH.png',
        'https://imgur.com/TeloyucanDistM.png',
      ],
      mapImage: ['https://imgur.com/MapaTeloyucan.jpg'],
      texts: [
        'Texto para Teloyucan...',
        'Texto para Teloyucan - Dist H...',
        'Texto para Teloyucan - Dist M...',
      ],
    },
    VenustianoCarranza: {
      images: [
        'https://imgur.com/VenustianoCarranza.png',
        'https://imgur.com/VenustianoCarranzaDistH.png',
        'https://imgur.com/VenustianoCarranzaDistM.png',
        'https://imgur.com/VenustianoCarranza10DeMayo.png',
        'https://imgur.com/VenustianoCarranzaFiviport.png',
        'https://imgur.com/VenustianoCarranzaMerced.png',
      ],
      mapImage: ['https://imgur.com/MapaVenustianoCarranza.jpg'],
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
