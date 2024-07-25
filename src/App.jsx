import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CartListPage from "./pages/cartList/CartListPage";
import ShoppingCartProvider from "./context/index";
import LastComponent from "./pages/last-component/LastComponent";

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartListPage />} />
        <Route path="/logout" element={<LastComponent />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
