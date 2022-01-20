import './components/Utilidades/Utilidades.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/ItemCount/ItemCount.css'
import Navbar from './components/NavBar/NavBar.js';
import Contenedor from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <Navbar />
      <Contenedor />
      <ItemCount stock = "5" initial = "1" />
    </>
  );
}

export default App;
