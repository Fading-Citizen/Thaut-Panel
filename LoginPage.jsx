import React, { useState } from 'react';
import { thautColors } from './theme';
import logo from './logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Espacio reservado para futura conexión con base de datos y API
  // const handleLogin = async () => {
  //   // Aquí irá la lógica para conectar con la API y la base de datos
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('Funcionalidad de login aún no implementada.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${thautColors.gray} 0%, #fff 100%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img src={logo} alt="Thaut Logo" style={{ width: 220, marginBottom: 32 }} />
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(30,136,229,0.08)',
        padding: 36,
        width: 340,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        border: `2px solid ${thautColors.blue}`,
      }}>
        <h2 style={{
          color: thautColors.black,
          textAlign: 'center',
          marginBottom: 8,
          fontWeight: 700,
          letterSpacing: 1,
        }}>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: '12px 16px',
            borderRadius: 8,
            border: `1.5px solid ${thautColors.indigo}`,
            outline: 'none',
            fontSize: 16,
            background: thautColors.gray,
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '12px 16px',
            borderRadius: 8,
            border: `1.5px solid ${thautColors.indigo}`,
            outline: 'none',
            fontSize: 16,
            background: thautColors.gray,
          }}
        />
        <button type="submit" style={{
          background: `linear-gradient(90deg, ${thautColors.red}, ${thautColors.orange}, ${thautColors.green}, ${thautColors.blue}, ${thautColors.purple})`,
          color: '#fff',
          fontWeight: 700,
          border: 'none',
          borderRadius: 8,
          padding: '12px 0',
          fontSize: 17,
          cursor: 'pointer',
          letterSpacing: 1,
          transition: 'background 0.3s',
        }}>Entrar</button>
        {error && <span style={{ color: thautColors.red, textAlign: 'center' }}>{error}</span>}
      </form>
    </div>
  );
};

export default LoginPage;
