import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import ListaDetareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <div className="freecodecamp-logo-contenedor">
          <img
            src={freeCodeCampLogo}
            alt="Logo"
            className="freecodecamp-logo"
          />
        </div>
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaDetareas />
        </div>
      </div>
    </div>
  );
}

export default App;
