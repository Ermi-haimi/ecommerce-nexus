import Home from "./pages/Home";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    </main>
  );
}

export default App;
