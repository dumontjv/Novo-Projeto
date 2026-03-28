import { useMemo, useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const isLogged = useMemo(() => Boolean(token), [token]);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@pedidos.com", password: "123456" })
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    setToken(data.token);
  };

  if (!isLogged) {
    return (
      <div className="center-card">
        <div className="card">
          <h1>Sistema de Gestão de Pedidos</h1>
          <p>Login rápido usando o usuário demo.</p>
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    );
  }

  return <Dashboard token={token} onLogout={() => { localStorage.removeItem("token"); setToken(""); }} />;
}
