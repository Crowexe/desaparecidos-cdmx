import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import './styles.css'; // Importa el archivo CSS personalizado

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
    <Container fluid>
      <Navbar className="navbar-custom" variant="dark">
        <Navbar.Brand href="#">DESAPARECIDOS</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Analisis</Nav.Link>
          <Nav.Link href="#link1">Proposito</Nav.Link>
          <Nav.Link href="#link2">Acerca de nosotros</Nav.Link>
        </Nav>
      </Navbar>
      
      <Row>
        <Col sm={2} className="sidebar-custom">
          <ListGroup>
            <ListGroup.Item action onClick={() => handleSectionChange('General')}>CDMX y área metropolitana</ListGroup.Item>
            <ListGroup.Item action onClick={() => handleSectionChange('CDMX')}>
              CDMX
              <ListGroup>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-1')}>Alcaldía 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 5</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection1-2')}>Alcaldía 6</ListGroup.Item>

              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleSectionChange('metropolitana')}>
              Área metropolitana
              <ListGroup>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-1')}>Municipio 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-2')}>Municipio 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-2')}>Municipio 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-2')}>Municipio 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-2')}>Municipio 5</ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSectionChange('subsection2-2')}>Municipio 6</ListGroup.Item>

              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        
        <Col sm={10}>
          <h1>{activeSection.toUpperCase()}</h1>
          <div className="d-flex justify-content-center">
            <Button onClick={handlePrevImage}>Gráficas</Button>            
            <Button onClick={handleNextImage}>Mapas</Button>
            <br/>
                <img src={sections[activeSection][activeImageIndex]} alt="Grafica" style={{maxWidth: '100%', height: 'auto'}} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
