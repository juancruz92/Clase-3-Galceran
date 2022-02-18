import "./components/Utilidades/Utilidades.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListContainer.css";
import "./components/ItemList/itemList.css";
import "./components/ItemCount/ItemCount.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";
import HomePage from "./pages/HomePage";
import Categorys from "./pages/Categorys";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="products">
              <Route path=":productId" element={<ProductDetailPage />} />
            </Route>
            <Route path="Categorys">
              <Route path=":category" element={<Categorys />} />
            </Route>
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
