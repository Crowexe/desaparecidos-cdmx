import { useState, useEffect } from 'react';
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
  const [modalImage, setModalImage] = useState(null);
  const [tableContent, setTableContent] = useState('');

  const sections = {
    General: {
      images: [
        'https://i.imgur.com/HLcC3gd.png',
        'https://i.imgur.com/37vje7B.png',
        'https://i.imgur.com/Mte6LV7.png',
        'https://i.imgur.com/riHEJBM.png',
      ],
      mapImage: [
        'https://i.imgur.com/xB72cui.jpeg',
        'https://i.imgur.com/YwIXd4V.jpeg',
      ],
      texts: [
        'Al analizar la gráfica, se identifica un aumento preocupante en las desapariciones a partir del segundo semestre de 2018. Este pico comenzó a disminuir justo al inicio de la pandemia de Covid-19 en el segundo semestre de 2019. Aunque los registros de desapariciones continuaron, se observó una disminución en el número de casos. Sin embargo, fue tras concluir la pandemia, en el primer semestre de 2022, cuando los casos de denuncias comenzaron a aumentar nuevamente, aunque con cifras inferiores a las registradas en 2018.',
        'Como podemos observar en esta grafica a diferencia de los casos en la Ciudad de México, en la zona metropolitana los índices tanto para hombres como para mujeres son bastantes similares, se puede notar como a partir del primer semestre del año 2019 las denuncias de desaparecidos crecieron de manera alarmante, a pesar de la situación de salud que se vivía en aquellos años debido a la pandemia de COVID-19 en la zona metropolitana no se vio una baja en el número de desaparecidos sino hasta el año 2021 donde el numero fue decreciendo gradualmente para empezar de nuevo a la alza en el año 2022. ',
        'Distribución de probabilidad por edades para hombres',
        'Distribución de probabilidad por edades para mujeres.',
      ],
      tableFile: 'general.txt', 

    },
    Azcapotzalco: {
      images: [
        'https://i.imgur.com/W5KKSwZ.png',
        'https://i.imgur.com/GDSx5Vk.png',
        'https://i.imgur.com/FpOGX3q.png',
        'https://i.imgur.com/FGTlos8.png',
        'https://i.imgur.com/P6UNVcB.png',
        'https://i.imgur.com/1iGtxJz.png',
        'https://i.imgur.com/3Da4cok.png',
      ],
      mapImage: ['https://i.imgur.com/jQcKTF8.jpeg'],
      texts: [
        'El perfil de víctimas revela que los hombres de 15-19 años presentan 46 casos y las mujeres de la misma edad 84 casos, siendo las mujeres más propensas (84 vs 46 casos), con mayor incidencia en marzo, mayo y noviembre, ubicándose principalmente en las colonias El Rosario, Nueva España y La Preciosa, en una población distribuida en 23.8% (0-14 años), 31.4% (15-29 años), 33.4% (30-59 años), 11.4% (60 años y más), y con una situación socioeconómica en la que el 25.6% vive en pobreza extrema y el 36.8% en pobreza moderada. (Meses de mayor desaparición: Mayo, Junio y Noviembre)',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
        'Analísis de la Colonia El Rosario.',
        'Analísis de la Colonia La preciosa.',
        'Analísis de la Colonia Nueva España.',
      ],
      tableFile: 'azcapotzalco.txt',
    },
    Cuahutemoc: {
      images: [
        'https://i.imgur.com/ntYWSL6.png',
        'https://i.imgur.com/OJPMNkG.png',
        'https://i.imgur.com/IXqIdcm.png',
        'https://i.imgur.com/TPXg2nK.png',
        'https://i.imgur.com/hQB9Kk8.png',
        'https://i.imgur.com/CswAWs3.png',
        'https://i.imgur.com/Gx1AJ0N.png',
      ],
      mapImage: ['https://i.imgur.com/9VVV49M.jpeg'],
      texts: [
        'La Alcaldía Cuauhtémoc presenta características que la hacen susceptible a la problemática de las desapariciones. La alta concentración de población vulnerable, la infraestructura urbana deficiente, la falta de coordinación institucional, la desconfianza social y la ausencia de políticas públicas efectivas son factores que contribuyen a este fenómeno. Además la alcaldía presenta zonas con poca iluminación pública, calles desiertas y espacios públicos sin vigilancia adecuada, lo que crea un ambiente propicio para la comisión de delitos sin ser detectados. La falta de cámaras de seguridad y sistemas de vigilancia electrónica también dificulta la identificación de los responsables y la recuperación de las víctimas. Es muy posible que las colonias Tabacalera, zona rosa y centro tenga mayor presencia de desapariciones entre los mese de abril y julio debido a vacaciones de semana santa así como atracción turística e incremento de actividades nocturnas. (Meses de mayor desaparición: Julio, Noviembre y diciembre)',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
        'Analísis de la Colonia centro.',
        'Analísis de la Colonia Juarez.',
        'Analísis de la Colonia Tabacalera.',
      ],
      tableFile: 'cuauhtemoc.txt',
    },
    MelchorOcampo: {
      images: [
        'https://i.imgur.com/blPI0S3.png',
        'https://i.imgur.com/OG8Olgc.png',
        'https://i.imgur.com/FLfxijb.png',
        'https://i.imgur.com/CSJnqki.png',
        'https://i.imgur.com/zPj2zgc.png',
        'https://i.imgur.com/eVRem9M.png',
        'https://i.imgur.com/DOHhkwr.png',
      ],
      mapImage: ['https://i.imgur.com/disqO4W.jpeg'],
      texts: [
        'El análisis de Melchor Ocampo revela que los adolescentes de 15 a 19 años son el grupo más afectado, tanto en hombres (10 casos) como en mujeres (23 casos), siendo las mujeres más propensas a las desapariciones (23 vs. 10 casos), con mayor incidencia en abril y octubre, principalmente en las localidades de Educación, San Isidro y Visitación, en una población distribuida en 23.5% (0-14 años), 31.4% (15-29 años), 33.8% (30-59 años), 11.3% (60 años y más), y con una situación socioeconómica en la que el 9.8% vive en pobreza extrema y el 24.8% en pobreza moderada, lo cual podría estar correlacionado con la vulnerabilidad a las desapariciones, ya que la pobreza incrementa los riesgos de sufrir estas situaciones, afectando predominantemente a adolescentes, especialmente a mujeres, en ciertos meses y localidades específicas.',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
        'Analísis de la Colonia Educación.',
        'Analísis de la Colonia San Isidro.',
        'Analísis de la Colonia Visitación.',
      ],
      tableFile: 'melchor_ocampo.txt',
    },
    Cuatitlan: {
      images: [
        'https://i.imgur.com/5Y1pcWz.png',
        'https://i.imgur.com/Fq4sMFL.png',
        'https://i.imgur.com/DMQILT0.png',
        'https://i.imgur.com/UPUfHbw.png',
      ],
      mapImage: ['https://i.imgur.com/E9YAGY6.jpeg'],
      texts: [
        'El análisis de Cuautitlán Izcalli revela que los adolescentes de 15 a 19 años son los más afectados por las desapariciones, con 58 casos en hombres y 121 en mujeres, siendo las mujeres más propensas (121 vs. 58 casos), con mayor incidencia en diciembre y julio, y las localidades con más casos son Centro Urbano, De San Francisco Tepojaco y Adolfo López Mateos, en una población distribuida en 8.6% (15-29 años), 8.3% (20-24 años), 8.5% (30-39 años), 11.3% (60 años y más), y una situación socioeconómica donde el 3.6% vive en pobreza extrema y el 27.9% en pobreza moderada, lo que contribuye a la vulnerabilidad frente a las desapariciones, destacando que la pobreza, la violencia de género y otros factores de seguridad incrementan los riesgos, afectando predominantemente a adolescentes, especialmente a mujeres, en ciertos meses y localidades específicas.',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
      ],
      tableFile: 'cuatitlan_izcalli.txt',
    },
    Teoloyucan: {
      images: [
        'https://i.imgur.com/30ChiBJ.png',
        'https://i.imgur.com/6H6cQHP.png',
        'https://i.imgur.com/Zngc9BX.png',
        'https://i.imgur.com/7FXf8yZ.png',
      ],
      mapImage: ['https://i.imgur.com/EsEfaOJ.jpeg'],
      texts: [
        'El análisis de Teoloyucan muestra que los hombres más afectados tienen entre 15 y 19 años (15 casos) y las mujeres más vulnerables están en el mismo grupo de edad (25 casos), siendo las mujeres más propensas a las desapariciones (25 vs. 15 casos), con mayor incidencia en enero, mayo y agosto, principalmente en las localidades de Santa Cruz del Monte, Misiones Teoloyucan y Santa María Caliacac, en una población distribuida en 24.8% (0-14 años), 28.7% (15-29 años), 34.1% (30-59 años), 12.4% (60 años y más), y con una situación socioeconómica en la que el 18.2% vive en pobreza extrema y el 29.6% en pobreza moderada.',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
      ],
      tableFile: 'teoloyucan.txt',
    },
    VenustianoCarranza: {
      images: [
        'https://i.imgur.com/UckX6Jc.png',
        'https://i.imgur.com/VMwKQEf.png',
        'https://i.imgur.com/vV5t0ex.png',
        'https://i.imgur.com/fxzhI0w.png',
        'https://i.imgur.com/lbFfi9S.png',
        'https://i.imgur.com/hsTThMg.png',
        'https://i.imgur.com/L47dZ8k.png',
      ],
      mapImage: ['https://i.imgur.com/qMnBy12.jpeg'],
      texts: [
        'El análisis del perfil de las víctimas revela que los hombres de 30 a 34 años son los más afectados, posiblemente por actividades laborales o de ocio, mientras que las mujeres jóvenes de 15 a 19 años son las más vulnerables, destacando la violencia de género y la vulnerabilidad social, además, aunque ambos sexos son víctimas, las mujeres representan un número significativamente mayor de casos debido a factores sociales, económicos y culturales que las hacen más vulnerables. (Meses de mayor desaparición: Junio, Octubre y Febrero)',
        'Predicción para el 2024',
        'Distribución de probabilidad por edades para hombres.',
        'Distribución de probabilidad por edades para mujeres.',
        'Analísis de la Colonia 10 de mayo.',
        'Analísis de la Colonia Fiviport.',
        'Analísis de la Colonia Merced.',
      ],
      tableFile: 'venustiano_carranza.txt',
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setShowMap(false);
    setTableContent('');
  };

  const handleShowMapToggle = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleMouseMove = (e) => {
    const modalImage = document.querySelector('.modal-image');
    const rect = modalImage.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    modalImage.style.transformOrigin = `${x}% ${y}%`;
  };

  useEffect(() => {
    if (showMap) {
      const filePath = `/${sections[activeSection].tableFile}`;
      fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
          setTableContent(text);
        });
    }
  }, [showMap, activeSection]);

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar handleSectionChange={handleSectionChange} />
                <MainContent
                  activeSection={activeSection}
                  sections={sections}
                  showMap={showMap}
                  handleShowMapToggle={handleShowMapToggle}
                  handleImageClick={handleImageClick}
                  tableContent={tableContent}
                />
              </>
            }
          />
          <Route path="/proposito" element={<Proposito />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
        </Routes>
      </div>
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content zoomable" onMouseMove={handleMouseMove}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <img src={modalImage} alt="Modal" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
