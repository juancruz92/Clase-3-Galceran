import './components/Utilidades/Utilidades.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/ItemList/itemList.css'
import './components/ItemCount/ItemCount.css'
import Navbar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Running from './pages/Running';
import Urban from './pages/Urban';
import ProductDetailPage from './pages/ProductDetailPage'






function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path =":productId" element = {<ProductDetailPage />} />
          <Route path ="Running" element={<Running />}/>
          <Route path ="Urban" element = {<Urban />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
export default App;
