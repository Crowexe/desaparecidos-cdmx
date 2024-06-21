const Proposito = () => {
  return (
    <div className="main-content">
      <h1 className="main-title">Propósito</h1>
      <p>
        Ante la complejidad y la urgencia de abordar el problema de desapariciones en la Ciudad de México y su área metropolitana, 
        presentamos una propuesta integral que busca no solo recopilar y analizar datos, sino también ofrecer herramientas visuales y accesibles 
        para entender y actuar frente a este desafío, durante todo el proyecto se utilizara la metodología KDD (Knowledge Discovery in Databases) 
        que nos servirá para llevar un orden en la extracción, análisis y procesamiento de datos para el proyecto.
      </p>
      <ol>
        <li>
          <strong>Recopilación de Datos Detallada:</strong>{' '}
          Proponemos iniciar con una meticulosa extracción de registros de desapariciones en las alcaldías y municipios seleccionados de la CDMX y EdoMEX, 
          abarcando el periodo de 2018 al 2023. Esta base de datos servirá como el fundamento primordial para todas las etapas posteriores de análisis.
        </li>
        <li>
          <strong>Análisis Avanzado con Aprendizaje Automático:</strong>{' '} 
          Una vez recopilados los datos, emplearemos algoritmos de aprendizaje automático para identificar patrones, tendencias y características comunes entre los casos. 
          Esta fase es crucial para descubrir patrones que puedan haber pasado desapercibidos en análisis tradicionales.
        </li>
        <li>
          <strong>Caracterización Geográfica y Demográfica:</strong>{' '} 
          A través de un análisis segmentado, nos enfocaremos en las áreas geográficas con mayor incidencia de desapariciones. Al considerar distintas variables 
          buscamos entender las dinámicas y factores asociados a estos eventos en diferentes contextos.
        </li>
        <li>
          <strong>Desarrollo de Plataforma:</strong>{' '} 
          Para democratizar el acceso a esta información y fomentar la transparencia, diseñaremos un sitio web. Esta plataforma ofrecerá informes, 
          estadísticas visuales que permitan a los usuarios explorar y comprender la problemática además de factores de riesgo.
        </li>
      </ol>
      <p>
        Por la complejidad para conseguir los datos y lo límitado del proyecto, sólo se tomaron en cuenta las 3 alcadías y municipios con mayor indice de desapariciones en relación con su número de habitantes y a su vez, este mismo críterio se les aplico a las 3 colonias de cada uno de los seleccionados.
      </p>
      <p>
        A continuación se deja un link para descargar el Excel donde se junto toda la información obtenida.
      </p>
      <a href="https://docs.google.com/spreadsheets/d/1gyfBmxRbIa3solbcYK4_mQh53KTCbrqX/edit?usp=sharing&ouid=115778200416186961155&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
        <img src="https://i.imgur.com/oux5jBf.png" alt="Enlace al documento" className="link-image" />
      </a>
    </div>
  );
};

export default Proposito;
