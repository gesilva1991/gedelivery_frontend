import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./componets/autenticacao/AuthContext.tsx";
import { CheckToken } from "./pages/CheckToken.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/check-token" element={<CheckToken />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
