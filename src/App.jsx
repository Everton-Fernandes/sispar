import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login/Login.jsx";
import Reembolso from "./components/reembolso/Reembolso.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolso" element={<Reembolso />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
