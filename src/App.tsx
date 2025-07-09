// Hàm chung
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Link web User
import Web from "./pages/Web";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Pet from "./pages/Pet";
// Link Web Admin
import AdminWeb from "./admins/AdminWeb";
import AdminSlide from "./admins/AdminSlide";
import AdminCategory from "./admins/AdminCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Link web user */}
          <Route path="/" element={<Web />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Link web admin */}
          <Route path="/admin" element={<AdminWeb />} />
          <Route path="/adminslide" element={<AdminSlide />} />
          <Route path="/category" element={<AdminCategory />} />

          {/* Link Error */}
        </Routes>
      </BrowserRouter>

      {/* 🔔 Toast hiển thị toàn cục */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        closeOnClick
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
