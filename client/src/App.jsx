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
import CheckOut from "./components/CheckOut/CheckOut"
import FinalCheckOut from "./components/FinalCheckOut/FinalCheckOut.jsx"
import Orders from "./views/Orders.jsx"
import NotFound from "./views/NotFound.jsx"

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <ScrollToTop>
              <NavBar />
              <Cart />
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/item/:id" element={<ItemDetail />} />
                <Route exact path="/products/" element={<ProductListContainer />} />
                <Route exact path="/products/:category" element={<ProductListContainer />} />
                <Route exact path="/products/team/:team" element={<ProductListContainer />} />
                <Route exact path="/products/search/:search" element={<ProductListContainer />} />
                <Route exact path="/checkout/start" element={<CheckOut />} />
                <Route exact path="/checkout/end" element={<FinalCheckOut />} />
                <Route exact path="/admin/orders" element={<Orders />} />
                <Route path="*" element={<NotFound />} />

              </Routes>
              <Footer />
            </ScrollToTop>
          </CartProvider >
        </FiltersProvider>
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App
