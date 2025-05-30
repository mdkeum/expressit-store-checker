// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreForm from "./pages/StoreForm";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoreForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
