import Home from "./pages/Home";
import Booking from "./pages/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
