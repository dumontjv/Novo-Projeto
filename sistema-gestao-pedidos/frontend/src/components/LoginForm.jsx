import { useState } from 'react';

export default function LoginForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState('admin@pedidos.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit({ email, password });
  };

  return (
    <div className="center-card">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Sistema de Gestão de Pedidos</h1>
        <p>Faça login para acessar o painel operacional.</p>

        <label>
          <span>E-mail</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" />
        </label>

        {error ? <div className="error-box">{error}</div> : null}

        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
