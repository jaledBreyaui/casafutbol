import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import HomePage from "./components/HomePage/HomePage.jsx"
import { ProductsProvider } from "./context/ProductsContext"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Footer from "./components/Footer/Footer"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import { FiltersProvider } from "./context/FiltersContext"
import { CartProvider } from "./context/CartContext"
import ScrollToTop from "./assets/scrollToTop"
import Cart from "./components/Cart/Cart"
function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <NavBar />
            <Cart />
            <ScrollToTop>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/item/:id" element={<ItemDetail />} />
                <Route exact path="/products/" element={<ProductListContainer />} />
                <Route exact path="/products/:category" element={<ProductListContainer />} />
                <Route exact path="/products/search/:category" element={<ProductListContainer />} />
              </Routes>
            </ScrollToTop>
            <Footer />
          </CartProvider >
        </FiltersProvider>
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App
