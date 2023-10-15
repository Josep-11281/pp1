// LoginForm.js

import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const containerStyle = {
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Inicia sesión</h2>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input type="text" id="correo" name="correo" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" style={inputStyle} />
      </div>
      <Link to="/inicio">
        <button style={buttonStyle}>Inicia sesión</button>
      </Link>
    </div>
  );
};

export default LoginForm;







