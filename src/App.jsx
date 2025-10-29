import Home from "./pages/Home";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Order" element={<Order />} />
            <Route path="/pages/Checkout" element={<Checkout />} />
            <Route path="/pages/Tracking" element={<Tracking />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
      <ToastContainer position="top-right" autoClose={1000} />
    </main>
  );
}

export default App;
