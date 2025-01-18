// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import Home from "./pages/Home.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./componets/autenticacao/AuthContext.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <AuthProvider>
//     <BrowserRouter basename="/">
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   </StrictMode>
// );





// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import Home from "./pages/Home.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./componets/autenticacao/AuthContext.tsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId='38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com'>
//     <BrowserRouter basename="/">
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//       </GoogleOAuthProvider>
//   </StrictMode>
// );













import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const googleClientId = '38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com'; // Substitua com seu Client ID

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <GoogleOAuthProvider clientId={googleClientId}>
  //   <App />
  // </GoogleOAuthProvider>

   <GoogleOAuthProvider clientId={googleClientId}>
    <BrowserRouter basename="/">
         <Routes>
           <Route path="/" element={<App />} />
           <Route path="/home" element={<Home />} />
         </Routes>
       </BrowserRouter>
  </GoogleOAuthProvider>
  
);
