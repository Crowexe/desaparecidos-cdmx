import './App.css';
import Navbar from './Navbar.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="App">
      <div className="content">
        <section id="home">
          <h1>Ciudad de México y área metropolitana</h1>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>Mapa</td>
                  <td>Gráfica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default App;
